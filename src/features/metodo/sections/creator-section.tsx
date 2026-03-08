import Image from 'next/image';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';

import { LinkButton } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { creatorContent } from '@/src/features/metodo/metodo-content';

export function CreatorSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Creadora'
					title={creatorContent.name}
					description={creatorContent.role}
					className='max-w-6xl'
				/>

				<div className='mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-brand-ink/12 bg-surface-base shadow-card'>
					<div className='grid items-stretch gap-0 md:grid-cols-[14rem_1fr]'>
						<div className='flex flex-col items-center justify-center border-b border-brand-ink/10 bg-brand-primary/12 p-6 text-center md:border-b-0 md:border-r'>
							<div className='w-fit overflow-hidden rounded-full'>
								<Image
									src={creatorContent.image}
									alt='Retrato de Ana T. de León'
									width={144}
									height={144}
									className='h-24 w-24 object-cover sm:h-28 sm:w-28'
								/>
							</div>
							<p className='mt-4 text-xs font-semibold tracking-[0.08em] text-brand-accent'>
								Lic. Ana T. de León
							</p>
							<p className='mt-1 text-xs text-text-secondary'>
								Creadora de EL MÉTODO ADULMA
							</p>
						</div>

						<div className='p-6 sm:p-8'>
							<ul className='list-disc space-y-3 pl-5 text-base leading-relaxed text-text-primary marker:text-brand-accent'>
								{creatorContent.bio.map(item => (
									<li key={item}>{item}</li>
								))}
							</ul>
							<div className='mt-6'>
								<LinkButton
									href={creatorContent.cvUrl}
									target='_blank'
									rel='noreferrer noopener'
								>
									<span className='inline-flex items-center gap-2'>
										<BsFillHandIndexThumbFill aria-hidden='true' />
										Ver currículum completo
									</span>
								</LinkButton>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
