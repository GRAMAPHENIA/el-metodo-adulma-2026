import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { instructorProfiles } from '@/src/features/capacitaciones/capacitaciones-content';

const firstAidCertifiedInstructorIds = new Set([
	'juan-alfonso',
	'araceli-pane',
	'mirta-gakbart',
]);

export function InstructorsSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='CURSO'
					title='Ellos lo han finalizado'
					description='Ellos ya hicieron el curso de Formación.'
					className='max-w-[76rem] text-left'
				/>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{instructorProfiles.map(instructor => (
						<article
							key={instructor.id}
							className='reveal-soft relative flex h-full min-h-[18.5rem] flex-col items-center rounded-2xl border border-brand-ink/12 bg-gradient-to-b from-surface-base to-brand-primary/5 p-5 text-center transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(27,54,92,0.08)] sm:p-6'
						>
							<div className='aspect-square h-[4.75rem] w-[4.75rem] shrink-0 overflow-hidden rounded-full border border-brand-ink/12 bg-brand-primary/10'>
								<Image
									src={instructor.image}
									alt={instructor.name}
									width={200}
									height={200}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='mt-4 flex flex-col items-center'>
								<h3 className='mx-auto min-h-[3.3rem] max-w-[12ch] font-serif text-xl leading-tight text-text-primary'>
									{instructor.name}
								</h3>
								{instructor.id === 'juan-alfonso' ? (
									<p className='mt-2 text-sm leading-snug text-text-secondary'>
										{instructor.role}
									</p>
								) : (
									<p className='mt-2 text-sm leading-snug text-text-secondary'>
										instructora
									</p>
								)}
							</div>
							<div className='mt-auto h-px w-full bg-brand-ink/10' />
							<div className='mt-4 flex min-h-10 w-full items-start justify-center'>
								{firstAidCertifiedInstructorIds.has(instructor.id) ? (
									<p className='inline-flex items-start gap-2 text-sm font-medium leading-snug text-text-primary'>
										<MdVerified
											aria-hidden='true'
											className='mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-text-primary'
										/>
										<span>Con certificación en primeros auxilios</span>
									</p>
								) : null}
							</div>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
