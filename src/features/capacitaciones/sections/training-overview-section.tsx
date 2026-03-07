import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { courseInfo } from '@/src/features/capacitaciones/capacitaciones-content';
import { TrainingCtaActions } from '@/src/features/capacitaciones/sections/training-cta-actions';

export function TrainingOverviewSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<div className='mx-auto max-w-4xl overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base shadow-floating'>
					<div className='border-b border-brand-ink/12 px-6 py-3 sm:px-8'>
						<p className='display-kicker'>Dossier de formación</p>
					</div>
					<div className='p-6 sm:p-8'>
						<SectionHeading
							eyebrow='Capacitaciones'
							title={courseInfo.title}
							className='max-w-none text-left'
						/>

						<p className='mt-8 text-base leading-relaxed lg:text-lg'>
							{courseInfo.introText}
						</p>
						<p className='mt-4 text-base leading-relaxed lg:text-lg'>
							{courseInfo.secondaryText}
						</p>
						<div className='mt-6 rounded-xl border border-brand-primary/35 bg-brand-primary/20 p-4 sm:p-5'>
							<p className='text-xs leading-relaxed sm:text-sm'>
								{courseInfo.enrollmentNotice}
							</p>
						</div>
						<TrainingCtaActions
							ctaHref={courseInfo.ctaHref}
							ctaLabel={courseInfo.ctaLabel}
							learnMoreLabel={courseInfo.learnMoreLabel}
							learnMoreContent={courseInfo.learnMoreContent}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
