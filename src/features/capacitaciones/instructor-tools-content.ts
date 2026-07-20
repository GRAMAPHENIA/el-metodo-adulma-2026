export type InstructorToolProduct = {
	id: string;
	name: string;
	description: string;
	details: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
		className?: string;
	};
};

export const instructorToolsContent = {
	eyebrow: 'RECURSOS',
	sectionTitle: 'Herramientas para tus clases',
	sectionDescription:
		'Materiales pensados para acompañarte en cada encuentro con tus alumnos.',
	buttonLabel: 'Ver herramientas',
	modalTitle: 'Herramientas para tus clases',
	heading: 'Para trabajar con tus alumnos',
	subheading: 'Materiales para vos y tus alumnos',
	registrationNotice: 'Todos nuestros productos se encuentran registrados.',
	products: [
		{
			id: 'lona-clases',
			name: 'Lona El Método Adulma®',
			description: 'Ideal para tus clases, talleres y charlas.',
			details: 'Mide 1 m × 70 cm',
			image: {
				src: '/productos/lona-clases.webp',
				alt: 'Lona El Método Adulma',
				width: 1340,
				height: 1972,
				className: 'max-h-[11rem]',
			},
		},
		{
			id: 'lona-manos',
			name: 'Lona de manos',
			description:
				'Ejercicios para trabajar atención, coordinación y neuroplasticidad.',
			details: 'Mide 150 cm × 150 cm',
			image: {
				src: '/productos/lona-manos.webp',
				alt: 'Lona de manos con ejercicios visuales',
				width: 1860,
				height: 1860,
				className: 'max-h-[12rem] max-w-[12rem]',
			},
		},
		{
			id: 'lona-animales',
			name: 'Lona de animales',
			description:
				'Material visual para estimular la atención y la coordinación.',
			details: 'Mide 150 cm × 150 cm',
			image: {
				src: '/productos/lona-animales.webp',
				alt: 'Lona de animales con ejercicios visuales',
				width: 1972,
				height: 1896,
				className: 'max-h-[12rem] max-w-[13rem]',
			},
		},
		{
			id: 'remeras-coach',
			name: 'Remeras para instructores',
			description: 'Personalizadas con EL METODO ADULMA®. (Modelo COACH)',
			details: 'Talles S, M, L y XL',
			image: {
				src: '/productos/remeras-coach.webp',
				alt: 'Remeras para instructores, modelo coach',
				width: 2468,
				height: 1868,
				className: 'max-h-[10rem] max-w-[15rem]',
			},
		},
		{
			id: 'remeras-alumnos',
			name: 'Remeras para alumnos',
			description: 'Para que tus alumnos también formen parte de El Método.',
			details: 'Talles S, M, L y XL',
			image: {
				src: '/productos/remeras-alumnos.webp',
				alt: 'Remeras para alumnos',
				width: 2460,
				height: 1868,
				className: 'max-h-[10rem] max-w-[15rem]',
			},
		},
	] satisfies InstructorToolProduct[],
	contact: {
		label:
			'Para adquirir cualquiera de estos productos contactarse con Juan Pablo Alfonso.',
		note: 'Sólo apto para Instructores de El Método Adulma.',
		emailLabel: 'Solicitar al mail:',
		email: 'alfonsojuanpablo00@gmail.com',
	},
};
