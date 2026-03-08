import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { courseInfo } from '@/src/features/capacitaciones/capacitaciones-content';
import { TrainingCtaActions } from '@/src/features/capacitaciones/sections/training-cta-actions';

export function TrainingOverviewSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Capacitaciones'
					title={courseInfo.title}
					description={courseInfo.introText}
					className='max-w-4xl text-left'
				/>

				<p className='mt-4 max-w-3xl text-[length:var(--step-0)] leading-relaxed text-text-secondary/90'>
					{courseInfo.secondaryText}
				</p>

				<div className='mt-10 max-w-3xl rounded-2xl bg-brand-primary/20 p-5 sm:p-6'>
					<p className='text-xs leading-relaxed sm:text-sm'>
						{courseInfo.enrollmentNotice}
					</p>
				</div>

				<div className='max-w-3xl'>
					<TrainingCtaActions
						ctaHref={courseInfo.ctaHref}
						ctaLabel={courseInfo.ctaLabel}
						learnMoreLabel={courseInfo.learnMoreLabel}
						learnMoreContent={courseInfo.learnMoreContent}
					/>
				</div>
			</Container>
		</section>
	);
}
