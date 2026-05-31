import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'El Método Adulma',
		short_name: 'Adulma',
		description:
			'Método integral para adultos mayores con foco en movimiento, cognición y bienestar.',
		start_url: '/',
		display: 'standalone',
		background_color: '#FEE6B9',
		theme_color: '#FDB259',
		icons: [
			{
				src: '/logo-navbar.webp',
				type: 'image/webp',
				sizes: '480x250',
			},
		],
	};
}
