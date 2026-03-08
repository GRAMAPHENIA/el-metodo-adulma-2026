'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentSrc, setCurrentSrc] = useState(src);

	useEffect(() => {
		setCurrentSrc(src);
		setIsLoaded(false);
	}, [src]);

	const handleError = () => {
		const webpMatch = currentSrc.match(/^(.*)\.webp(\?.*)?$/i);
		if (webpMatch) {
			setCurrentSrc(`${webpMatch[1]}.png${webpMatch[2] ?? ''}`);
			return;
		}
		setIsLoaded(true);
	};

	return (
		<figure
			className={cn(
				'group relative overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base shadow-card transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(27,54,92,0.18)]',
				className,
			)}
		>
			<div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-brand-ink/82 via-brand-ink/38 to-transparent' />
			<div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 shadow-[inset_0_-36px_40px_-20px_rgba(0,0,0,0.75)]' />
			{!isLoaded ? (
				<div aria-hidden='true' className='media-skeleton absolute inset-0' />
			) : null}
			<Image
				src={currentSrc}
				alt={alt}
				width={width}
				height={height}
				className={cn(
					'h-full w-full object-cover saturate-[.6] brightness-[.96] contrast-[1.04] transition-[opacity,filter] duration-500 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100',
					isLoaded ? 'opacity-100' : 'opacity-0',
					imageClassName,
				)}
				loading={priority ? 'eager' : 'lazy'}
				priority={priority}
				sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
				onLoad={() => setIsLoaded(true)}
				onError={handleError}
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
