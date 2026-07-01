import type { LocationCard, MediaAsset } from '@/src/types/content';

export const homeHero = {
	title:
		'El Método para profesionales que desean enseñarlo y para adultos mayores que quieren practicarlo.',
	description:
		'Desde el año 2004, implementando EL MÉTODO ADULMA®, para la evolución de la enseñanza, recuperar el estado físico y la neuroplasticidad.',
	ctaLabel: 'Conoce El Método',
	ctaHref: '/nosotros',
	videoSrc: '/videocorto.mp4',
	poster: '/videocorto.webp',
};

export const locationCards: LocationCard[] = [
	{
		id: 'olivos-manana',
		location: 'Olivos',
		scheduleTitle: 'Horario de mañana',
		schedules: [
			{
				time: 'Lunes y jueves de 10.30hs a 11.30hs',
				venue: 'Salón al fondo',
				address: 'R. Gutiérrez 1372 Olivos',
			},
		],
	},
	{
		id: 'olivos-tarde',
		location: 'Olivos',
		scheduleTitle: 'Horario de tarde',
		schedules: [
			{
				time: 'Martes y viernes de 16.30hs a 17.30hs',
				venue: 'Salón al fondo',
				address: 'R. Gutiérrez 1372 Olivos',
			},
		],
	},
	{
		id: 'don-torcuato',
		location: 'Don Torcuato',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Lunes y viernes de 10.00hs a 11.00hs',
				venue: 'CACYP',
				address: 'Ruta 202 y Balbastro Don Torcuato',
			},
			{
				time: 'Martes y jueves de 11.30hs a 12.30hs',
				venue: 'Funcional Torcuato',
				address: 'Buenos Aires 1539',
			},
		],
	},
	{
		id: 'florida',
		location: 'Florida',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Lunes, miércoles y viernes de 10.00hs a 11.00hs ',
				venue: 'Amigos de Florida',
				address: 'Gral. San Martín 2442 Florida',
			},
		],
	},
	{
		id: 'belgrano',
		location: 'Belgrano',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Martes y viernes ',
				times: ['9.40hs a 10.40hs', '10.50hs a 11.50hs', '12.00hs a 13.00hs'],
				venue: 'La Redonda de Belgrano',
				note: 'Entrada por secretaría parroquial',
				address: 'Vuelta de Obligado 2042 Belgrano',
			},
		],
	},
	{
		id: 'tigre',
		location: 'Tigre',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Martes y jueves de 9:45hs a 10.45hs',
				venue: 'Sociedad Italiana de Tigre',
				note: 'Entrada por galería',
				address: 'Av. Cazón 1336 Tigre',
			},
		],
	},
	{
		id: 'san-miguel-moreno',
		location: 'San Miguel Moreno',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Martes y jueves de 16.00hs a 17.00hs',
				venue: 'Salón Lobos',
				address: 'Pedro Ignacio Rivera 757',
			},
		],
	},
	{
		id: 'martinez',
		location: 'Martínez',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Lunes y jueves de 11.15hs a 12.15hs',
				address: 'Av. Sta. Fe 1773',
			},
		],
	},
	{
		id: 'munro',
		location: 'Munro',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Lunes y jueves de 11.15hs a 12.15hs',
				address: 'Bernardino Rivadavia 2350, Munro',
			},
		],
	},
	{
		id: 'el-talar',
		location: 'El Talar',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Lunes y miércoles de 15.15hs a 16.15hs',
				venue: 'Iglesia Medalla Milagrosa',
				note: 'Ingreso por Pasteur',
				address: 'Las Heras 1839',
			},
		],
	},
];

export const testimonialVideos: MediaAsset[] = [
	{
		src: '/testimonios/testimonio1.mp4',
		poster: '/testimonios/testimonio1.webp',
		alt: 'Testimonio en video 1',
	},
	{
		src: '/testimonios/testimonio2.mp4',
		poster: '/testimonios/testimonio2.webp',
		alt: 'Testimonio en video 2',
	},
	{
		src: '/testimonios/testimonio3.mp4',
		poster: '/testimonios/testimonio3.webp',
		alt: 'Testimonio en video 3',
	},
];
