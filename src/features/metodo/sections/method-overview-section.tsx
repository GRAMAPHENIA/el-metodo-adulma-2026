import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import {
	metodoLeftCards,
	metodoPageContent,
	metodoRightCards,
} from '@/src/features/metodo/metodo-content';

function MethodTextCard({ text }: { text: string }) {
	return (
		<article className='reveal-soft h-full overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base p-4 shadow-card sm:p-5'>
			<div className='flex h-full min-h-56 items-center justify-center px-2 py-3 sm:px-4 sm:py-5'>
				<p className='text-center text-[length:var(--step-0)] leading-relaxed text-brand-accent'>
					{text}
				</p>
			</div>
		</article>
	);
}

export function MethodOverviewSection() {
	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='El Método'
					title={metodoPageContent.sectionTitle}
					description={metodoPageContent.sectionDescription}
					className='max-w-[76rem] text-left'
				/>

				<div className='mt-8 space-y-6 lg:hidden'>
					<div className='space-y-5'>
						<h3 className='flex min-h-16 items-center justify-center overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base px-5 py-3 text-center font-serif text-[length:var(--step-2)] leading-[0.95] text-brand-accent shadow-card'>
							{metodoPageContent.leftColumnTitle}
						</h3>
						<MethodTextCard text={metodoLeftCards[0]?.text ?? ''} />
						<MethodTextCard text={metodoLeftCards[1]?.text ?? ''} />
					</div>

					<div className='space-y-5'>
						<h3 className='flex min-h-16 items-center justify-center overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base px-5 py-3 text-center font-serif text-[length:var(--step-2)] leading-[0.95] text-brand-accent shadow-card'>
							{metodoPageContent.rightColumnTitle}
						</h3>
						<MethodTextCard text={metodoRightCards[0]?.text ?? ''} />
						<MethodTextCard text={metodoRightCards[1]?.text ?? ''} />
					</div>
				</div>

				<div className='mx-auto mt-8 hidden max-w-[76rem] items-stretch gap-6 lg:grid lg:grid-cols-2'>
					<h3 className='flex min-h-16 items-center justify-center overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base px-5 py-3 text-center font-serif text-[length:var(--step-2)] leading-[0.95] text-brand-accent shadow-card'>
						{metodoPageContent.leftColumnTitle}
					</h3>
					<h3 className='flex min-h-16 items-center justify-center overflow-hidden rounded-2xl border border-brand-ink/12 bg-surface-base px-5 py-3 text-center font-serif text-[length:var(--step-2)] leading-[0.95] text-brand-accent shadow-card'>
						{metodoPageContent.rightColumnTitle}
					</h3>
					<MethodTextCard text={metodoLeftCards[0]?.text ?? ''} />
					<MethodTextCard text={metodoRightCards[0]?.text ?? ''} />
					<MethodTextCard text={metodoLeftCards[1]?.text ?? ''} />
					<MethodTextCard text={metodoRightCards[1]?.text ?? ''} />
				</div>

				<div className='mx-auto mt-10 max-w-[76rem]'>
					<MethodTextCard text={metodoPageContent.bottomText} />
				</div>
			</Container>
		</section>
	);
}
