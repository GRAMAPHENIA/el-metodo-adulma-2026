import type { LocationCard, MediaAsset } from '@/src/types/content';

export const homeHero = {
	title:
		'El método para profesionales que desean enseñarlo y para adultos mayores que quieren practicarlo.',
	description:
		'Desde el año 2004, implementando EL MÉTODO ADULMA®, para la evolución de la enseñanza, recuperar el estado físico y la neuroplasticidad.',
	ctaLabel: 'Conoce El Método',
	ctaHref: '/nosotros',
	videoSrc: '/videocorto.mp4',
	posterSrc: '/flyerComienzo.svg',
};

export const locationCards: LocationCard[] = [
	{
		id: 'olivos-manana',
		location: 'Olivos',
		scheduleTitle: 'Horario de mañana',
		schedules: [
			{
				time: 'Lunes y jueves de 9.45hs a 10.45hs',
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
				time: 'Lunes y miércoles de 11.00hs a 12.00hs',
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
				time: 'Miércoles y viernes de 10.00hs a 11.00hs',
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
				time: 'Martes y viernes de 9:45hs a 10.45hs y de 11.00hs a 12.00hs',
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
		id: 'saavedra',
		location: 'Saavedra',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Lunes y jueves de 15:45hs a 16:45hs',
				address: 'Jaramillo 3055 CABA',
			},
		],
	},
	{
		id: 'san-miguel-moreno',
		location: 'San Miguel Moreno',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Jueves de 16.00hs a 17.00hs',
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
				time: 'Lunes y miércoles de 11.00hs a 12.00hs',
				address: 'Av. Sta. Fe 1773',
			},
		],
	},
];

export const testimonialVideos: MediaAsset[] = [
	{ src: '/testimonios/testimonio1.mp4', alt: 'Testimonio en video 1' },
	{ src: '/testimonios/testimonio2.mp4', alt: 'Testimonio en video 2' },
	{ src: '/testimonios/testimonio3.mp4', alt: 'Testimonio en video 3' },
];
