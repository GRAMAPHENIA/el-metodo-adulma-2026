'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { Button, LinkButton } from '@/src/components/ui/button';

const TrainingLearnMorePanel = dynamic(
	() =>
		import('@/src/features/capacitaciones/sections/training-learn-more-panel').then(
			module => module.TrainingLearnMorePanel,
		),
	{
		ssr: false,
		loading: () => null,
	},
);

type TrainingCtaActionsProps = {
	ctaHref: string;
	ctaLabel: string;
	learnMoreLabel: string;
	learnMoreContent: string[];
};

export function TrainingCtaActions({
	ctaHref,
	ctaLabel,
	learnMoreLabel,
	learnMoreContent,
}: TrainingCtaActionsProps) {
	const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

	return (
		<>
			<div className='mt-6 flex flex-wrap items-center gap-4'>
				<LinkButton
					href={ctaHref}
					target='_blank'
					rel='noreferrer noopener'
					className='min-h-12 bg-brand-accent px-7 text-base font-bold uppercase tracking-[0.1em] text-text-inverted shadow-floating hover:bg-brand-primary hover:text-brand-ink'
				>
					{ctaLabel}
				</LinkButton>
				<Button
					type='button'
					onClick={() => setIsLearnMoreOpen(true)}
					className='border border-brand-accent/40 bg-surface-base/65 text-brand-accent hover:bg-brand-primary/18 hover:text-brand-ink hover:backdrop-blur-sm hover:shadow-card'
				>
					{learnMoreLabel}
				</Button>
			</div>

			<TrainingLearnMorePanel
				isOpen={isLearnMoreOpen}
				onClose={() => setIsLearnMoreOpen(false)}
				content={learnMoreContent}
			/>
		</>
	);
}
