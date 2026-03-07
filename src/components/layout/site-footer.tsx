import Link from 'next/link';

import { Container } from '@/src/components/ui/container';
import { navItems } from '@/src/lib/seo/site-config';

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer
			className='mt-12 border-t border-brand-primary/25 bg-brand-ink py-14 text-brand-surface lg:mt-16'
			id='footer'
		>
			<Container className='grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]'>
				<section aria-labelledby='footer-manifiesto'>
					<p className='text-sm font-medium tracking-[0.03em] text-brand-primary'>
						El Método Adulma
					</p>
					<h2
						id='footer-manifiesto'
						className='mt-3 max-w-sm font-serif text-3xl leading-[1.02] text-brand-surface'
					>
						Para profesionales y para adultos mayores.
					</h2>
					<p className='mt-4 max-w-md text-sm leading-relaxed text-brand-surface/85'>
						Desde 2004, movimiento y neuroplasticidad para un envejecimiento
						activo.
					</p>
					<p className='mt-5 text-xs text-brand-surface/70'>MUGA {year}</p>
				</section>

				<section aria-labelledby='footer-explorar'>
					<h2
						id='footer-explorar'
						className='text-base font-medium text-brand-surface'
					>
						Navegación
					</h2>
					<ul className='mt-4 space-y-2'>
						{navItems.slice(0, 5).map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									className='inline-flex items-center gap-2 rounded-md text-sm text-brand-surface/82 transition hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary'
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section aria-labelledby='footer-contacto'>
					<h2
						id='footer-contacto'
						className='text-base font-medium text-brand-surface'
					>
						Contacto
					</h2>
					<ul className='mt-4 space-y-3 text-sm text-brand-surface/82'>
						<li>
							<a
								href='mailto:adulmaelmetodo@gmail.com'
								className='underline-offset-4 hover:text-brand-primary hover:underline'
							>
								adulmaelmetodo@gmail.com
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/elmetodoadulma/'
								target='_blank'
								rel='noreferrer noopener'
								className='underline-offset-4 hover:text-brand-primary hover:underline'
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/El.metodo.adulma'
								target='_blank'
								rel='noreferrer noopener'
								className='underline-offset-4 hover:text-brand-primary hover:underline'
							>
								Facebook
							</a>
						</li>
					</ul>
				</section>
			</Container>

			<Container className='mt-10'>
				<section className='rounded-2xl border border-brand-surface/20 bg-brand-surface/5 p-6 sm:p-7'>
					<h3 className='text-sm font-semibold tracking-[0.03em] text-brand-primary'>
						Información legal
					</h3>
					<p className='mt-4 text-xs leading-relaxed text-brand-surface/85 sm:text-[13px]'>
						Se deja constancia que EL MÉTODO ADULMA es impartido de manera
						directa por la Lic. Ana T. de León, creadora del mismo, en el salón
						de Ricardo Gutiérrez 1372, Olivos, los días lunes y jueves de 11.00
						a 12.00 hs, y en el salón de La Redonda de Belgrano, sito en Vuelta
						de Obligado 2042, barrio de Belgrano, ingresando por Secretaría
						Parroquial, los días martes y viernes de 11.00 a 12.00 hs.
					</p>
					<p className='mt-4 text-xs leading-relaxed text-brand-surface/85 sm:text-[13px]'>
						Las personas que figuran en esta página han concurrido y finalizado
						el curso de Formación de EL MÉTODO ADULMA. La aplicación y
						transmisión de los conocimientos adquiridos durante la cursada por
						parte de dichos instructores se realiza bajo su exclusiva
						responsabilidad, siendo los únicos pasibles de las acciones que
						pudieran derivarse de su práctica profesional.
					</p>
				</section>
			</Container>

			<div className='mt-10 border-t border-brand-surface/20 pt-4 text-center text-xs text-brand-surface/70'>
				Copyright {year} El Método Adulma. Todos los derechos reservados.
			</div>
		</footer>
	);
}
