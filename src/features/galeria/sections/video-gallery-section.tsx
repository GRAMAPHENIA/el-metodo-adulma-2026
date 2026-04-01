import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { VideoCard } from '@/src/components/ui/video-card';
import { galleryVideos } from '@/src/features/galeria/galeria-content';

export function VideoGallerySection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Videos'
					title='Momentos en movimiento'
					description='Clips de clases y actividades de El Método.'
					className='max-w-[76rem] text-left'
				/>
				<div className='mt-4 inline-flex items-center rounded-full border border-brand-ink/14 bg-brand-surface/80 px-3 py-1 text-xs font-semibold text-text-secondary'>
					{galleryVideos.length} videos destacados
				</div>
				<div className='mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
					{galleryVideos.map((video, index) => (
						<div
							key={video.src}
							className='reveal-soft'
							style={{ animationDelay: `${index * 90}ms` }}
						>
							<VideoCard
								src={video.src}
								className='max-w-none'
								mediaClassName='h-[22rem]'
							/>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
