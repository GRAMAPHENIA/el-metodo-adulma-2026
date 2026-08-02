import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, 'out');

const requiredFiles = ['index.html', '.htaccess', 'api/contact.php'];
const forbiddenOutputNames = new Set(['.env', '.env.local']);

async function assertFile(relativePath) {
	const absolutePath = path.join(outputRoot, relativePath);
	const fileStat = await stat(absolutePath).catch(() => null);
	if (!fileStat?.isFile()) {
		throw new Error(`Falta ${relativePath} en la salida para Hostinger.`);
	}
}

async function walk(directory) {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const absolutePath = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await walk(absolutePath)));
		} else if (entry.isFile()) {
			files.push(absolutePath);
		}
	}

	return files;
}

for (const relativePath of requiredFiles) {
	await assertFile(relativePath);
}

const contactEndpoint = await readFile(
	path.join(outputRoot, 'api/contact.php'),
	'utf8',
);

if (!contactEndpoint.includes('consultas@elmetodoadulma.com')) {
	throw new Error('El endpoint no apunta al buzón de consultas esperado.');
}

if (!contactEndpoint.includes('mail(')) {
	throw new Error(
		'El endpoint no contiene el envío de correo desde Hostinger.',
	);
}

const outputFiles = await walk(outputRoot);

for (const absolutePath of outputFiles) {
	const relativePath = path.relative(outputRoot, absolutePath);
	if (forbiddenOutputNames.has(path.basename(absolutePath))) {
		throw new Error(`Se incluyó un archivo secreto en out/: ${relativePath}`);
	}
}

console.log(
	`Salida Hostinger verificada: ${outputFiles.length} archivos, endpoint PHP presente y sin archivos de entorno.`,
);
