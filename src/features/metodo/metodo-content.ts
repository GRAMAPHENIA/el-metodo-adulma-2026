import type { MethodTextCard } from '@/src/types/content';

export const metodoPageContent = {
	sectionTitle: 'El METODO ADULMA®',
	sectionDescription:
		'Conocé por qué este enfoque transforma tanto la enseñanza profesional como la práctica cotidiana en adultos mayores.',
	leftColumnTitle: 'A los profesionales y a quienes trabajan con personas mayores',
	rightColumnTitle: 'Para quienes aprenden El Método',
	bottomText:
		'Hace más de 25 años adultos mayores toman clases con El METODO ADULMA® donde se realiza un trabajo de investigación siempre consultando grupos de trabajo interdisciplinario de médicos clínicos, cardiólogos, gerontólogos, neurólogos, psiquiatras, psicólogos, kinesiólogos, profesores de educación física, nutricionistas, siempre actualizado, porque El METODO ADULMA® no espera épocas mejores, El METODO ADULMA® hace mejores las épocas.',
};

export const metodoLeftCards: MethodTextCard[] = [
	{
		id: 'ensenar-1',
		text: 'Creado en 2004, El METODO ADULMA® es un programa integral de estimulación para personas mayores que articula tres ejes: actividad física, entrenamiento cognitivo y vínculo social. Su diferencial frente a los programas actuales y repetitivos es el trabajo en multitarea: propuestas que combinan desafío físico, mental, sensorial y lógico al mismo tiempo, tal como lo exige la vida cotidiana.',
	},
	{
		id: 'ensenar-2',
		text: 'Reúne actividades, recursos y contenidos pensados específicamente para esta etapa de la vida, con un enfoque que parte de las capacidades y no de las limitaciones. Lejos de subestimar a las personas mayores, El METODO ADULMA® reconoce sus aptitudes y las desafía a ir siempre por más.',
	},
];

export const metodoRightCards: MethodTextCard[] = [
	{
		id: 'aprender-1',
		text: 'El METODO ADULMA® renueva tu lucidez y potencia tus habilidades. La prevención es la mejor herramienta. Cuerpo activo, entrenamiento cognitivo y vínculo social. Más de 25 años cuidando la autonomía de las personas mayores.',
	},
	{
		id: 'aprender-2',
		text: 'Sumá vida a tus años. El METODO ADULMA® brinda longevidad activa, neuronal y desafiante. Que no te lo cuenten, probalo y notá la diferencia. Conectoma sano, cerebro lozano.',
	},
];

export const creatorContent = {
	name: 'Lic. Ana T. de León',
	role: 'Coordinadora y Directora',
	image: '/avatar/teresa.webp',
	bio: [
		'Miembro de la Asociación Médica Argentina.',
		'Miembro de la Soc. Arg. de Gerontología y Geriatría.',
		'Docente.',
	],
	cvUrl: '/cv-ana.pdf',
};
