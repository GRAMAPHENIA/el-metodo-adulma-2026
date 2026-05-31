import Image from 'next/image';

import { cn } from '@/src/lib/utils/cn';

type HeroMediaProps = {
	videoSrc: string;
	poster: string;
	className?: string;
};

export function HeroMedia({ videoSrc, poster, className }: HeroMediaProps) {
	return (
		<div
			className={cn(
				'relative h-[clamp(18rem,45vw,33rem)] w-full overflow-hidden rounded-3xl bg-brand-accent/24',
				className,
			)}
		>
			<Image
				src={poster}
				alt=''
				fill
				priority
				fetchPriority='high'
				sizes='100vw'
				aria-hidden='true'
				className='absolute inset-0 h-full w-full object-cover object-center'
			/>
			<video
				className='absolute inset-0 h-full w-full object-cover object-center'
				autoPlay
				muted
				loop
				playsInline
				preload='none'
				aria-hidden='true'
			>
				<source
					media='(min-width: 1024px)'
					src={videoSrc}
					type='video/mp4'
				/>
			</video>
			<div
				className='absolute inset-0 bg-surface-base/40'
				aria-hidden='true'
			/>
			<div
				aria-hidden='true'
				className='absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-brand-surface to-surface-base'
			/>
		</div>
	);
}
