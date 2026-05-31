import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

import { MobileMenu } from '@/src/components/layout/mobile-menu';
import { Container } from '@/src/components/ui/container';
import { navItems, socialLinks } from '@/src/lib/seo/site-config';

export function SiteHeader() {
	return (
		<header className='sticky top-0 z-40 border-b border-brand-ink/10 bg-surface-base'>
			<Container className='flex min-h-[4.75rem] items-center justify-between gap-4'>
				<Link
					href='/'
					className='inline-flex items-center gap-3'
					aria-label='Ir a inicio'
				>
					<Image
						src='/logo-navbar.webp'
						alt='Logo de El Método Adulma'
						width={240}
						height={125}
						className='h-12 w-auto rounded-2xl'
						priority
					/>
					<span className='hidden sm:block'>
						<span className='block font-serif text-xl leading-none text-brand-ink'>
							El Método Adulma
						</span>
					</span>
				</Link>

				<nav className='hidden lg:block' aria-label='Navegación principal'>
					<ul className='flex items-center gap-1'>
						{navItems.map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									className='group relative rounded-full px-4 py-2 text-sm font-medium tracking-[0.02em] text-brand-ink transition hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent'
								>
									{item.label}
									<span className='pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-brand-accent/60 transition-transform duration-300 group-hover:scale-x-100' />
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className='flex items-center gap-2'>
					<a
						href={socialLinks.instagram}
						target='_blank'
						rel='noreferrer noopener'
						aria-label='Instagram de El Método Adulma'
						className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-surface-base text-base text-brand-ink transition hover:bg-brand-primary/20 hover:text-brand-accent'
					>
						<BsInstagram aria-hidden='true' />
					</a>
					<a
						href={socialLinks.facebook}
						target='_blank'
						rel='noreferrer noopener'
						aria-label='Facebook de El Método Adulma'
						className='inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-surface-base text-base text-brand-ink transition hover:bg-brand-primary/20 hover:text-brand-accent'
					>
						<BsFacebook aria-hidden='true' />
					</a>
					<MobileMenu items={navItems} />
				</div>
			</Container>
		</header>
	);
}
