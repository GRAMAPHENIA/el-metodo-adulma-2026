import Image from 'next/image';

import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { instructorProfiles } from '@/src/features/capacitaciones/capacitaciones-content';

export function InstructorsSection() {
	return (
		<section className='section-spacing bg-surface-base'>
			<Container>
				<SectionHeading
					eyebrow='CURSO'
					title='Ellos lo han finalizado'
					description='Ellos ya hicieron el curso de Formación.'
				/>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
					{instructorProfiles.map(instructor => (
						<article key={instructor.id} className='surface-card p-4 text-center'>
							<div className='mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-border-strong'>
								<Image
									src={instructor.image}
									alt={instructor.name}
									width={200}
									height={200}
									className='h-full w-full object-cover'
								/>
							</div>
							<h3 className='mt-4 text-base font-semibold text-text-primary'>
								{instructor.name}
							</h3>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
