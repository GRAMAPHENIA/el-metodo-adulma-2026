<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

const CONTACT_RECIPIENT = 'consultas@elmetodoadulma.com';
const CONTACT_SENDER = 'consultas@elmetodoadulma.com';
const CONTACT_DISPLAY_NAME = 'El METODO ADULMA®';
const MAX_REQUEST_BYTES = 20000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_SECONDS = 900;

function json_response(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function contains_header_control_characters(string $value): bool
{
    return preg_match('/[\x00-\x1F\x7F]/u', $value) === 1;
}

function contains_message_control_characters(string $value): bool
{
    return preg_match('/[\x00\x0B\x0C\x0E-\x1F\x7F]/u', $value) === 1;
}

function is_rate_limited(string $clientKey): bool
{
    $directory = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR
        . 'el-metodo-contact-rate-limit';

    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        error_log('El METODO ADULMA: no se pudo crear el directorio de rate limit.');
        return false;
    }

    $path = $directory . DIRECTORY_SEPARATOR . hash('sha256', $clientKey) . '.json';
    $handle = fopen($path, 'c+');
    if ($handle === false) {
        error_log('El METODO ADULMA: no se pudo abrir el archivo de rate limit.');
        return false;
    }

    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        return false;
    }

    $now = time();
    $raw = stream_get_contents($handle);
    $stored = is_string($raw) && $raw !== '' ? json_decode($raw, true) : [];
    $attempts = is_array($stored) ? $stored : [];
    $attempts = array_values(array_filter(
        $attempts,
        static fn ($timestamp): bool => is_int($timestamp)
            && $timestamp > ($now - RATE_LIMIT_WINDOW_SECONDS)
    ));

    $limited = count($attempts) >= RATE_LIMIT_MAX_REQUESTS;

    if (!$limited) {
        $attempts[] = $now;
        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, json_encode($attempts));
        fflush($handle);
    }

    flock($handle, LOCK_UN);
    fclose($handle);

    return $limited;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    header('Allow: POST');
    json_response(405, [
        'ok' => false,
        'code' => 'METHOD_NOT_ALLOWED',
        'message' => 'Usá el formulario para enviar tu consulta.',
    ]);
}

$contentType = strtolower(trim((string) ($_SERVER['CONTENT_TYPE'] ?? '')));
if (strpos($contentType, 'application/json') !== 0) {
    json_response(415, [
        'ok' => false,
        'code' => 'UNSUPPORTED_MEDIA_TYPE',
        'message' => 'El formato de la solicitud no es válido.',
    ]);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > MAX_REQUEST_BYTES) {
    json_response(413, [
        'ok' => false,
        'code' => 'PAYLOAD_TOO_LARGE',
        'message' => 'La consulta supera el tamaño permitido.',
    ]);
}

$input = file_get_contents('php://input') ?: '';
if ($input === '' || strlen($input) > MAX_REQUEST_BYTES) {
    json_response($input === '' ? 400 : 413, [
        'ok' => false,
        'code' => $input === '' ? 'INVALID_JSON' : 'PAYLOAD_TOO_LARGE',
        'message' => $input === ''
            ? 'No se recibieron los datos del formulario.'
            : 'La consulta supera el tamaño permitido.',
    ]);
}

$data = json_decode($input, true);
if (!is_array($data) || json_last_error() !== JSON_ERROR_NONE) {
    json_response(400, [
        'ok' => false,
        'code' => 'INVALID_JSON',
        'message' => 'Los datos del formulario no son válidos.',
    ]);
}

$name = trim((string) ($data['name'] ?? ''));
$lastName = trim((string) ($data['lastName'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));
$sourcePath = trim((string) ($data['sourcePath'] ?? ''));
$website = trim((string) ($data['website'] ?? ''));
$elapsedMs = filter_var($data['elapsedMs'] ?? null, FILTER_VALIDATE_INT);

// Honeypot: simulamos éxito para no enseñarles a los bots a evadir el filtro.
if ($website !== '') {
    json_response(200, [
        'ok' => true,
        'message' => 'Consulta enviada correctamente.',
    ]);
}

$invalid = $name === ''
    || text_length($name) < 2
    || text_length($name) > 80
    || text_length($lastName) > 80
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || text_length($email) > 120
    || text_length($phone) > 40
    || text_length($message) < 10
    || text_length($message) > 3000
    || $sourcePath === ''
    || $sourcePath[0] !== '/'
    || text_length($sourcePath) > 200
    || $elapsedMs === false
    || $elapsedMs < 2500
    || contains_header_control_characters($name)
    || contains_header_control_characters($lastName)
    || contains_header_control_characters($email)
    || contains_header_control_characters($phone)
    || contains_header_control_characters($sourcePath)
    || contains_message_control_characters($message);

if ($invalid) {
    json_response(422, [
        'ok' => false,
        'code' => 'VALIDATION_ERROR',
        'message' => 'Revisá los datos ingresados e intentá nuevamente.',
    ]);
}

$clientAddress = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (is_rate_limited($clientAddress)) {
    header('Retry-After: ' . RATE_LIMIT_WINDOW_SECONDS);
    json_response(429, [
        'ok' => false,
        'code' => 'RATE_LIMITED',
        'message' => 'Recibimos varias consultas. Esperá unos minutos antes de volver a intentar.',
    ]);
}

if (!function_exists('mail')) {
    error_log('El METODO ADULMA: mail() no está disponible en el hosting.');
    json_response(500, [
        'ok' => false,
        'code' => 'CONFIGURATION_ERROR',
        'message' => 'El servidor no puede procesar el envío.',
    ]);
}

$fullName = trim($name . ' ' . $lastName);
$subject = sprintf('[Contacto web] %s', $fullName);
$text = implode("\n", [
    'Nueva consulta desde elmetodoadulma.com',
    '',
    'Nombre: ' . $fullName,
    'Email: ' . $email,
    'Teléfono: ' . ($phone !== '' ? $phone : '-'),
    'Página de origen: ' . $sourcePath,
    '',
    'Mensaje:',
    $message,
]);

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$encodedDisplayName = '=?UTF-8?B?' . base64_encode(CONTACT_DISPLAY_NAME) . '?=';
$encodedReplyName = '=?UTF-8?B?' . base64_encode($fullName) . '?=';
$headers = [
    'From: ' . $encodedDisplayName . ' <' . CONTACT_SENDER . '>',
    'Reply-To: ' . $encodedReplyName . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(
    CONTACT_RECIPIENT,
    $encodedSubject,
    $text,
    implode("\r\n", $headers)
);

if (!$sent) {
    error_log('El METODO ADULMA: el servidor no pudo entregar el correo al reenviador.');
    json_response(502, [
        'ok' => false,
        'code' => 'DELIVERY_ERROR',
        'message' => 'No se pudo enviar la consulta desde el hosting.',
    ]);
}

json_response(200, [
    'ok' => true,
    'message' => 'Consulta enviada correctamente.',
]);
