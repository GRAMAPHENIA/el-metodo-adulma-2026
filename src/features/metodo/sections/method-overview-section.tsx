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

const columnTitleClassName =
	'mt-0 flex min-h-16 items-center justify-center overflow-hidden rounded-r-2xl border-l-4 border-brand-primary bg-surface-muted/70 px-4 py-4 text-center font-serif text-balance text-[clamp(1.35rem,2vw,2.4rem)] leading-[1.08] tracking-[-0.03em] text-text-primary shadow-[0_8px_20px_rgba(75,56,33,0.08)] sm:px-5 sm:py-5 lg:min-h-[6rem] lg:leading-[1.12]';

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
						<h3 className={columnTitleClassName}>
							{metodoPageContent.leftColumnTitle}
						</h3>
						<MethodTextCard text={metodoLeftCards[0]?.text ?? ''} />
						<MethodTextCard text={metodoLeftCards[1]?.text ?? ''} />
					</div>

					<div className='space-y-5'>
						<h3 className={columnTitleClassName}>
							{metodoPageContent.rightColumnTitle}
						</h3>
						<MethodTextCard text={metodoRightCards[0]?.text ?? ''} />
						<MethodTextCard text={metodoRightCards[1]?.text ?? ''} />
					</div>
				</div>

				<div className='mx-auto mt-8 hidden max-w-[76rem] items-stretch gap-6 lg:grid lg:grid-cols-2'>
					<h3 className={columnTitleClassName}>
						{metodoPageContent.leftColumnTitle}
					</h3>
					<h3 className={columnTitleClassName}>
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
