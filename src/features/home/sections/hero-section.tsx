import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

import { Container } from '@/src/components/ui/container';
import { homeHero } from '@/src/features/home/home-content';

export function HeroSection() {
	return (
		<section className='relative overflow-hidden bg-surface-base'>
			<Container className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center'>
				<div className='relative h-[clamp(18rem,45vw,33rem)] w-full overflow-hidden rounded-3xl'>
					<div
						aria-hidden='true'
						className='block h-full w-full bg-gradient-to-br from-brand-primary/30 via-brand-surface to-surface-base md:hidden'
					/>
					<video
						className='hidden h-full w-full object-cover opacity-30 md:block'
						autoPlay
						muted
						loop
						playsInline
						preload='none'
						aria-hidden='true'
					>
						<source src={homeHero.videoSrc} type='video/mp4' />
					</video>
					<div
						className='absolute inset-0 bg-surface-base/40'
						aria-hidden='true'
					/>
				</div>
			</Container>

			<Container className='relative z-10 py-[clamp(3.25rem,8vw,6rem)] pl-14'>
				<div className='max-w-[76rem]'>
					<p className='fade-up text-sm font-medium tracking-[0.03em] text-brand-accent/85'>
						El Método Adulma
					</p>
					<h1 className='fade-up mt-4 text-balance font-serif text-[clamp(1.9rem,3.7vw,3.2rem)] leading-[1.04] text-text-primary'>
						{homeHero.title}
					</h1>
					<p className='fade-up mt-5 max-w-[76rem] text-[length:var(--step-0)] leading-relaxed text-text-secondary'>
						{homeHero.description}
					</p>

					<div className='fade-up mt-8 flex flex-wrap items-center gap-4'>
						<Link
							href={homeHero.ctaHref}
							className='inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-accent hover:text-text-inverted'
						>
							{homeHero.ctaLabel}
							<MdArrowOutward aria-hidden='true' className='text-base' />
						</Link>
						<a
							href='#contacto'
							className='inline-flex min-h-11 items-center justify-center rounded-full border border-brand-accent/35 bg-surface-base/65 px-5 py-3 text-sm font-medium text-brand-accent transition hover:bg-brand-primary/18 hover:text-brand-ink hover:backdrop-blur-sm hover:shadow-card'
						>
							Solicitar asesoramiento
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
}
