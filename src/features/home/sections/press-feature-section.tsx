import { MdArrowOutward, MdNewspaper } from 'react-icons/md';

import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { pressFeature } from '@/src/features/home/home-content';

export function PressFeatureSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-muted'>
			<Container className='relative'>
				<div className='grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end'>
					<SectionHeading
						eyebrow={pressFeature.eyebrow}
						title={pressFeature.title}
						description={pressFeature.description}
						className='max-w-[42rem]'
					/>

					<a
						href={pressFeature.href}
						target='_blank'
						rel='noreferrer noopener'
						className='group block rounded-3xl border border-brand-ink/15 bg-surface-base p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-[0_16px_36px_rgba(27,54,92,0.16)] sm:p-8'
					>
						<div className='flex items-start justify-between gap-6'>
							<div className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/35 text-brand-accent'>
								<MdNewspaper aria-hidden='true' className='text-xl' />
							</div>
							<MdArrowOutward
								aria-hidden='true'
								className='text-2xl text-brand-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
							/>
						</div>
						<p className='mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent/80'>
							{pressFeature.source}
						</p>
						<h3 className='mt-3 max-w-[38rem] font-serif text-[clamp(1.45rem,2.8vw,2.35rem)] leading-tight text-text-primary'>
							{pressFeature.articleTitle}
						</h3>
						<span className='mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors group-hover:text-brand-ink'>
							{pressFeature.ctaLabel}
							<MdArrowOutward aria-hidden='true' className='text-base' />
						</span>
					</a>
				</div>
			</Container>
		</section>
	);
}
