import type {
	CourseInfo,
	InstructorProfile,
	MediaAsset,
} from '@/src/types/content';
import { creatorContent } from '@/src/features/metodo/metodo-content';

export const courseInfo: CourseInfo = {
	id: 'curso-online',
	title: 'Curso de Formación Virtual',
	introText:
		'Formarte para dar clases con el Método ADULMA, basado en la estimulación mental a través del movimiento, la práctica de ejercicios físicos y cognitivos en paralelo, el espíritu entusiasta y el acompañamiento social, significa convertirte en parte activa y eficiente de un cambio hacia un envejecimiento saludable, activo, creativo y pleno de vitalidad para esta comunidad.',
	secondaryText:
		'Al hacerlo, vas a cultivar no solo herramientas para promover la autonomía y la calidad de vida —es decir, el bienestar de las personas mayores—, sino también la enorme satisfacción de contribuir a transformar vidas.',
	enrollmentNotice:
		'"Aquellos alumnos del exterior que estén interesados en inscribirse pueden hacerlo abonando con tarjeta de débito o crédito. El monto que se les descuenta va a depender del cambio de la moneda, pero sí, deben calcular su moneda a pesos argentinos. También puede ocurrir que algunos bancos rechacen la transacción ya que deben notificarles previamente de la compra (esto último va a depender de cada banco y sus normativas). Recomiendo que, si algún interesado del exterior no puede realizar el pago, primero consulte con su banco."',
	ctaLabel: 'Programa e información',
	ctaHref: 'https://www.ama-med.org.ar/especialidades/detalleCurso/701',
	learnMoreLabel: 'Saber más',
	learnMoreContent: [
		'Esta formación está orientada a profesionales que deseen ampliar sus oportunidades laborales y contribuir activamente al bienestar de las personas mayores, incorporando estrategias de autocuidado, autovaloración y prevención.',
		'El abordaje es interdisciplinario y promueve la autonomía, la detección temprana de situaciones de riesgo y el diseño de intervenciones de acompañamiento a lo largo del proceso de envejecimiento.',
		'Está dirigida a Acompañantes Terapéuticos, Cuidadores, Enfermeros, Profesionales de la salud, Profesores de Educación Física, Kinesiólogos, Fisioterapeutas y preparadores físicos, instructores de Yoga, Pilates, etc.',
		'La capacitación incluye cómo armar tu propio grupo.',
	],
};

export const instructorProfiles: InstructorProfile[] = [
	{
		id: 'ana-t-de-leon',
		name: creatorContent.name,
		image: creatorContent.image,
		role: 'Creadora de EL MÉTODO ADULMA',
	},
	{
		id: 'juan-alfonso',
		name: 'Profesor Juan P. Alfonso',
		image: '/avatar/instructor-uno.webp',
		role: 'Profesor de Educación Física, Coordinador.',
	},
	{
		id: 'mariela-trajterman',
		name: 'Mariela Trajterman',
		image: '/avatar/instructor-dos.webp',
		role: 'Instructora ',
	},
	{
		id: 'mirta-gakbart',
		name: 'Mirta Gakbart',
		image: '/avatar/instructor-tres.webp',
		role: 'Instructora ',
	},
	{
		id: 'manuela-miretti',
		name: 'Manuela Miretti',
		image: '/avatar/instructor-cuatro.webp',
		role: 'Instructora ',
	},
	{
		id: 'araceli-pane',
		name: 'Araceli E. Pane',
		image: '/avatar/instructor-cinco.webp',
		role: 'Instructora ',
	},
	{
		id: 'yanina-r-florentin',
		name: 'Yanina Rosana Florentin',
		image: '/avatar-new/yanina-florentin.webp',
		role: 'Instructora',
	},
	{
		id: 'claudia-varela',
		name: 'Claudia Varela',
		image: '/avatar/claudia-varela.webp',
		role: 'Instructora',
	},
	{
		id: 'nancy-fretes',
		name: 'Lic. Nancy Fretes',
		image: '/avatar-new/nancy-fretes.webp',
		role: 'Instructora',
	},
	{
		id: 'marcos-villareal',
		name: 'Marcos Villarreal',
		image: '/avatar-new/marcos-villareal.webp',
		role: 'Instructor',
	},
	{
		id: 'paula-sanchez',
		name: 'Paula Sánchez',
		image: '/avatar-new/paula-sanchez.webp',
		role: 'Instructora',
	},
	{
		id: 'rosanna-fontanella',
		name: 'Profesora Rosanna Fontanella',
		image: '/avatar-new/rosanna-fontanella.webp',
		role: 'Instructora',
	},
	{
		id: 'yamila-seguel',
		name: 'Lic. Yamila Abigail Seguel',
		image: '/avatar-new/yamila-seguel.webp',
		role: 'Instructora',
	},
		{
		id: 'vanesa-benetto',
		name: 'Lic. Vanesa Gómez Benetto ',
		image: '/avatar-new/vanesa-benetto.webp',
		role: 'Instructora',
	},
			{
		id: 'susana-perez',
		name: 'Lic.  Susana Alejandra Pérez ',
		image: '/avatar-new/susana-perez.webp',
		role: 'Instructora',
	},
];

export const courseGalleryMedia: MediaAsset[] = [
	{
		src: '/formacion.png',
		alt: 'Imagen de capacitaciones grupales',
		width: 1850,
		height: 1520,
		fit: 'contain',
	},
	{
		src: '/1cap.mp4',
		poster: '/1cap.webp',
		alt: 'Video de capacitación 1',
	},
	{
		src: '/2cap.mp4',
		poster: '/2cap.webp',
		alt: 'Video de capacitación 2',
	},
	{
		src: '/4cap.webp',
		alt: 'Imagen de capacitaciones grupales',
		width: 900,
		height: 650,
	},
	{
		src: '/6cap.webp',
		alt: 'Imagen de práctica en capacitaciones',
		width: 900,
		height: 650,
	},
	{
		src: '/7cap.webp',
		alt: 'Imagen de clase de capacitación',
		width: 502,
		height: 502,
	},
	{
		src: '/cap001.webp',
		alt: 'Imagen de formación profesional 1',
		width: 900,
		height: 650,
	},
	{
		src: '/cap002.webp',
		alt: 'Imagen de formación profesional 2',
		width: 900,
		height: 650,
	},
	{
		src: '/cap003.webp',
		alt: 'Imagen de formación profesional 3',
		width: 900,
		height: 650,
	},
];
