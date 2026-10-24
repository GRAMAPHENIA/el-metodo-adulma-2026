import { siteConfig, socialLinks } from '@/src/lib/seo/site-config';

type BreadcrumbItem = {
	name: string;
	item: string;
};

const organizationId = `${siteConfig.domain}/#organization`;

// Sedes principales. Deben coincidir con el texto visible del sitio.
const sedesPrincipales = [
	{
		name: 'Olivos',
		streetAddress: 'Ricardo Gutiérrez 1372',
		addressLocality: 'Olivos',
		addressRegion: 'Buenos Aires',
	},
	{
		name: 'Belgrano',
		streetAddress: 'Vuelta de Obligado 2042',
		addressLocality: 'Belgrano',
		addressRegion: 'Ciudad Autónoma de Buenos Aires',
	},
	{
		name: 'Don Torcuato',
		streetAddress: 'Ruta 202 y Balbastro',
		addressLocality: 'Don Torcuato',
		addressRegion: 'Buenos Aires',
	},
	{
		name: 'Retiro-Recoleta',
		streetAddress: 'Suipacha 1333',
		addressLocality: 'Retiro',
		addressRegion: 'Ciudad Autónoma de Buenos Aires',
	},
	{
		name: 'Tigre',
		streetAddress: 'Av. Cazón 1336',
		addressLocality: 'Tigre',
		addressRegion: 'Buenos Aires',
	},
];

export function getOrganizationJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': organizationId,
		name: siteConfig.name,
		url: siteConfig.domain,
		logo: `${siteConfig.domain}/logo-navbar.webp`,
		sameAs: [socialLinks.instagram, socialLinks.facebook],
		description: siteConfig.description,
		location: sedesPrincipales.map(sede => ({
			'@type': 'Place',
			name: sede.name,
			address: {
				'@type': 'PostalAddress',
				streetAddress: sede.streetAddress,
				addressLocality: sede.addressLocality,
				addressRegion: sede.addressRegion,
				addressCountry: 'AR',
			},
		})),
	};
}

export function getWebsiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: siteConfig.name,
		url: siteConfig.domain,
		inLanguage: 'es',
	};
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.item,
		})),
	};
}

export function getCourseJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Curso online El METODO ADULMA®',
		description:
			'Capacitación para profesionales e instructores orientada al bienestar de adultos mayores.',
		provider: {
			'@type': 'Organization',
			'@id': organizationId,
			name: siteConfig.name,
			url: siteConfig.domain,
		},
	};
}
