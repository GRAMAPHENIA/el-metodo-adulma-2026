import type { MethodTextCard } from '@/src/types/content';

export const metodoPageContent = {
	sectionTitle: 'El Método Adulma',
	leftColumnTitle: '¿Por qué enseñar El Método?',
	rightColumnTitle: '¿Por qué aprender El Método?',
	bottomText:
		'Hace más de 25 años que se trabaja con adultos mayores y se realiza un trabajo de investigación siempre consultando grupos de trabajo interdisciplinario de médicos clínicos, cardiólogos, gerontólogos, neurólogos, psiquiatras, psicólogos, kinesiólogos, profesores de educación física, nutricionistas, siempre actualizado, porque EL MÉTODO ADULMA® no espera épocas mejores, EL MÉTODO ADULMA® hace mejores las épocas.',
};

export const metodoLeftCards: MethodTextCard[] = [
	{
		id: 'ensenar-1',
		text: 'Porque EL MÉTODO ADULMA®, creado en el año 2004, es un conjunto de elementos, actividades, temas y asuntos, que competen a los adultos mayores, para que proyectos, ideas y ganas de vivir la vida, puedan llevarlos a cabo todos y cada uno cuando está bien enseñado.',
	},
	{
		id: 'ensenar-2',
		text: 'EL MÉTODO ADULMA® apuesta a sus capacidades, sin subestimar aptitudes, virtudes y cualidades, desafiándolos siempre a ir por más, como la gente real de las imágenes de esta web, todos ellos practican EL MÉTODO ADULMA®.',
	},
];

export const metodoRightCards: MethodTextCard[] = [
	{
		id: 'aprender-1',
		text: 'Porque EL MÉTODO ADULMA® recupera habilidades perdidas, enlentecidas, mentes desorientadas, cuerpos rígidos y todo lo que el Adulto Mayor comienza a experimentar avanzado el paso de los años. Entonces, ¿la prevención en la vejez es factible? ¡Sí, y podemos estar preparados y tener una vejez saludable e independiente.',
	},
	{
		id: 'aprender-2',
		text: 'El cuestionamiento debería ser: ¿cómo quiero vivir esta etapa? La salud física, mental y social son la clave. EL MÉTODO ADULMA® te enseña todo tipo de tips para tu salud integral. Solo debés probarlo, sentirlo y luego comparar cómo estabas antes de practicarlo. Que no te lo cuenten, experimentalo vos mismo.',
	},
];

export const creatorContent = {
	name: 'Ana T. de León',
	role: 'Coordinadora y directora',
	image: '/avatar/teresa.png',
	bio: [
		'Lic. en Enfermería, académica y preparadora física y deportiva, especializada en el adulto mayor y la vejez.',
		'Miembro de la Asociación Médica Argentina.',
		'Ex docente de la Universidad de Buenos Aires, Facultad de Medicina, Escuelas de Enfermería.',
		'Mujer del año en el partido de Vicente López (2013).',
		'Autora de "¿Tercera edad, 4ta. edad?" (2012) y "El Método" Adulma (2021).',
	],
	cvUrl: '/cvAna-comprimido.pdf',
};
