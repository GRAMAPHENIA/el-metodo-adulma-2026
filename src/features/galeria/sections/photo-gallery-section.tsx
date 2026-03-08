import { Container } from '@/src/components/ui/container';
import { ImageCard } from '@/src/components/ui/image-card';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { galleryImages } from '@/src/features/galeria/galeria-content';

const photoAspectVariants = [
	'aspect-[4/5]',
	'aspect-square sm:aspect-[5/4]',
	'aspect-[3/4]',
	'aspect-[5/4] lg:aspect-[3/2]',
	'aspect-[2/3]',
	'aspect-[4/3] xl:aspect-[16/10]',
];

export function PhotoGallerySection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Galería'
					title='Imágenes de nuestras actividades'
					description='Registro de clases y encuentros.'
					className='max-w-4xl text-left'
				/>
				<div className='mt-4 inline-flex items-center rounded-full border border-brand-ink/14 bg-brand-surface/80 px-3 py-1 text-xs font-semibold text-text-secondary'>
					{galleryImages.length} imágenes de actividades
				</div>
				<section id='photos' className='mt-8'>
					<div className='columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6'>
						{galleryImages.map((image, index) => (
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
