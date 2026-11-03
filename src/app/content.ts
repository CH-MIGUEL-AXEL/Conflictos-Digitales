// Adaptación web de la propuesta académica proporcionada. Atención pendiente de validación UMB.
export const SITE_CONTENT = {
  institution: 'UES Tepotzotlán',
  title: 'COLIBRÍ EN UNIDAD',
  entries: [
    { id: 'aprender', number: '01', tag: 'Formación', title: 'Aprender a convivir', description: 'Reconocer necesidades, practicar la escucha y construir acuerdos para cuidar nuestra convivencia digital.', link: '#aprender', action: 'Explorar los encuentros' },
    { id: 'apoyo', number: '02', tag: 'Acompañamiento', title: 'Necesito apoyo', description: 'Conoce la ruta propuesta ante insultos, rumores, burlas y hostigamiento digital.', link: '#apoyo', action: 'Conocer la ruta de apoyo' },
    { id: 'proponer', number: '03', tag: 'Participación', title: 'Aclarar y proponer', description: 'Un cauce para expresar necesidades e inconformidades institucionales sin descalificaciones personales.', link: '#proponer', action: 'Consultar cómo participar' },
    { id: 'seguimiento', number: '04', tag: 'Continuidad', title: 'Mis acuerdos y seguimiento', description: 'La propuesta contempla revisar compromisos y solicitar avances por contacto privado y folio.', link: '#seguimiento', action: 'Conocer el seguimiento' }
  ],
  workshops: [
    { title: 'Reconocer necesidades', description: 'Identificar qué necesitamos para convivir y participar con dignidad.', exercise: 'Reflexiona: ¿qué necesito para sentirme escuchada o escuchado en los espacios digitales de mi comunidad?' },
    { title: 'Practicar la escucha', description: 'Escuchar perspectivas distintas y comunicar desacuerdos con respeto.', exercise: 'Piensa en una diferencia cotidiana. ¿Cómo expresarías lo que necesitas sin atribuir intenciones a la otra persona?' },
    { title: 'Comprender las agresiones digitales', description: 'Revisar el papel de quienes publican, reenvían, reaccionan y observan.', exercise: 'Ante un contenido que humilla a alguien, ¿cómo podrías mostrar apoyo sin compartirlo ni ampliar su exposición?' },
    { title: 'Construir acuerdos', description: 'Transformar lo aprendido en compromisos compartidos y revisables.', exercise: 'Propón un acuerdo concreto: ¿qué haremos, quién participará y cuándo revisaremos si se cumplió?' }
  ],
  steps: [
    { title: 'Escucha privada', text: 'Se prevé una solicitud privada, con folio y persona responsable. Acuse de recibo en un día hábil y contacto en tres días hábiles.' },
    { title: 'Atención proporcional', text: 'Diálogo voluntario ante desacuerdos; protección y acompañamiento ante hostigamiento; orientación urgente ante riesgo inmediato.' },
    { title: 'Canalización y acuerdos', text: 'Las inconformidades se canalizarían al área competente, con responsable y fecha de respuesta. El apoyo continúa aunque se desconozca a quien agrede.' },
    { title: 'Revisión a los 7 y 14 días', text: 'Se propone revisar acuerdos, continuidad del daño y posibles represalias. La atención presencial tendría el mismo seguimiento.' }
  ],
  principles: [
    { title: 'Dignidad', text: 'Escuchar sin culpabilizar ni exhibir. Cuidar el nombre, la imagen y la reputación, sin privilegios por cargo.' },
    { title: 'Consentimiento', text: 'Explicar usos de información y límites de confidencialidad. Retirarse del diálogo no significa perder el acompañamiento.' },
    { title: 'Memoria', text: 'Recuperar aprendizajes y compromisos sin nombres ni detalles identificables para evitar la repetición, no para estigmatizar.' },
    { title: 'Justicia', text: 'Distinguir crítica y agresión. Contemplar una instancia alternativa si el reporte involucra al equipo; quien tenga conflicto de interés se aparta.' },
    { title: 'Cuidado', text: 'Evitar relatos repetidos, acompañar el bienestar y restringir el acceso a la información. El apoyo especializado se ofrece tras confirmar su disponibilidad.' }
  ],
  resources: [
    { type: 'Guía prevista', title: 'Expresar desacuerdos sin agredir', description: 'Herramientas para comunicar necesidades, escuchar y construir acuerdos.' },
    { type: 'Material previsto', title: 'Apoyar sin difundir la humillación', description: 'Recursos para reflexionar sobre publicaciones, reacciones y reenvíos.' },
    { type: 'Actividad prevista', title: 'Acuerdos de convivencia digital', description: 'Ejercicios para construir compromisos y revisar su cumplimiento.' }
  ],
  courseConnections: [
    { title: 'Identidad y cuerpo digital', text: 'La imagen y el nombre forman parte de nuestra presencia ante otras personas. El proyecto propone cuidar el consentimiento y evitar volver a difundir material ofensivo.' },
    { title: 'Cyborg y posthumanismo', text: 'Cuerpos, afectos y dispositivos intervienen en la convivencia. La solicitud digital se conecta con personas que escuchan y con prácticas presenciales de cooperación.' },
    { title: 'Ciberviolencia, memoria y ética tecnológica', text: 'Se revisan los roles de quien publica, reenvía y observa. El sistema no asigna culpabilidad ni decide sanciones: esas valoraciones corresponden a personas e instancias competentes.' }
  ],
  foundations: [
    { title: 'Escuchar perspectivas situadas', author: 'Donna Haraway · 1995', text: 'El proyecto retoma la escucha de experiencias parciales y de las diferencias de poder. Una captura o una sola versión no explican por sí mismas una situación completa.' },
    { title: 'Vínculos y cooperación', author: 'Rosi Braidotti · 2015', text: 'La propuesta vincula el acompañamiento individual con la reconstrucción de apoyos, las relaciones y la cooperación en comunidad.' },
    { title: 'Capacidades para afrontar diferencias', author: 'Ortega Saldivar y Rivera López · 2025', text: 'La provención se concreta en desarrollar capacidades y condiciones para reconocer necesidades, afrontar diferencias y revisar acuerdos.' },
    { title: 'Comprender las ciberviolencias', author: 'Donoso-Vázquez · 2018', text: 'El proyecto considera el alcance del anonimato y la participación de quienes amplifican una agresión, para apoyar sin reproducir la humillación.' }
  ],
  references: [
    'Braidotti, R. (2015). Lo posthumano (J. C. Gentile Vitale, Trad.). Gedisa. (Trabajo original publicado en 2013).',
    'Donoso-Vázquez, T. (2018). Las ciberviolencias de género, nuevas manifestaciones de la violencia machista. En T. Donoso-Vázquez y Á. Rebollo-Catalán (Coords.), Violencias de género en entornos virtuales (pp. 15–27). Octaedro.',
    'Haraway, D. J. (1995). Conocimientos situados: La cuestión científica en el feminismo y el privilegio de la perspectiva parcial. En Ciencia, cyborgs y mujeres: La reinvención de la naturaleza (pp. 313–346). Cátedra, Universitat de València e Instituto de la Mujer.',
    'Ortega Saldivar, R., y Rivera López, M. (2025). ¿Prevención o provención de conflictos para crear cultura de paz? Eirene Estudios de Paz y Conflictos, 8(15), 59–82. DOI: 10.62155/eirene.v8i15.326.',
    'Universidad Mexiquense del Bicentenario. (2026). Programa anual de trabajo 2026 de la Unidad de Estudios Superiores Tepotzotlán.'
  ],
  faqs: [
    { question: '¿Qué significa provención?', answer: 'Desarrollar capacidades y condiciones para afrontar diferencias de forma constructiva: reconocer necesidades, practicar la escucha, comunicar desacuerdos y revisar acuerdos. La propuesta se apoya en Ortega Saldivar y Rivera López (2025).' },
    { question: '¿A quién está dirigido COLIBRÍ EN UNIDAD?', answer: 'A estudiantes, docentes y personal administrativo de la UES Tepotzotlán. Se contempla una fase inicial con un grupo voluntario de cada programa educativo y un equipo de trabajo, considerando discapacidad, género y jerarquías.' },
    { question: '¿Puedo solicitar apoyo o consultar un folio aquí?', answer: 'Todavía no. Esta versión permite conocer el proyecto. La recepción privada, los folios y el seguimiento requieren validar alojamiento, permisos, responsables y canales institucionales con la UMB.' },
    { question: '¿El diálogo es obligatorio?', answer: 'No. La propuesta establece el diálogo voluntario y el consentimiento informado. Una persona podría retirarse del diálogo sin perder el acompañamiento.' },
    { question: '¿Qué pasa si no se conoce a quien agrede?', answer: 'La propuesta contempla continuar el apoyo aunque no se conozca la identidad de quien agrede. En páginas externas se acompañaría el reporte, sin garantizar que la publicación sea retirada.' },
    { question: '¿Habrá acusaciones públicas o sanciones automáticas?', answer: 'No hay muro público de acusaciones. La propuesta distingue críticas y agresiones; el micrositio no asigna culpabilidad ni decide sanciones.' },
    { question: '¿Quién tendría acceso a la información?', answer: 'Se proponen permisos individuales, conservación definida y acceso revocable. El grupo consultivo revisaría acuerdos y resultados generales sin acceder a expedientes. Los usos de datos y los límites de confidencialidad deberán explicarse antes de recibir solicitudes.' },
    { question: '¿Cómo se revisará el aporte del proyecto?', answer: 'Se consideran la participación, la atención oportuna, el cumplimiento de compromisos y la confianza para expresar diferencias. Son criterios de evaluación previstos, no resultados ya obtenidos.' }
  ]
};
