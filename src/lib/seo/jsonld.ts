import { siteConfig, socialLinks } from '@/src/lib/seo/site-config';

type BreadcrumbItem = {
	name: string;
	item: string;
};

export function getOrganizationJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteConfig.name,
		url: siteConfig.domain,
		logo: `${siteConfig.domain}/logo-navbar.webp`,
		sameAs: [socialLinks.instagram, socialLinks.facebook],
		description: siteConfig.description,
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
		name: 'Curso online El Método Adulma',
		description:
			'Capacitación para profesionales e instructores orientada al bienestar de adultos mayores.',
		provider: {
			'@type': 'Organization',
			name: siteConfig.name,
			sameAs: siteConfig.domain,
		},
	};
}
