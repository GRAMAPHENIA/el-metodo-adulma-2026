import { cn } from '@/src/lib/utils/cn';

type EditorialPullQuoteProps = {
	quote: string;
	author: string;
	className?: string;
};

export function EditorialPullQuote({
	quote,
	author,
	className,
}: EditorialPullQuoteProps) {
	return (
		<figure
			className={cn(
				'relative overflow-hidden border border-brand-ink/20 bg-surface-base/95 p-5 shadow-card',
				className,
			)}
		>
			<div
				className='pointer-events-none absolute inset-0 opacity-35'
				style={{
					backgroundImage:
						'repeating-linear-gradient(90deg, rgba(27,54,92,0.1) 0 1px, transparent 1px 8px), linear-gradient(150deg, rgba(254,230,185,0.35), transparent 55%)',
				}}
				aria-hidden='true'
			/>
			<div className='relative mb-4 flex items-center justify-between border-b border-brand-ink/15 pb-2'>
				<p className='text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent'>
					Cita central
				</p>
				<span
					className='font-serif text-3xl leading-none text-brand-accent/70'
					aria-hidden='true'
				>
					&ldquo;
				</span>
			</div>
			<blockquote className='relative font-serif text-[clamp(1.05rem,2.2vw,1.35rem)] leading-relaxed text-brand-ink'>
				{quote}
			</blockquote>
			<figcaption className='relative mt-4 border-t border-brand-ink/10 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent'>
				{author}
			</figcaption>
		</figure>
	);
}
