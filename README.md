# COLIBRÍ EN UNIDAD

Micrositio de provención y acompañamiento para transformar los conflictos digitales en la UES Tepotzotlán, Universidad Mexiquense del Bicentenario. Angular 22, TypeScript y Tailwind CSS 4.

## Ejecutar

Node.js compatible con Angular 22 (22.22.3+, 24.15+ o 26+) y npm.

```sh
npm ci
npm start
```

Abrir http://127.0.0.1:4200/. Compilación de producción: `npm run build`. Salida estática: `dist/convivencia/browser`.

## Contenido y estructura

La información se adaptó de la propuesta académica proporcionada por la responsable del proyecto. Las cuatro entradas son:

1. Aprender a convivir: cuatro encuentros de treinta minutos y preguntas de reflexión.
2. Necesito apoyo: ruta propuesta de escucha, atención proporcional, canalización y acuerdos.
3. Aclarar y proponer: información para expresar necesidades e inconformidades institucionales.
4. Mis acuerdos y seguimiento: propuesta de contacto privado con folio y revisión a los siete y catorce días.

Se incluyen propósito, público destinatario, organización, principios éticos, materiales previstos, vínculos con el curso, fundamento teórico, referencias y preguntas frecuentes. La revisión de contenido y los pendientes se encuentran en `docs/revision-contenido.md`.

## Editar

- `src/app/content.ts`: entradas, encuentros, ruta de atención, principios, recursos, fundamento, referencias y preguntas frecuentes.
- `src/app/app.component.html`: estructura y textos de presentación.
- `src/app/app.component.ts`: menú móvil y reflexiones desplegables.
- `src/styles.css`: paleta, tipografía y adaptación a pantallas.
- `public/umb-logo.png`: logotipo extraído del Word suministrado, sin modificaciones.
- `public/colibri.svg`: símbolo vectorial creado para el prototipo; sustituir por la mascota oficial aprobada cuando se proporcione.

La ilustración de portada es original. No se cargan fuentes ni imágenes de terceros por red.

## Alcance de esta versión

Solo frontend. No recibe solicitudes, adjuntos, inconformidades ni datos personales. No genera folios, consulta expedientes, envía mensajes ni almacena acuerdos. Las entradas de apoyo y seguimiento explican los servicios propuestos, sin simular su operación. Las preguntas de reflexión son una adaptación didáctica, no instrumentos institucionales aprobados. Los archivos de recursos aún no se han entregado y se identifican como pendientes.

La propuesta contempla acuse en un día hábil y contacto en tres días hábiles, aclaración confirmada por el usuario. Estos son plazos propuestos, sujetos a validación operativa de la UMB.

Antes de habilitar la atención se requieren alojamiento y permisos autorizados, responsables y suplentes, canales y horarios, instancia alternativa para conflictos de interés, reglas de consentimiento y confidencialidad, conservación y acceso a datos y disponibilidad de apoyos especializados.

## Identidad visual

Guinda `#611b35`, dorado `#a68549` y marfil `#faf8f3` son tonos de propuesta, pendientes de cotejar con el manual institucional vigente. El logotipo UMB procede del documento aportado; su uso final y la mascota deben validarse institucionalmente.

## Repositorio

https://github.com/CH-MIGUEL-AXEL/Conflictos-Digitales

No incluir tokens, credenciales, documentos originales de trabajo ni información de casos en el repositorio. El Word original no forma parte del código publicado.

## Referencias técnicas

- Angular: https://angular.dev/installation
- Tailwind con Angular: https://tailwindcss.com/docs/installation/framework-guides/angular
