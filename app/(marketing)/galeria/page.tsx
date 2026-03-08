import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { LazyContactForm } from '@/src/features/contact/lazy-contact-form';
import { getBreadcrumbJsonLd } from '@/src/lib/seo/jsonld';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import { siteConfig } from '@/src/lib/seo/site-config';
import type { SeoPageConfig } from '@/src/types/content';

const PhotoGallerySection = dynamic(
	() =>
		import('@/src/features/galeria/sections/photo-gallery-section').then(
			module => module.PhotoGallerySection,
		),
	{
		loading: () => <section className='section-spacing bg-surface-base' aria-hidden='true' />,
	},
);

const VideoGallerySection = dynamic(
	() =>
		import('@/src/features/galeria/sections/video-gallery-section').then(
			module => module.VideoGallerySection,
		),
	{
		loading: () => <section className='section-spacing bg-surface-base' aria-hidden='true' />,
	},
);

const seoConfig: SeoPageConfig = {
	title: 'Galería',
	description:
		'Imágenes y videos de clases, encuentros y capacitaciones de El Método Adulma.',
	path: '/galeria',
	keywords: ['galería', 'videos', 'adultos mayores', 'Método Adulma'],
};

export const metadata: Metadata = buildPageMetadata(seoConfig);

export default function GaleriaPage() {
	return (
		<>
			<h1 className='sr-only'>Galería de El Método Adulma</h1>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						getBreadcrumbJsonLd([
							{ name: 'Inicio', item: siteConfig.domain },
							{ name: 'Galería', item: `${siteConfig.domain}/galeria` },
						])
					),
				}}
			/>
			<PhotoGallerySection />
			<VideoGallerySection />
			<LazyContactForm />
		</>
	);
}
