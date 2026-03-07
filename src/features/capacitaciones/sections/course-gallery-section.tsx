import { Container } from '@/src/components/ui/container';
import { ImageCard } from '@/src/components/ui/image-card';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { VideoCard } from '@/src/components/ui/video-card';
import { courseGalleryMedia } from '@/src/features/capacitaciones/capacitaciones-content';

export function CourseGallerySection() {
	const videos = courseGalleryMedia.filter(item => item.src.endsWith('.mp4'));
	const images = courseGalleryMedia.filter(item => !item.src.endsWith('.mp4'));

	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Galería de capacitaciones'
					title='Experiencias de nuestras capacitaciones'
					description='Así se vive cada encuentro: aprendizaje activo, trabajo en equipo y herramientas aplicables desde el primer día.'
					className='max-w-4xl text-left'
				/>

				<div className='mt-10 grid gap-6 md:grid-cols-2'>
					{videos.map(video => (
						<VideoCard
							key={video.src}
							src={video.src}
							className='max-w-none'
							mediaClassName='aspect-[3/4] max-h-[24rem] bg-brand-ink/95'
						/>
					))}
				</div>

				<div className='mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
					{images.map((image, index) => (
						<ImageCard
							key={image.src}
							src={image.src}
							alt={image.alt}
							width={image.width ?? 900}
							height={image.height ?? 650}
							className='reveal-soft'
							priority={index < 2}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
