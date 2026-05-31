'use client';

import Link from 'next/link';

import { Modal } from '@/src/components/ui/modal';
import type { NavItem } from '@/src/types/content';

type MobileMenuPanelProps = {
	items: NavItem[];
	open: boolean;
	onClose: () => void;
};

export function MobileMenuPanel({ items, open, onClose }: MobileMenuPanelProps) {
	return (
		<Modal
			isOpen={open}
			onClose={onClose}
			title='Menú principal'
			fullScreenMobile
		>
			<nav aria-label='Navegación móvil'>
				<ul className='mt-2 space-y-3 sm:mt-0'>
					{items.map(item => (
						<li key={item.href}>
							<Link
								href={item.href}
								onClick={onClose}
								className='block rounded-button border border-border-subtle bg-surface-base px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] transition hover:bg-brand-primary/15 hover:text-brand-accent'
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</Modal>
	);
}
