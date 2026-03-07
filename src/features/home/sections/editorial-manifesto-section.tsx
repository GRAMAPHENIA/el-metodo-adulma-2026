import { MdAutoGraph, MdGroups, MdPsychology } from 'react-icons/md';

import { Container } from '@/src/components/ui/container';
import { SectionHeading } from '@/src/components/ui/section-heading';

const pillarCards = [
	{
		title: 'Movimiento consciente',
		description:
			'Rutinas para fortalecer equilibrio, coordinación y autonomía cotidiana.',
		icon: MdAutoGraph,
	},
	{
		title: 'Plasticidad cognitiva',
		description:
			'Ejercicios que entrenan memoria, atención y velocidad de respuesta.',
		icon: MdPsychology,
	},
	{
		title: 'Comunidad activa',
		description:
			'Encuentros donde la práctica se convierte en acompañamiento real.',
		icon: MdGroups,
	},
];

export function EditorialManifestoSection() {
	return (
		<section className='relative overflow-hidden bg-surface-base'>
			<Container className='section-spacing relative'>
				<SectionHeading
					eyebrow='Cuaderno de enfoque'
					title='Una metodología clara, humana y medible.'
					description='Combinamos trabajo corporal, estímulo cognitivo y acompañamiento grupal para mejorar autonomía funcional y calidad de vida.'
					className='max-w-4xl text-left'
				/>

				<div className='mt-12 grid gap-6 md:grid-cols-3'>
					{pillarCards.map((pillar, index) => {
						const Icon = pillar.icon;

						return (
							<article
								key={pillar.title}
								className='reveal-soft rounded-3xl border border-brand-ink/12 bg-brand-surface/40 p-6 shadow-card'
								style={{ animationDelay: `${index * 90}ms` }}
							>
								<div className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/35 text-brand-accent'>
									<Icon aria-hidden='true' className='text-xl' />
								</div>
								<p className='mt-5 text-xs font-medium text-brand-accent/80'>
									0{index + 1}
								</p>
								<h3 className='mt-2 font-serif text-2xl leading-tight text-brand-ink'>
									{pillar.title}
								</h3>
								<p className='mt-2 text-sm leading-relaxed text-text-secondary'>
									{pillar.description}
								</p>
							</article>
						);
					})}
				</div>

				<div className='mt-8 rounded-3xl border border-brand-ink/12 bg-surface-base p-6 shadow-card sm:p-8'>
					<p className='text-sm leading-relaxed text-text-secondary'>
						Formamos instructores para sostener calidad pedagógica y acompañar
						procesos reales de cambio. Cada clase busca longevidad funcional,
						nunca performance vacía.
					</p>
				</div>
			</Container>
		</section>
	);
}
