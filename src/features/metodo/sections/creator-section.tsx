import Image from 'next/image';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';

import { LinkButton } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { instructorProfiles } from '@/src/features/capacitaciones/capacitaciones-content';
import { creatorContent } from '@/src/features/metodo/metodo-content';

const associateContent = instructorProfiles.find(
	instructor => instructor.id === 'juan-alfonso',
);

export function CreatorSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2'>
					<article className='reveal-soft relative flex flex-col items-start rounded-2xl border border-brand-ink/12 bg-surface-base p-5 transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(27,54,92,0.08)] sm:p-6'>
						<div className='aspect-square h-[4.75rem] w-[4.75rem] shrink-0 overflow-hidden rounded-2xl bg-transparent'>
							<Image
								src={creatorContent.image}
								alt={creatorContent.name}
								width={200}
								height={200}
								className='h-full w-full object-cover object-center'
							/>
						</div>
						<div className='mt-4 flex flex-col items-start'>
							<h3 className='font-serif text-xl leading-tight text-text-primary'>
								{creatorContent.name}
							</h3>
							<p className='mt-2 text-sm leading-snug text-text-secondary'>
								{creatorContent.role}
							</p>
						</div>
						<div className='mt-3 h-px w-full bg-brand-ink/10' />
						<ul className='mt-3 flex w-full list-none flex-col items-start gap-1 p-0 m-0'>
							{creatorContent.bio.map(item => (
								<li
									key={item}
									className='flex items-start gap-2 text-[0.7rem] font-medium leading-tight text-text-primary'
								>
									<MdVerified aria-hidden='true' className='mt-[0.05rem] h-[0.85rem] w-[0.85rem] shrink-0 text-text-primary' />
									<span className='min-w-0 whitespace-normal break-words'>{item}</span>
								</li>
							))}
						</ul>
						<div className='mt-5'>
							<LinkButton href={creatorContent.cvUrl} target='_blank' rel='noreferrer noopener'>
								<span className='inline-flex items-center gap-2'>
									<BsFillHandIndexThumbFill aria-hidden='true' />
									Ver currículum completo
								</span>
							</LinkButton>
						</div>
					</article>

					{associateContent ? (
						<article className='reveal-soft relative flex flex-col items-start rounded-2xl border border-brand-ink/12 bg-surface-base p-5 transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(27,54,92,0.08)] sm:p-6'>
							<div className='aspect-square h-[4.75rem] w-[4.75rem] shrink-0 overflow-hidden rounded-2xl bg-transparent'>
								<Image
									src={associateContent.image}
									alt={associateContent.name}
									width={200}
									height={200}
									className='h-full w-full object-cover object-center'
								/>
							</div>
							<div className='mt-4 flex flex-col items-start'>
								<h3 className='font-serif text-xl leading-tight text-text-primary'>
									{associateContent.name}
								</h3>
								<p className='mt-2 text-sm leading-snug text-text-secondary'>
									{associateContent.role}
								</p>
							</div>
							<div className='mt-3 h-px w-full bg-brand-ink/10' />
							<ul className='mt-3 flex w-full list-none flex-col items-start gap-1 p-0 m-0'>
								<li className='flex items-start gap-2 text-[0.7rem] font-medium leading-tight text-text-primary'>
									<MdVerified aria-hidden='true' className='mt-[0.05rem] h-[0.85rem] w-[0.85rem] shrink-0 text-text-primary' />
									<span className='min-w-0 whitespace-normal break-words'>Con certificación en EL METODO ADULMA presencial</span>
								</li>
								<li className='flex items-start gap-2 text-[0.7rem] font-medium leading-tight text-text-primary'>
									<MdVerified aria-hidden='true' className='mt-[0.05rem] h-[0.85rem] w-[0.85rem] shrink-0 text-text-primary' />
									<span className='min-w-0 whitespace-normal break-words'>Con certificación en primeros auxilios</span>
								</li>
							</ul>
						</article>
					) : null}
				</div>
			</Container>
		</section>
	);
}
