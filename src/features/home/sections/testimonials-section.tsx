import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { VideoCard } from '@/src/components/ui/video-card';
import { testimonialVideos } from '@/src/features/home/home-content';

export function TestimonialsSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Testimonios'
					title='Experiencias reales'
					description='Relatos de quienes forman parte de nuestras clases.'
					className='max-w-4xl text-left'
				/>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
					{testimonialVideos.map((video, index) => (
						<div
							key={video.src}
							className='reveal-soft relative overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base p-3 shadow-card'
							style={{ animationDelay: `${index * 110}ms` }}
						>
							<div className='mb-3 flex flex-wrap items-center gap-3'>
								<p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent'>
									Voz de la comunidad
								</p>
								<p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent'>
									Testimonio {String(index + 1).padStart(2, '0')}
								</p>
							</div>
							<VideoCard
								src={video.src}
								className='border-brand-ink/14 bg-surface-base shadow-none'
								mediaClassName='aspect-[3/4] max-h-[24rem] bg-brand-ink/95'
							/>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
