'use client';

import { useState } from 'react';

import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { instructorToolsContent } from '@/src/features/capacitaciones/instructor-tools-content';
import { InstructorToolsModal } from '@/src/features/capacitaciones/sections/instructor-tools-modal';

export function InstructorToolsSection() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className='section-spacing relative overflow-hidden bg-surface-muted'>
			<Container className='relative'>
				<div className='flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-brand-ink/10 bg-surface-base p-7 shadow-[var(--shadow-card)] sm:p-10 lg:flex-row lg:items-center'>
					<div className='max-w-[48rem]'>
						<p className='text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent'>
							{instructorToolsContent.eyebrow}
						</p>
						<p className='mt-3 text-[length:var(--step-0)] leading-relaxed text-text-secondary'>
							{instructorToolsContent.sectionDescription}
						</p>
					</div>
					<Button
						type='button'
						onClick={() => setIsOpen(true)}
						className='shrink-0 bg-brand-accent px-7 text-base font-bold uppercase tracking-[0.1em] text-text-inverted hover:bg-brand-primary hover:text-brand-ink'
					>
						{instructorToolsContent.buttonLabel}
					</Button>
				</div>
			</Container>

			<InstructorToolsModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title={instructorToolsContent.modalTitle}
				heading={instructorToolsContent.heading}
				subheading={instructorToolsContent.subheading}
				registrationNotice={instructorToolsContent.registrationNotice}
				products={instructorToolsContent.products}
				contact={instructorToolsContent.contact}
			/>
		</section>
	);
}
