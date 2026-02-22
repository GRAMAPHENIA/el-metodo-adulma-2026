'use client';

import { ValidationError, useForm } from '@formspree/react';
import { usePathname } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';

import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';

type LocalFeedbackState = {
	status: 'idle' | 'error';
	message: string;
};

export function ContactForm() {
	const [formState, submitToFormspree] = useForm('xojnklno');
	const pathname = usePathname();
	const [feedback, setFeedback] = useState<LocalFeedbackState>({
		status: 'idle',
		message: '',
	});

	const startedAt = useMemo(() => Date.now(), []);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const honeypot = String(formData.get('website') ?? '');
		const formStartedAt = Number(formData.get('formStartedAt') ?? Date.now());

		if (honeypot.trim() !== '') {
			setFeedback({
				status: 'error',
				message: 'Solicitud inválida.',
			});
			return;
		}

		const elapsed = Date.now() - formStartedAt;
		if (elapsed < 2500) {
			setFeedback({
				status: 'error',
				message: 'Por favor, espera un momento y vuelve a intentarlo.',
			});
			return;
		}

		setFeedback({ status: 'idle', message: '' });
		await submitToFormspree(event);
	};

	const hasFormError = Boolean(
		formState.errors &&
		(formState.errors.getFormErrors().length > 0 ||
			formState.errors.getAllFieldErrors().length > 0),
	);
	const message = feedback.message
		? feedback.message
		: hasFormError
			? 'No pudimos enviar tu consulta. Revisa los campos e inténtalo nuevamente.'
			: '';

	return (
		<section id='contacto' className='section-spacing bg-surface-base'>
			<Container>
				<div className='mx-auto max-w-2xl surface-card p-6 sm:p-8'>
					<h2 className='text-center text-[length:var(--step-3)] font-bold text-text-primary'>
						Hablemos
					</h2>
					<p className='mt-3 text-center text-text-secondary'>
						Realiza tu consulta y te responderemos a la brevedad.
					</p>

					{formState.succeeded ? (
						<p className='mt-8 text-center text-sm font-semibold text-feedback-success'>
							Gracias por tu consulta. Te responderemos a la brevedad.
						</p>
					) : (
						<form className='mt-8 space-y-4' onSubmit={onSubmit} noValidate>
							<div className='grid gap-4 sm:grid-cols-2'>
								<label className='block'>
									<span className='mb-1 block text-sm font-semibold text-text-primary'>
										Nombre
									</span>
									<input
										name='name'
										required
										className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
									/>
								</label>

								<label className='block'>
									<span className='mb-1 block text-sm font-semibold text-text-primary'>
										Apellido
									</span>
									<input
										name='lastName'
										className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
									/>
								</label>
							</div>

							<label className='block'>
								<span className='mb-1 block text-sm font-semibold text-text-primary'>
									Email
								</span>
								<input
									type='email'
									name='email'
									required
									className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
								/>
								<ValidationError
									prefix='Email'
									field='email'
									errors={formState.errors}
									className='mt-1 text-sm text-feedback-error'
								/>
							</label>

							<label className='block'>
								<span className='mb-1 block text-sm font-semibold text-text-primary'>
									Teléfono
								</span>
								<input
									type='tel'
									name='phone'
									className='min-h-11 w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
								/>
							</label>

							<label className='block'>
								<span className='mb-1 block text-sm font-semibold text-text-primary'>
									Mensaje
								</span>
								<textarea
									name='message'
									required
									rows={5}
									className='w-full rounded-button border border-border-subtle bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30'
								/>
								<ValidationError
									prefix='Mensaje'
									field='message'
									errors={formState.errors}
									className='mt-1 text-sm text-feedback-error'
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
							<input type='hidden' name='formStartedAt' value={startedAt} />
							<input type='hidden' name='sourcePath' value={pathname || '/'} />

							<div className='flex flex-wrap items-center gap-4'>
								<Button type='submit' disabled={formState.submitting}>
									{formState.submitting ? 'Enviando...' : 'Enviar consulta'}
								</Button>
								<p
									aria-live='polite'
									className={`text-sm ${
										feedback.status === 'error' || hasFormError
											? 'text-feedback-error'
											: 'text-text-secondary'
									}`}
								>
									{message}
								</p>
							</div>
							<ValidationError
								prefix='Formulario'
								errors={formState.errors}
								className='text-sm text-feedback-error'
							/>
						</form>
					)}
				</div>
			</Container>
		</section>
	);
}
