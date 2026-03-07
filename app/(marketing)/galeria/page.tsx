import type { Metadata } from 'next';

import { LazyContactForm } from '@/src/features/contact/lazy-contact-form';
import { PhotoGallerySection } from '@/src/features/galeria/sections/photo-gallery-section';
import { VideoGallerySection } from '@/src/features/galeria/sections/video-gallery-section';
import { getBreadcrumbJsonLd } from '@/src/lib/seo/jsonld';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import { siteConfig } from '@/src/lib/seo/site-config';
import type { SeoPageConfig } from '@/src/types/content';

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
