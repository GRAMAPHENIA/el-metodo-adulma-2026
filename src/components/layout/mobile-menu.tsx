'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';

import { Modal } from '@/src/components/ui/modal';
import type { NavItem } from '@/src/types/content';

type MobileMenuProps = {
	items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				type='button'
				onClick={() => setOpen(true)}
				aria-label='Abrir menú principal'
				className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-surface-base text-brand-ink transition hover:bg-brand-primary/20 hover:text-brand-accent lg:hidden'
			>
				<BsList className='text-2xl' />
			</button>

			<Modal
				isOpen={open}
				onClose={() => setOpen(false)}
				title='Menú principal'
			>
				<nav aria-label='Navegación móvil'>
					<ul className='space-y-3'>
						{items.map(item => {
							const active = pathname === item.href;
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										onClick={() => setOpen(false)}
										className={`block rounded-button border px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] transition ${
											active
												? 'border-brand-accent/30 bg-brand-primary/25 text-brand-accent'
												: 'border-border-subtle bg-surface-base text-text-primary hover:bg-brand-primary/15'
										}`}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</Modal>
		</>
	);
}
