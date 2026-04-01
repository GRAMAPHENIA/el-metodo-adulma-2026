'use client';

import { useEffect, useMemo, useState } from 'react';

import { MdLocationOn } from 'react-icons/md';

import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';
import { locationCards } from '@/src/features/home/home-content';

const INITIAL_VISIBLE_CARDS = 6;

export function ScheduleSection() {
	const [expanded, setExpanded] = useState(false);
	const [columnCount, setColumnCount] = useState(1);
	const visibleCards = expanded
		? locationCards
		: locationCards.slice(0, INITIAL_VISIBLE_CARDS);

	useEffect(() => {
		const updateColumns = () => {
			if (window.innerWidth >= 1280) {
				setColumnCount(3);
				return;
			}

			if (window.innerWidth >= 768) {
				setColumnCount(2);
				return;
			}

			setColumnCount(1);
		};

		updateColumns();
		window.addEventListener('resize', updateColumns);

		return () => {
			window.removeEventListener('resize', updateColumns);
		};
	}, []);

	const columns = useMemo(() => {
		const nextColumns = Array.from(
			{ length: columnCount },
			() => [] as typeof visibleCards,
		);

		visibleCards.forEach((card, index) => {
			nextColumns[index % columnCount].push(card);
		});

		return nextColumns;
	}, [columnCount, visibleCards]);

	return (
		<section className='section-spacing relative overflow-hidden bg-surface-base'>
			<Container className='relative'>
				<SectionHeading
					eyebrow='Sedes y horarios'
					title='Espacios activos de El Método'
					description='Cronograma actualizado para clases regulares. Cada salón funciona como una célula activa de El Método.'
					className='max-w-[76rem] text-left'
				/>

				<div className='mt-11 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3'>
					{columns.map((column, columnIndex) => (
						<div
							key={`schedule-column-${columnIndex}`}
							className='flex flex-col gap-5'
						>
							{column.map(card => (
								<article
									key={card.id}
									className='reveal-soft relative overflow-hidden rounded-3xl border border-brand-ink/12 bg-surface-base p-6 shadow-card'
								>
									<div className='mb-3 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-brand-primary/30 text-brand-accent'>
										<MdLocationOn aria-hidden='true' className='text-xl' />
									</div>
									<h3 className='font-serif text-3xl leading-none text-text-primary'>
										{card.location}
									</h3>
									<p className='mt-2 text-sm font-medium text-brand-accent/85'>
										{card.scheduleTitle}
									</p>
									<div className='mt-4 space-y-4 border-t border-brand-ink/8 pt-4'>
										{card.schedules.map((scheduleBlock, index) => (
											<div key={`${card.id}-${index}`} className='space-y-1.5'>
												<p className='text-sm font-semibold text-text-primary'>
													{scheduleBlock.time}
												</p>
												{scheduleBlock.times?.length ? (
													<ul className='space-y-1 pt-1'>
														{scheduleBlock.times.map(timeSlot => (
															<li
																key={`${card.id}-${timeSlot}`}
																className='text-sm font-semibold text-text-primary'
															>
																{timeSlot}
															</li>
														))}
													</ul>
												) : null}
												{scheduleBlock.venue ? (
													<p className='pt-1 text-xs font-medium tracking-[0.03em] text-brand-ink'>
														{scheduleBlock.venue}
													</p>
												) : null}
												{scheduleBlock.note ? (
													<p className='text-sm leading-relaxed text-text-secondary'>
														{scheduleBlock.note}
													</p>
												) : null}
												<p className='text-sm leading-relaxed text-text-secondary'>
													{scheduleBlock.address}
												</p>
											</div>
										))}
									</div>
								</article>
							))}
						</div>
					))}
				</div>

				{locationCards.length > INITIAL_VISIBLE_CARDS ? (
					<div className='mt-8 flex justify-center'>
						<Button type='button' onClick={() => setExpanded(prev => !prev)}>
							{expanded ? 'Ver menos salones' : 'Ver más salones'}
						</Button>
					</div>
				) : null}
			</Container>
		</section>
	);
}
