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

const elderHealthJornadaInstructorIds = new Set([
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
					description=' Ellos han finalizado con éxito los siguientes cursos certificados:'
					className='max-w-[76rem] text-left'
				/>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{instructorProfiles.map(instructor => (
						<article
							key={instructor.id}
							className='reveal-soft relative flex flex-col items-start rounded-2xl border border-brand-ink/12 bg-surface-base p-5 transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(27,54,92,0.08)] sm:p-6'
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
							<div className='mt-4 flex flex-col items-start'>
								<h3 className='font-serif text-xl leading-tight text-text-primary'>
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
							<div className='mt-3 h-px w-full bg-brand-ink/10' />
<ul className='mt-3 flex flex-col items-start gap-1 list-none p-0 m-0 w-full'>
								<li className='flex items-start gap-2 text-[0.7rem] font-medium leading-tight text-text-primary whitespace-nowrap'>
									<MdVerified
										aria-hidden='true'
										className='h-[0.85rem] w-[0.85rem] shrink-0 text-text-primary'
									/>
									<span>Con certificación en EL METODO ADULMA presencial</span>
								</li>
								{elderHealthJornadaInstructorIds.has(instructor.id) ? (
									<li className='flex items-start gap-2 text-[0.7rem] font-medium leading-tight text-text-primary whitespace-nowrap'>
										<MdVerified
											aria-hidden='true'
											className='h-[0.85rem] w-[0.85rem] shrink-0 text-text-primary'
										/>
										<span>Jornada presencial, herramientas en salud del adulto mayor</span>
									</li>
								) : null}
								{firstAidCertifiedInstructorIds.has(instructor.id) ? (
									<li className='flex items-start gap-2 text-[0.7rem] font-medium leading-tight text-text-primary whitespace-nowrap'>
										<MdVerified
											aria-hidden='true'
											className='h-[0.85rem] w-[0.85rem] shrink-0 text-text-primary'
										/>
										<span>Con certificación en primeros auxilios</span>
									</li>
								) : null}
							</ul>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
