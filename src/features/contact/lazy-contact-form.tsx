'use client';

import { useEffect, useRef, useState } from 'react';

import { Container } from '@/src/components/ui/container';

type ContactFormComponent = typeof import('@/src/features/contact/contact-form').ContactForm;

export function LazyContactForm() {
	const sectionRef = useRef<HTMLElement>(null);
	const [shouldLoad, setShouldLoad] = useState(false);
	const [ContactForm, setContactForm] = useState<ContactFormComponent | null>(
		null,
	);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section || shouldLoad) return;

		const observer = new IntersectionObserver(
			entries => {
				if (!entries[0]?.isIntersecting) return;
				setShouldLoad(true);
				observer.disconnect();
			},
			{
				rootMargin: '400px 0px',
			},
		);

		observer.observe(section);

		return () => observer.disconnect();
	}, [shouldLoad]);

	useEffect(() => {
		if (!shouldLoad || ContactForm) return;

		let cancelled = false;
		import('@/src/features/contact/contact-form').then(module => {
			if (cancelled) return;
			setContactForm(() => module.ContactForm);
		});

		return () => {
			cancelled = true;
		};
	}, [ContactForm, shouldLoad]);

	return (
		<section
			ref={sectionRef}
			id='contacto'
			aria-label='Formulario de contacto'
			className='section-spacing relative overflow-hidden bg-surface-base'
		>
			{ContactForm ? (
				<ContactForm embedded />
			) : (
				<Container className='relative'>
					<div className='mx-auto max-w-[76rem] overflow-hidden rounded-3xl border border-brand-ink/12 bg-surface-base shadow-floating'>
						<div className='grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start'>
							<div className='rounded-2xl bg-brand-primary/18 p-6'>
								<p className='text-sm font-medium tracking-[0.03em] text-brand-accent'>
									Contacto
								</p>
								<h2 className='mt-3 font-serif text-[clamp(1.85rem,4vw,3rem)] leading-[1.02] text-brand-ink'>
									Hablemos sobre tu próximo paso
								</h2>
								<p className='mt-4 text-sm leading-relaxed text-text-secondary'>
									Solicitá tu consulta con orientación clara para clases o
									realizar el Curso de Formación.
								</p>
							</div>

							<div className='rounded-2xl border border-brand-ink/10 bg-surface-base p-6 sm:p-7'>
								<div className='h-96 animate-pulse rounded-[0.875rem] border border-brand-ink/15 bg-surface-base shadow-card' />
							</div>
						</div>
					</div>
				</Container>
			)}
		</section>
	);
}
