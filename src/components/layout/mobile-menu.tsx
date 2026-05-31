'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';

import type { NavItem } from '@/src/types/content';

const MobileMenuPanel = dynamic(
	() =>
		import('@/src/components/layout/mobile-menu-panel').then(
			module => module.MobileMenuPanel,
		),
	{
		ssr: false,
		loading: () => null,
	},
);

type MobileMenuProps = {
	items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
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

			<MobileMenuPanel
				items={items}
				open={open}
				onClose={() => setOpen(false)}
			/>
		</>
	);
}
