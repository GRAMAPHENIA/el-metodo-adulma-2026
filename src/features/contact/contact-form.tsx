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
			? 'No pudimos enviar tu consulta. Revisá los campos e inténtalo nuevamente.'
			: '';

	return (
		<section
			id='contacto'
			className='section-spacing relative overflow-hidden bg-surface-base'
		>
			<Container className='relative'>
				<div className='mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand-ink/12 bg-surface-base shadow-floating'>
					<div className='grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr]'>
						<div className='rounded-2xl bg-brand-primary/18 p-6'>
							<p className='text-sm font-medium tracking-[0.03em] text-brand-accent'>
								Contacto
							</p>
							<h2 className='mt-3 font-serif text-[clamp(1.85rem,4vw,3rem)] leading-[1.02] text-brand-ink'>
								Hablemos sobre tu próximo paso
							</h2>
							<p className='mt-4 text-sm leading-relaxed text-text-secondary'>
								Contanos tu consulta y te respondemos con orientación clara para
								clases o formación profesional.
							</p>
							<ul className='mt-6 space-y-3 text-sm text-text-secondary'>
								<li>Respuesta personalizada</li>
								<li>Información de sedes y horarios</li>
								<li>Datos sobre capacitaciones</li>
							</ul>
						</div>

						<div className='rounded-2xl border border-brand-ink/10 bg-surface-base p-6 sm:p-7'>
							{formState.succeeded ? (
								<p className='text-center text-sm font-semibold text-feedback-success'>
									Gracias por tu consulta. Te responderemos a la brevedad.
								</p>
							) : (
								<form className='space-y-4' onSubmit={onSubmit} noValidate>
									<div className='grid gap-4 sm:grid-cols-2'>
										<label className='block'>
											<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
												Nombre
											</span>
											<input
												name='name'
												required
												className='min-h-11 w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
											/>
										</label>

										<label className='block'>
											<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
												Apellido
											</span>
											<input
												name='lastName'
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
											className='min-h-11 w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
										/>
										<ValidationError
											prefix='Email'
											field='email'
											errors={formState.errors}
											className='mt-1 text-sm text-feedback-error'
										/>
									</label>

									<label className='block'>
										<span className='mb-1 block text-[11px] font-medium tracking-[0.03em] text-brand-accent'>
											Teléfono
										</span>
										<input
											type='tel'
											name='phone'
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
											className='w-full rounded-[0.875rem] border border-brand-ink/25 bg-surface-base px-3 py-2 text-text-primary outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25'
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
									<input
										type='hidden'
										name='sourcePath'
										value={pathname || '/'}
									/>

									<div className='flex flex-wrap items-center gap-4 pt-4'>
										<Button
											type='submit'
											disabled={formState.submitting}
											className='px-6'
										>
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
					</div>
				</div>
			</Container>
		</section>
	);
}
