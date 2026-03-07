'use client';

import { useEffect, useState } from 'react';

import { MdPlayCircleFilled } from 'react-icons/md';

import { getVideoType } from '@/src/lib/media/video';
import { cn } from '@/src/lib/utils/cn';

type VideoCardProps = {
	src: string;
	title?: string;
	poster?: string;
	className?: string;
	mediaClassName?: string;
};

export function VideoCard({
	src,
	title,
	poster,
	className,
	mediaClassName,
}: VideoCardProps) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(false);
	}, [src]);

	useEffect(() => {
		const fallbackTimer = window.setTimeout(() => {
			setIsLoaded(true);
		}, 3500);

		return () => window.clearTimeout(fallbackTimer);
	}, [src]);

	return (
		<figure
			className={cn(
				'relative w-full overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base shadow-card',
				className,
			)}
		>
			<div className='relative z-10 flex items-center justify-between border-b border-brand-ink/10 px-4 py-3'>
				<span className='inline-flex items-center gap-2 text-xs font-medium tracking-[0.03em] text-brand-accent'>
					<MdPlayCircleFilled aria-hidden='true' className='text-base' />
					{title ?? 'Contenido en video'}
				</span>
			</div>
			<div className='relative'>
				{!isLoaded ? (
					<div
						aria-hidden='true'
						className='media-skeleton absolute inset-0 z-10'
					/>
				) : null}
				<video
					controls
					playsInline
					preload='metadata'
					poster={poster}
					className={cn(
						'aspect-[16/9] w-full bg-surface-muted object-contain transition-opacity duration-300',
						isLoaded ? 'opacity-100' : 'opacity-0',
						mediaClassName,
					)}
					onLoadedMetadata={() => setIsLoaded(true)}
					onCanPlay={() => setIsLoaded(true)}
					onLoadedData={() => setIsLoaded(true)}
					onError={() => setIsLoaded(true)}
				>
					<source src={src} type={getVideoType(src)} />
					Tu navegador no soporta video HTML5.
				</video>
			</div>
			{title ? (
				<figcaption className='px-4 py-3 text-sm font-medium text-text-secondary'>
					{title}
				</figcaption>
			) : null}
		</figure>
	);
}
