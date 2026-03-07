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
};

export function ImageCard({
	src,
	alt,
	width,
	height,
	className,
	imageClassName,
	priority = false,
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
				'relative overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base shadow-card',
				className,
			)}
		>
			<div className='relative z-10 flex items-center justify-between border-b border-brand-ink/12 px-3 py-2'>
				<span className='text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent'>
					Archivo fotografico
				</span>
			</div>
			{!isLoaded ? (
				<div aria-hidden='true' className='media-skeleton absolute inset-0' />
			) : null}
			<Image
				src={currentSrc}
				alt={alt}
				width={width}
				height={height}
				className={cn(
					'h-full w-full object-cover transition-opacity duration-300',
					isLoaded ? 'opacity-100' : 'opacity-0',
					imageClassName,
				)}
				loading={priority ? 'eager' : 'lazy'}
				priority={priority}
				sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
				onLoad={() => setIsLoaded(true)}
				onError={handleError}
			/>
		</figure>
	);
}
