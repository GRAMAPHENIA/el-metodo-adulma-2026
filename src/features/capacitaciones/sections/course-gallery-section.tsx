import { Container } from '@/src/components/ui/container';
import { ImageCard } from '@/src/components/ui/image-card';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { VideoCard } from '@/src/components/ui/video-card';
import { courseGalleryMedia } from '@/src/features/capacitaciones/capacitaciones-content';

const photoAspectVariants = [
	'aspect-[4/5]',
	'aspect-square sm:aspect-[5/4]',
	'aspect-[3/4]',
	'aspect-[5/4] lg:aspect-[3/2]',
	'aspect-[2/3]',
	'aspect-[4/3] xl:aspect-[16/10]',
];

export function CourseGallerySection() {
	const videos = courseGalleryMedia.filter(item => item.src.endsWith('.mp4'));
	const images = courseGalleryMedia.filter(item => !item.src.endsWith('.mp4'));

	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Galería de capacitaciones'
					title='Experiencias en capacitaciones del Método'
					description='Así se vive cada encuentro: aprendizaje activo, trabajo en equipo y herramientas aplicables desde el primer día.'
					className='max-w-[76rem] text-left'
				/>

				<div className='mt-4 inline-flex items-center rounded-full border border-brand-ink/14 bg-brand-surface/80 px-3 py-1 text-xs font-semibold text-text-secondary'>
					{videos.length} videos + {images.length} imágenes de capacitaciones
				</div>

				<h3 className='mt-8 text-sm font-medium tracking-[0.03em] text-brand-accent/85'>
					Videos
				</h3>
				<div className='mt-8 grid gap-5 lg:grid-cols-3'>
					{videos.map((video, index) => (
						<div
							key={video.src}
							className='reveal-soft lg:max-w-[24rem]'
							style={{ animationDelay: `${index * 90}ms` }}
						>
							<VideoCard
								src={video.src}
								poster={video.poster}
								className='max-w-none'
								mediaClassName='h-[22rem]'
							/>
						</div>
					))}
				</div>

				<section id='photos' className='mt-10'>
					<h3 className='text-sm font-medium tracking-[0.03em] text-brand-accent/85'>
						Fotos
					</h3>

					<div className='mt-6 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6'>
						{images.map((image, index) => (
							<div
								key={image.src}
								className='reveal-soft mb-4 break-inside-avoid sm:mb-5 lg:mb-6'
								style={{ animationDelay: `${index * 90}ms` }}
							>
								<ImageCard
									src={image.src}
									alt={image.alt}
									width={image.width ?? 1200}
									height={image.height ?? 900}
									showCaption={false}
									priority={index < 2}
									className={
										index > 0 && index % 4 === 0 ? 'sm:mt-3 lg:mt-4' : undefined
									}
									imageClassName={
										photoAspectVariants[index % photoAspectVariants.length]
									}
								/>
							</div>
						))}
					</div>
				</section>
			</Container>
		</section>
	);
}
