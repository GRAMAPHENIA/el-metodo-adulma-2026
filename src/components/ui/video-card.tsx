'use client';

import { useEffect, useRef, useState } from 'react';

import { getVideoType } from '@/src/lib/media/video';
import { cn } from '@/src/lib/utils/cn';

type VideoCardProps = {
	src: string;
	title?: string;
	className?: string;
	mediaClassName?: string;
	preload?: 'none' | 'metadata' | 'auto';
};

export function VideoCard({
	src,
	title,
	className,
	mediaClassName,
	preload = 'none',
}: VideoCardProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setIsLoaded(false);
		setHasError(false);

		const fallbackTimer = window.setTimeout(() => {
			setIsLoaded(true);
		}, 2000);

		const videoElement = videoRef.current;
		if (
			videoElement &&
			videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
		) {
			setIsLoaded(true);
		}

		return () => window.clearTimeout(fallbackTimer);
	}, [src]);

	return (
		<figure
			className={cn(
				'group relative overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base shadow-card transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(27,54,92,0.18)]',
				className,
			)}
		>
			<div
				className={cn(
					'relative flex h-[22rem] w-full items-center justify-center overflow-hidden bg-brand-accent/24',
					mediaClassName,
				)}
			>
				{!isLoaded ? (
					<div aria-hidden='true' className='media-skeleton absolute inset-0' />
				) : null}
				<div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-brand-ink/82 via-brand-ink/38 to-transparent' />
				<div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 shadow-[inset_0_-36px_40px_-20px_rgba(0,0,0,0.75)]' />
				{title ? (
					<p className='pointer-events-none absolute bottom-0 left-0 z-20 w-full px-2.5 pb-2.5 text-white sm:px-3 sm:pb-3'>
						<span className='inline-block max-w-[96%] rounded-md bg-brand-ink/40 px-2 py-1.5 text-xs font-medium leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] backdrop-blur-[1px] sm:max-w-[94%] sm:px-2.5 sm:text-sm'>
							{title}
						</span>
					</p>
				) : null}
				<video
					ref={videoRef}
					controls
					playsInline
					preload={preload}
					aria-label={title ?? 'Video de la galería'}
					className={cn(
						'relative z-[2] block h-full w-full object-cover object-center saturate-[.6] brightness-[.96] contrast-[1.04] transition-[opacity,filter] duration-500 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100',
						isLoaded ? 'opacity-100' : 'opacity-0',
					)}
					onLoadedData={() => setIsLoaded(true)}
					onLoadedMetadata={() => setIsLoaded(true)}
					onCanPlay={() => setIsLoaded(true)}
					onError={() => {
						setHasError(true);
						setIsLoaded(true);
					}}
				>
					<source
						src={src}
						type={getVideoType(src)}
						onError={() => {
							setHasError(true);
							setIsLoaded(true);
						}}
					/>
					Tu navegador no soporta videos.
				</video>
				{hasError ? (
					<div className='absolute inset-0 z-20 grid place-content-center bg-brand-ink/70 px-6 text-center text-sm font-medium text-white'>
						No pudimos cargar este video.
					</div>
				) : null}
			</div>
		</figure>
	);
}
