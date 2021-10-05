const servicios = [
  {
    id: "1",
    titulo: "Prueba COVID PCR",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 1700,
    oldPrice: 2000,
    tiempoResultado: 30,
    descripcion:
      "Método específico para determinar la presencia del virus. Idealmente se utiliza en pacientes que presentan síntomas agudos para confirmar la enfermedad. Es recomendada si el paciente tuvo contacto con una persona diagnosticada, incluso si no presenta síntomas. Se requiere la recolección de células infectadas de la nasofaringe y orofaringe del paciente mediante un hisopo. Se requiere ayuno de 4- 5 horas.",
    descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
    resultados: "RESULTADOS EN 24 a 48 horas",
    comentarios:
      "Esta es la prueba solicitada para fines de viajes e intervenciones médicas, entre otras.",
    tipoMuestra: "Muestra de nariz y garganta",
  },
  {
    id: "2",
    titulo: "PRUEBA DE ANTÍGENO (prueba rápida)",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/images/covid/pruebaCovid.jpg",
    precio: 690,
    oldPrice: 890,
    tiempoResultado: 30,
    descripcion:
      "Una prueba rápida de antígenos o prueba rápida es una prueba de diagnóstico rápida que directamente detecta la presencia o ausencia de un antígeno, en este caso para detectar la presencia de SARS-CoV-2, el virus que causa COVID-19. Las pruebas rápidas son un tipo de pruebas de flujo lateral que detectan proteínas, lo que las distingue de otras pruebas médicas que detectan anticuerpos (pruebas de anticuerpos) o ácido nucleico (pruebas de ácido nucleico), de tipo laboratorio o punto de atención.",
    descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
    resultados: "RESULTADOS EN 2 horas",
    comentarios:
      "Si tu resultado es POSITIVO se confirma COVID-19. Si tu resultado es NEGATIVO es necesario realizar una PRUEBA DE PCR",
    tipoMuestra: "Muestra de nariz",
  },
  {
    id: "3",
    titulo: "PRUEBA DE ANTICUERPOS",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/images/biometria/biometriaHematica.jpg",
    precio: 800,
    oldPrice: 980,
    tiempoResultado: 30,
    descripcion:
      "Prueba realizada por metodología de electroquimioluminiscencia para la detección de anticuerpos totales cuantitativos anti SARS-CoV-2. También llamada prueba serológica cuantitativa; el resultado indica la cantidad de anticuerpos presentes en la sangre del paciente que se pueden producir como respuesta a la infección por el virus SARS-CoV-2 o por efecto de la vacunación.                                                                                                                                                                                               Se analiza la presencia de inmunoglobulinas IgM (que aparecen entre 7 y 10 días después del contacto con el virus) e IgG (que aparecen entre 10 y 15 días después).",
    descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
    resultados: "RESULTADOS DE 24 horas a 48 horas",
    comentarios:
      "Prueba post-vacuna o post-infección para conocer cuantos anticuerpos ANTICOVID tienes en tu cuerpo",
    tipoMuestra: "Muestra de sangre",
  },
  {
    id: "4",
    titulo: "Química Sanguínea",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/images/citometria/ciometriaHematica.jpg",
    precio: 350,
    oldPrice: 450,
    tiempoResultado: 30,
    descripcion:
      "Una química sanguínea es un examen que mide los niveles de ciertas sustancias en la sangre el cual suministra información al médico por medio de una serie de pruebas acerca del metabolismo en el cuerpo humano y el funcionamiento de ciertos órganos como el hígado y los riñones. Esta prueba le indica al doctor cómo se encuentra la salud en general del paciente mediante la medición y reporte de los componentes químicos disueltos en la sangre.",
  },
  {
    id: "5",
    titulo: "Química Sanguínea + Colesterol y trigliceridos",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/images/citometria_colesterol_trigliceridos/citometriaColesterol.jpg",
    precio: 400,
    oldPrice: 550,
    tiempoResultado: 30,
    descripcion:
      "La Química Sanguínea es un análisis de sangre que permite conocer algunos parámetros del cuerpo humano, en este caso, los niveles de Glucosa, Colesterol y Triglicéridos. Esto para brindar un panorama general del estado de salud del paciente. Este examen ayuda a identificar los niveles de glucosa en la sangre o la presencia de diabetes tipo I o II, al medir el colesterol y los triglicéridos se pueden diagnosticar enfermedades cardiovasculares.",
  },
  {
    id: "6",
    titulo: "Prueba de Orina",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/images/orina/orinaPrueba.jpg",
    precio: 100,
    oldPrice: 200,
    tiempoResultado: 30,
    descripcion:
      "A menudo se realiza para checar si hay una infección de las vías urinarias, problemas renales o diabetes. Usted también puede someterse a uno durante una revisión médica, si es ingresado al hospital, antes de una cirugía o si está embarazada.",
  },
];

export default servicios;
