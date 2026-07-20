'use client';

import Image from 'next/image';
import { BsEnvelope, BsPatchCheck, BsTelephone, BsXLg } from 'react-icons/bs';

import { Modal } from '@/src/components/ui/modal';
import type { InstructorToolProduct } from '@/src/features/capacitaciones/instructor-tools-content';

type InstructorToolsModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	heading: string;
	subheading: string;
	registrationNotice: string;
	products: InstructorToolProduct[];
	contact: {
		label: string;
		note: string;
		emailLabel: string;
		email: string;
	};
};

export function InstructorToolsModal({
	isOpen,
	onClose,
	title,
	heading,
	subheading,
	registrationNotice,
	products,
	contact,
}: InstructorToolsModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			fullScreenMobile
			panelClassName='max-h-none max-w-5xl overflow-y-auto overflow-x-hidden overscroll-contain p-0 sm:max-h-[calc(100dvh-2rem)] sm:max-w-5xl sm:p-0'
			hideTitle
			hideCloseButton
		>
			<div className='relative min-h-full overflow-hidden rounded-[1.25rem] bg-[#fffdf8] sm:min-h-0'>
				<button
					type='button'
					onClick={onClose}
					autoFocus
					aria-label='Cerrar modal'
					className='absolute right-4 top-4 z-20 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-brand-surface text-brand-ink transition hover:bg-brand-accent hover:text-text-inverted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2'
				>
					<BsXLg aria-hidden='true' />
				</button>

				<header className='border-b border-brand-ink/10 px-5 pb-6 pt-8 pr-20 sm:px-8 sm:pb-7 sm:pt-9 sm:pr-24'>
					<p className='text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent'>
						Recursos para instructores
					</p>
					<div className='mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
						<div className='max-w-2xl'>
							<h2 className='font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-brand-accent'>
								{heading}
							</h2>
							<p className='mt-2 text-base leading-relaxed text-[#5f6368] sm:text-lg'>
								{subheading}
							</p>
						</div>
						<div className='inline-flex w-fit items-center gap-2 rounded-full bg-brand-surface/70 px-3 py-2 text-sm font-semibold leading-tight text-brand-accent'>
							<BsPatchCheck
								aria-hidden='true'
								className='h-5 w-5 shrink-0 text-[#f26b3f]'
							/>
							<span>{registrationNotice}</span>
						</div>
					</div>
				</header>

				<main className='px-4 py-5 sm:px-8 sm:py-7'>
					<div className='mb-4 flex items-center justify-between gap-4'>
						<h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-brand-accent'>
							Productos disponibles
						</h3>
						<span className='text-xs text-[#6b6f73]'>
							{products.length} opciones
						</span>
					</div>

					<div className='grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{products.map(product => (
							<article
								key={product.id}
								className='flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#ead8b9] bg-white transition-shadow duration-200 hover:shadow-[0_8px_20px_rgba(27,54,92,0.08)]'
							>
								<div className='flex h-48 items-center justify-center bg-[#fffdfa] p-4 sm:h-56 sm:p-5'>
									<Image
										src={product.image.src}
										alt={product.image.alt}
										width={product.image.width}
										height={product.image.height}
										sizes='(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 42vw, 28vw'
										className={`h-auto w-auto max-h-full max-w-full object-contain ${product.image.className ?? ''}`}
										loading='lazy'
									/>
								</div>
								<div className='flex flex-1 flex-col border-t border-[#ead8b9] p-4'>
									<h4 className='text-base font-bold leading-tight text-brand-accent'>
										{product.name}
									</h4>
									<p className='mt-2 text-sm leading-snug text-[#5f6368]'>
										{product.description}
									</p>
									<p className='mt-3 text-xs font-semibold text-brand-accent/75'>
										{product.details}
									</p>
								</div>
							</article>
						))}
					</div>
				</main>

				<footer className='grid gap-4 border-t border-brand-ink/10 bg-brand-surface/45 px-5 py-5 sm:grid-cols-2 sm:gap-0 sm:px-8'>
					<div className='flex min-w-0 items-start gap-3 sm:pr-6'>
						<BsTelephone
							aria-hidden='true'
							className='mt-0.5 h-5 w-5 shrink-0 text-[#f26b3f]'
						/>
						<p className='text-sm leading-snug text-brand-accent'>
							{contact.label}
						</p>
					</div>
					<div className='flex min-w-0 items-start gap-3 border-t border-[#e4c88f] pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0'>
						<BsEnvelope
							aria-hidden='true'
							className='mt-0.5 h-5 w-5 shrink-0 text-[#f26b3f]'
						/>
						<div className='min-w-0 text-sm leading-snug text-brand-accent'>
							<p>{contact.note}</p>
							<p className='mt-1'>
								{contact.emailLabel}{' '}
								<a
									href={`mailto:${contact.email}`}
									className='break-words font-bold underline decoration-[#f26b3f] decoration-2 underline-offset-4'
								>
									{contact.email}
								</a>
							</p>
						</div>
					</div>
				</footer>
			</div>
		</Modal>
	);
}
