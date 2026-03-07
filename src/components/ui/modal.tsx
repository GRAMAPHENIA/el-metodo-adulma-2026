'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';

import { FOCUSABLE_SELECTOR } from '@/src/lib/a11y/focus-trap';
import { cn } from '@/src/lib/utils/cn';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	const panelRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isOpen) return;
		const previousFocus = document.activeElement as HTMLElement | null;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		closeRef.current?.focus();

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
				return;
			}

			if (event.key === 'Tab' && panelRef.current) {
				const focusable =
					panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];

				if (event.shiftKey && document.activeElement === first) {
					event.preventDefault();
					last.focus();
				} else if (!event.shiftKey && document.activeElement === last) {
					event.preventDefault();
					first.focus();
				}
			}
		};

		window.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
			previousFocus?.focus();
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;
	if (typeof window === 'undefined') return null;

	return createPortal(
		<div
			className='fixed inset-0 z-[100] bg-brand-ink/80 p-4 backdrop-blur-sm'
			onClick={onClose}
		>
			<div className='flex min-h-full items-start justify-center py-2 sm:items-center'>
				<div
					ref={panelRef}
					className={cn(
						'max-h-[calc(100dvh-2.5rem)] w-full max-w-3xl overflow-y-auto border border-brand-ink/20 bg-surface-base p-6 text-text-primary shadow-floating sm:p-8',
					)}
					role='dialog'
					aria-modal='true'
					aria-label={title}
					onClick={event => event.stopPropagation()}
				>
					<div className='mb-4 flex items-center justify-between gap-4 border-b border-brand-ink/15 pb-3'>
						<h3 className='font-serif text-[length:var(--step-2)] uppercase'>
							{title}
						</h3>
						<button
							ref={closeRef}
							type='button'
							onClick={onClose}
							aria-label='Cerrar modal'
							className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-brand-surface text-brand-ink transition hover:bg-brand-accent hover:text-text-inverted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2'
						>
							<BsXLg aria-hidden='true' />
						</button>
					</div>
					<div className='space-y-4'>{children}</div>
				</div>
			</div>
		</div>,
		document.body,
	);
}
