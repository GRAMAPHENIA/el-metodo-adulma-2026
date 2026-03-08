import Image from 'next/image';

import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { instructorProfiles } from '@/src/features/capacitaciones/capacitaciones-content';

export function InstructorsSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='CURSO'
					title='Ellos lo han finalizado'
					description='Ellos ya hicieron el curso de Formación.'
					className='max-w-4xl text-left'
				/>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
					{instructorProfiles.map(instructor => (
						<article
							key={instructor.id}
							className='reveal-soft rounded-2xl border border-brand-ink/10 bg-surface-base p-4 text-center transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(27,54,92,0.08)] sm:p-5'
						>
							<div className='mx-auto h-20 w-20 overflow-hidden rounded-full border border-brand-ink/12 bg-brand-primary/10'>
								<Image
									src={instructor.image}
									alt={instructor.name}
									width={200}
									height={200}
									className='h-full w-full object-cover'
								/>
							</div>
							<h3 className='mt-3 font-serif text-[length:var(--step-0)] leading-tight text-text-primary'>
								{instructor.name}
							</h3>
							{instructor.id === 'juan-alfonso' ? (
								<p className='mt-1 text-sm text-text-secondary'>
									{instructor.role}
								</p>
							) : null}
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
