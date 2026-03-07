import type { Metadata } from 'next';

import { LazyContactForm } from '@/src/features/contact/lazy-contact-form';
import { CreatorSection } from '@/src/features/metodo/sections/creator-section';
import { MethodOverviewSection } from '@/src/features/metodo/sections/method-overview-section';
import { getBreadcrumbJsonLd } from '@/src/lib/seo/jsonld';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import { siteConfig } from '@/src/lib/seo/site-config';
import type { SeoPageConfig } from '@/src/types/content';

const seoConfig: SeoPageConfig = {
	title: 'El Método',
	description:
		'Conoce los fundamentos de El Método Adulma y el enfoque profesional para adultos mayores.',
	path: '/nosotros',
	keywords: [
		'El Método',
		'adulma',
		'metodología para adultos mayores',
		'ana t de león',
	],
};

export const metadata: Metadata = buildPageMetadata(seoConfig);

export default function NosotrosPage() {
	return (
		<>
			<h1 className='sr-only'>El Método Adulma</h1>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						getBreadcrumbJsonLd([
							{ name: 'Inicio', item: siteConfig.domain },
							{ name: 'El Método', item: `${siteConfig.domain}/nosotros` },
						])
					),
				}}
			/>
			<MethodOverviewSection />
			<CreatorSection />
			<LazyContactForm />
		</>
	);
}
