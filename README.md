# Memory Game

### Descripción

Un juego de memoria interactivo donde los jugadores deben emparejar cartas con imágenes de animales. El juego se adapta a diferentes tamaños de pantalla para garantizar una buena experiencia tanto en dispositivos móviles como en pantallas de escritorio.


### Requisitos

- React: Usado para construir la aplicación.
- Next.js: Utilizado para la construcción y el renderizado del lado del servidor.
- CSS: Estilos personalizados para la cuadrícula y las cartas del juego.


### Funcionalidad

- El jugador ingresa su nombre, que se guarda en localStorage.
- El tablero muestra cartas con imágenes de animales que deben ser emparejadas.
- Cada vez que el jugador voltea dos cartas, el juego verifica si son iguales. Si lo son, se marcan como emparejadas. Si no, se ocultan nuevamente.
- El jugador ve estadísticas en tiempo real sobre el número de turnos y errores cometidos.
- El juego incluye un mensaje de victoria cuando todas las cartas han sido emparejadas.

### Estilos Responsivos

- El diseño del juego se adapta a dispositivos móviles utilizando media queries.
- El tamaño de las cartas y la disposición de la cuadrícula se ajustan dinámicamente en función del tamaño de la pantalla.

### Cómo Jugar

- Ingrese su nombre cuando se le solicite.
- El objetivo es emparejar las cartas con las mismas imágenes.
- Para voltear una carta, simplemente haga clic sobre ella.
- El juego registra el número de turnos y errores cometidos.
- Cuando todas las cartas se emparejan correctamente, verá un mensaje de victoria.

### API

El juego obtiene imágenes de una API externa para mostrar las cartas. Los datos se obtienen de la siguiente URL:

```bash
https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
