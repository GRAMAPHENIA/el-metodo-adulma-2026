'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function BlogRedirectPage() {
	useEffect(() => {
		window.location.replace('/capacitaciones/');
	}, []);

	return (
		<section className='section-spacing bg-surface-base'>
			<div className='mx-auto max-w-2xl px-4 text-center text-text-primary'>
				<p className='text-base'>Redirigiendo a Capacitaciones...</p>
				<Link
					href='/capacitaciones/'
					className='mt-3 inline-block font-semibold text-brand-accent underline underline-offset-4'
				>
					Ir a Capacitaciones
				</Link>
			</div>
		</section>
	);
}
