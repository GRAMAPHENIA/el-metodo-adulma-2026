'use client';

import { Modal } from '@/src/components/ui/modal';

type TrainingLearnMorePanelProps = {
	isOpen: boolean;
	onClose: () => void;
	content: string[];
};

export function TrainingLearnMorePanel({
	isOpen,
	onClose,
	content,
}: TrainingLearnMorePanelProps) {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Sobre la capacitación'
		>
			<div className='space-y-4 text-sm leading-relaxed sm:text-base'>
				{content.map((paragraph, index) => (
					<p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
				))}
			</div>
		</Modal>
	);
}
