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
					className='max-w-4xl text-left'
				/>
				<div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
					{galleryVideos.map(video => (
						<VideoCard
							key={video.src}
							src={video.src}
							className='max-w-none'
							mediaClassName='aspect-[3/4] max-h-[24rem] bg-brand-ink/95'
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
