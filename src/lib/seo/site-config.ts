import type { NavItem, SiteConfig } from '@/src/types/content';

export const siteConfig: SiteConfig = {
	name: 'El Método Adulma',
	description:
		'Método integral para bienestar de adultos mayores, con cursos para profesionales e instructores.',
	domain: 'https://elmetodoadulma.com',
	locale: 'es-AR',
	defaultOgImage: '/og-image.webp',
};

export const navItems: NavItem[] = [
	{ label: 'Inicio', href: '/' },
	{ label: 'El Método', href: '/nosotros' },
	{ label: 'Capacitaciones', href: '/capacitaciones' },
	{ label: 'Galería', href: '/galeria' },
	{ label: 'Contacto', href: '/#contacto' },
];

export const socialLinks = {
	instagram: 'https://www.instagram.com/elmetodoadulma/',
	facebook: 'https://www.facebook.com/El.metodo.adulma',
};
