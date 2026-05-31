import Image from 'next/image';

import { cn } from '@/src/lib/utils/cn';

type ImageCardProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
	imageClassName?: string;
	priority?: boolean;
	showCaption?: boolean;
};

export function ImageCard({
	src,
	alt,
	width,
	height,
	className,
	imageClassName,
	priority = false,
	showCaption = true,
}: ImageCardProps) {
	return (
		<figure
			className={cn(
				'group relative overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base shadow-card transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(27,54,92,0.18)]',
				className,
			)}
		>
			<div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-brand-ink/82 via-brand-ink/38 to-transparent' />
			<div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 shadow-[inset_0_-36px_40px_-20px_rgba(0,0,0,0.75)]' />
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={cn(
					'h-full w-full object-cover saturate-[.72] brightness-[.98] contrast-[1.02] group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100',
					imageClassName,
				)}
				loading={priority ? 'eager' : 'lazy'}
				priority={priority}
				sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
			/>
			{showCaption ? (
				<figcaption className='pointer-events-none absolute bottom-0 left-0 z-20 w-full px-2.5 pb-2.5 text-white sm:px-3 sm:pb-3'>
					<span className='inline-block max-w-[96%] rounded-md bg-brand-ink/40 px-2 py-1.5 text-xs font-medium leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] backdrop-blur-[1px] sm:max-w-[94%] sm:px-2.5 sm:text-sm'>
						{alt}
					</span>
				</figcaption>
			) : null}
		</figure>
	);
}
