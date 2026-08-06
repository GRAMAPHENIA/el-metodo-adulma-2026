'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';

import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';

type LocalFeedbackState = {
	status: 'idle' | 'submitting' | 'success' | 'error';
	message: string;
};

type ContactApiResponse = {
	ok?: boolean;
	message?: string;
};

type ContactFormProps = {
	embedded?: boolean;
};

export function ContactForm({ embedded = false }: ContactFormProps) {
	const pathname = usePathname();
	const [feedback, setFeedback] = useState<LocalFeedbackState>({
		status: 'idle',
		message: '',
	});

	const startedAt = useMemo(() => Date.now(), []);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (feedback.status === 'submitting') return;

		const form = event.currentTarget;
		const formData = new FormData(form);

		const honeypot = String(formData.get('website') ?? '');

		if (honeypot.trim() !== '') {
			setFeedback({ status: 'success', message: '' });
			return;
		}

		const elapsed = Date.now() - startedAt;
		if (elapsed < 2500) {
			setFeedback({
				status: 'error',
				message: 'Por favor, espera un momento y vuelve a intentarlo.',
			});
			return;
		}

		setFeedback({ status: 'submitting', message: '' });

		try {
			const response = await fetch('/api/contact.php', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: String(formData.get('name') ?? ''),
					lastName: String(formData.get('lastName') ?? ''),
					email: String(formData.get('email') ?? ''),
					phone: String(formData.get('phone') ?? ''),
					message: String(formData.get('message') ?? ''),
					website: honeypot,
					sourcePath: pathname || '/',
					elapsedMs: elapsed,
				}),
			});

			const result = (await response
				.json()
				.catch(() => ({}))) as ContactApiResponse;

			if (!response.ok || result.ok !== true) {
				throw new Error(
					result.message ||
						'No pudimos enviar tu consulta. Intentá nuevamente.',
				);
			}

			form.reset();
			setFeedback({ status: 'success', message: '' });
		} catch (error) {
			setFeedback({
				status: 'error',
				message:
					error instanceof Error
						? error.message
						: 'No pudimos enviar tu consulta. Intentá nuevamente.',
			});
		}
	};

	const isSubmitting = feedback.status === 'submitting';

	const content = (
		<Container className='relative'>
			<div className='mx-auto max-w-[76rem] overflow-hidden rounded-3xl border border-brand-ink/12 bg-surface-base shadow-floating'>
				<div className='grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start'>
					<div className='rounded-2xl bg-brand-primary/18 p-6'>
						<p className='text-sm font-medium tracking-[0.03em] text-brand-accent'>
							Contacto
						</p>
						<h2 className='mt-3 font-serif text-[clamp(1.85rem,4vw,3rem)] leading-[1.02] text-brand-ink'>
							Escribí tu consulta
						</h2>
						<p className='mt-4 text-sm leading-relaxed text-text-secondary'>
							Para participar de las clases,{' '}
							<Link
								href='/#salones'
								className='font-semibold text-brand-accent underline decoration-brand-accent/40 underline-offset-4 hover:text-brand-ink'
							>
								ver espacios activos de El Método
							</Link>
							; o para realizar el Curso de Formación,{' '}
							<Link
								href='/capacitaciones'
								className='font-semibold text-brand-accent underline decoration-brand-accent/40 underline-offset-4 hover:text-brand-ink'
							>
								ver toda la información en Capacitaciones
							</Link>
							.
						</p>
					</div>

					<div className='rounded-2xl border border-brand-ink/10 bg-surface-base p-6 sm:p-7'>
						{feedback.status === 'success' ? (
							<p
								role='status'
								className='text-center text-sm font-semibold text-feedback-success'
							>
								Gracias por tu consulta. Te responderemos a la brevedad.
							</p>
						) : (
							<form
								className='space-y-4'
								onSubmit={onSubmit}
								aria-busy={isSubmitting}
							>
								<div className='grid gap-4 sm:grid-cols-2'>
									<label className='block'>
										<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
											Nombre
										</span>
										<input
											name='name'
											required
											minLength={2}
											maxLength={80}
											autoComplete='given-name'
											className='min-h-11 w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
										/>
									</label>

									<label className='block'>
										<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
											Apellido
										</span>
										<input
											name='lastName'
											maxLength={80}
											autoComplete='family-name'
											className='min-h-11 w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
										/>
									</label>
								</div>

								<label className='block'>
									<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
										Email
									</span>
									<input
										type='email'
										name='email'
										required
										maxLength={120}
										autoComplete='email'
										className='min-h-11 w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
									/>
								</label>

								<label className='block'>
									<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
										Teléfono
									</span>
									<input
										type='tel'
										name='phone'
										maxLength={40}
										autoComplete='tel'
										className='min-h-11 w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
									/>
								</label>

								<label className='block'>
									<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
										Mensaje
									</span>
									<textarea
										name='message'
										required
										rows={5}
										minLength={10}
										maxLength={3000}
										className='w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
									/>
								</label>

								<input
									type='text'
									name='website'
									autoComplete='off'
									tabIndex={-1}
									className='hidden'
									aria-hidden='true'
								/>
								<div className='flex flex-wrap items-center gap-4 pt-4'>
									<Button
										type='submit'
										disabled={isSubmitting}
										className='px-6'
									>
										{isSubmitting ? 'Enviando...' : 'Enviar consulta'}
									</Button>
									<p
										aria-live='polite'
										className={`text-sm ${
											feedback.status === 'error'
												? 'text-feedback-error'
												: 'text-text-secondary'
										}`}
									>
										{feedback.message}
									</p>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</Container>
	);

	if (embedded) return content;

	return (
		<section
			id='contacto'
			className='section-spacing relative overflow-hidden bg-surface-base'
		>
			{content}
		</section>
	);
}
