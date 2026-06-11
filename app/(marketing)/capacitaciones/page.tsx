import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { CreatorSection } from '@/src/features/metodo/sections/creator-section';
import { TrainingOverviewSection } from '@/src/features/capacitaciones/sections/training-overview-section';
import { LazyContactForm } from '@/src/features/contact/lazy-contact-form';
import { getBreadcrumbJsonLd, getCourseJsonLd } from '@/src/lib/seo/jsonld';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import { siteConfig } from '@/src/lib/seo/site-config';
import type { SeoPageConfig } from '@/src/types/content';

const InstructorsSection = dynamic(
	() =>
		import('@/src/features/capacitaciones/sections/instructors-section').then(
			module => module.InstructorsSection,
		),
	{
		loading: () => <section className='section-spacing bg-surface-base' aria-hidden='true' />,
	},
);

const CourseGallerySection = dynamic(
	() =>
		import('@/src/features/capacitaciones/sections/course-gallery-section').then(
			module => module.CourseGallerySection,
		),
	{
		loading: () => <section className='section-spacing bg-surface-base' aria-hidden='true' />,
	},
);

const seoConfig: SeoPageConfig = {
	title: 'Capacitaciones',
	description:
		'Formación certificada para profesionales e instructores interesados en enseñar El Método Adulma.',
	path: '/capacitaciones',
	keywords: [
		'capacitaciones',
		'curso adulto mayor',
		'curso online',
		'instructores adulma',
	],
};

export const metadata: Metadata = buildPageMetadata(seoConfig);

export default function CapacitacionesPage() {
	return (
		<>
			<h1 className='sr-only'>Capacitaciones de El Método Adulma</h1>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						getBreadcrumbJsonLd([
							{ name: 'Inicio', item: siteConfig.domain },
							{
								name: 'Capacitaciones',
								item: `${siteConfig.domain}/capacitaciones`,
							},
						])
					),
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(getCourseJsonLd()),
				}}
			/>
			<TrainingOverviewSection />
			<CreatorSection mode='training' />
			<InstructorsSection />
			<CourseGallerySection />
			<LazyContactForm />
		</>
	);
}
