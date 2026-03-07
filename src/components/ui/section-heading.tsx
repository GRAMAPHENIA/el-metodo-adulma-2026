import { cn } from '@/src/lib/utils/cn';

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	description?: string;
	className?: string;
};

export function SectionHeading({
	eyebrow,
	title,
	description,
	className,
}: SectionHeadingProps) {
	return (
		<header className={cn('mx-auto max-w-4xl text-left', className)}>
			{eyebrow ? (
				<p className='text-sm font-medium tracking-[0.03em] text-brand-accent/85'>
					{eyebrow}
				</p>
			) : null}
			<h2 className='mt-3 text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.04] text-text-primary'>
				{title}
			</h2>
			{description ? (
				<p className='mt-4 max-w-3xl text-[length:var(--step-0)] leading-relaxed text-text-secondary/90'>
					{description}
				</p>
			) : null}
		</header>
	);
}
