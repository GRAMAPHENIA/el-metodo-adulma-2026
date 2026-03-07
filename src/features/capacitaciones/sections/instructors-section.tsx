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
							className='reveal-soft overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base p-4 text-center shadow-card'
						>
							<p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent'>
								Instructor
							</p>
							<div className='mx-auto mt-3 h-36 w-36 overflow-hidden rounded-full border-2 border-border-strong shadow-[var(--shadow-soft-inset)]'>
								<Image
									src={instructor.image}
									alt={instructor.name}
									width={200}
									height={200}
									className='h-full w-full object-cover'
								/>
							</div>
							<h3 className='mt-4 font-serif text-lg uppercase leading-tight text-text-primary'>
								{instructor.name}
							</h3>
							{instructor.id === 'juan-alfonso' ? (
								<p className='mt-2 text-sm text-text-secondary'>
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
