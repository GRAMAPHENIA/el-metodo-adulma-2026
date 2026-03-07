'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(
	() =>
		import('@/src/features/contact/contact-form').then(
			module => module.ContactForm,
		),
	{
		ssr: false,
		loading: () => (
			<section className='section-spacing bg-surface-base' aria-hidden='true'>
				<div className='mx-auto max-w-2xl px-4'>
					<div className='h-96 animate-pulse border border-brand-ink/15 bg-surface-base shadow-card' />
				</div>
			</section>
		),
	},
);

export function LazyContactForm() {
	return <ContactForm />;
}
