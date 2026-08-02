function getEnv(name: string) {
	return process.env[name]?.trim();
}

export function getSiteUrl() {
	return getEnv('NEXT_PUBLIC_SITE_URL') ?? 'https://elmetodoadulma.com';
}

export function getPlausibleDomain() {
	return getEnv('PLAUSIBLE_DOMAIN');
}
