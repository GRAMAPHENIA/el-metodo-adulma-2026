import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { LazyContactForm } from '@/src/features/contact/lazy-contact-form';
import { HeroSection } from '@/src/features/home/sections/hero-section';
import { buildPageMetadata } from '@/src/lib/seo/metadata';
import type { SeoPageConfig } from '@/src/types/content';

const ScheduleSection = dynamic(
	() =>
		import('@/src/features/home/sections/schedule-section').then(
			module => module.ScheduleSection,
		),
	{
		loading: () => <section className='section-spacing bg-surface-base' aria-hidden='true' />,
	},
);

const TestimonialsSection = dynamic(
	() =>
		import('@/src/features/home/sections/testimonials-section').then(
			module => module.TestimonialsSection,
		),
	{
		loading: () => <section className='section-spacing bg-surface-base' aria-hidden='true' />,
	},
);

const seoConfig: SeoPageConfig = {
	title: 'Inicio',
	description:
		'Método integral para adultos mayores con enfoque en movimiento, cognición y bienestar comunitario.',
	path: '/',
	keywords: [
		'Método Adulma',
		'adultos mayores',
		'envejecimiento activo',
		'bienestar',
		'actividades para mayores',
	],
};

export const metadata: Metadata = buildPageMetadata(seoConfig);

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<ScheduleSection />
			<TestimonialsSection />
			<LazyContactForm />
		</>
	);
}
