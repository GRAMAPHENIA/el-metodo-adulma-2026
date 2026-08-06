import type { LocationCard } from '@/src/types/content';

export const homeHero = {
	title:
		'El Método para profesionales que desean enseñarlo y para adultos mayores que quieren practicarlo.',
	description:
		'Desde el año 2004, implementando El METODO ADULMA®, para la evolución de la enseñanza, recuperar el estado físico y la neuroplasticidad.',
	ctaLabel: 'Conoce El Método',
	ctaHref: '/nosotros',
	videoSrc: '/videocorto.mp4',
	poster: '/videocorto.webp',
};

export const pressFeature = {
	eyebrow: 'En los medios',
	title: 'El Método Adulma ya está en Uruguay',
	description:
		'El diario El País de Uruguay conversó con la creadora Ana T. de León sobre una propuesta que integra estimulación física, cognitiva y social para acompañar un envejecimiento activo y saludable.',
	source: 'El País · Uruguay · 30 de julio de 2026',
	articleTitle:
		'La propuesta que promueve un envejecimiento activo y saludable',
	ctaLabel: 'Leer la nota completa',
	href: 'https://www.elpais.com.uy/bienestar/vida-sana/el-metodo-adulma-ya-esta-en-uruguay-como-es-la-propuesta-que-promueve-un-envejecimiento-activo-y-saludable',
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
		id: 'belgrano',
		location: 'Belgrano',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Martes y viernes ',
				times: ['9.30hs a 10.30hs', '10.50hs a 11.50hs', '12.00hs a 13.00hs'],
				venue: 'La Redonda de Belgrano',
				note: 'Entrada por secretaría parroquial',
				address: 'Vuelta de Obligado 2042 Belgrano',
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
	{
		id: 'sarandi',
		location: 'Sarandí',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Lunes y miércoles de 10.00hs a 11.00hs',
				venue: 'Centro Sarandí 10',
				address: 'Brandsen 2650',
			},
		],
	},
	{
		id: 'uruguay',
		location: 'Uruguay',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Miércoles de 15.30 a 16.30hs',
				venue: 'Club Porteros del Este',
				address: 'Las Dalias entre Amapolas e Ibirapitá, Maldonado',
			},
		],
	},
	{
		id: 'cordoba-luyaba',
		location: 'Córdoba',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Jueves de 17.00hs a 18.00hs',
				venue: 'Centro de Jubilados Luyaba',
				address: 'Dpto. San Javier, Valle de Traslasierra, Córdoba',
			},
		],
	},
	{
		id: 'flores',
		location: 'Flores',
		scheduleTitle: 'Horarios',
		schedules: [
			{
				time: 'Martes y jueves de 10.00hs a 11.00hs',
				venue: 'Asociación Calabresa suc. Flores',
				address: 'Yerbal 2636',
			},
		],
	},
];
