# Lista de personajes de Rick y Morty

Este repositorio es mi prueba para participar en la Hackathon del "Jump2Digital" que se realiza este noviembre de 2023.
El proyecto está en inglés, sus clases y commits para facilitar la comunicación técnica ya que La mayoría de la documentación técnica, tutoriales y recursos educativos están disponibles en inglés. Al estar en inglés, es más fácil para otros desarrolladores entender y trabajar con mi proyecto.
Éste no usa ningún tipo de biblioteca (excepto Jest, para hacer tests)ya que es lo suficientemente simple como para no requerir el uso de bibliotecas externas. Una solución hecha a medida puede ser más directa y adecuada para el caso. Tambien, para reducir las dependencias externas del proyecto. Esto simplifica la gestión de versiones y la distribución del código.
Este proyecto proporciona una aplicación web sencilla que permite a los usuarios buscar y filtrar personajes del popular programa de televisión "Rick and Morty". Recupera información de personajes de la [API de Rick and Morty] (https://rickandmortyapi.com/api/character) y la muestra de una manera fácil de usar.

## Estructura del proyecto

### `index.html`

El archivo HTML principal que sirve como punto de entrada de la aplicación. Contiene la estructura de la página web, incluido el encabezado, los filtros de caracteres y la lista de caracteres.

### `call.js`

Este archivo JavaScript se encarga de obtener datos de la API de Rick and Morty y actualizar dinámicamente la lista de personajes en función de los filtros seleccionados por el usuario (especie, género y nombre). También incluye un detector de eventos para manejar los envíos de formularios.

### `characterCard.js`

Este archivo JavaScript recupera datos de personajes de la API y crea tarjetas de personajes individuales con su imagen, nombre, estado, especie y género.

### `style.css`

El archivo CSS que proporciona estilo a la página web, garantizando una experiencia visualmente atractiva y fácil de usar. Para dar estilo a las cards y sus imagenes he usado https://9elements.github.io/fancy-border-radius/

### `package.json`

El archivo de configuración del proyecto que incluye dependencias y scripts. En este caso, especifica las dependencias de desarrollo del proyecto, incluido Jest para pruebas.

### `call.test.js`

Este archivo contiene casos de prueba de Jest para garantizar que la función `getCharacters` funcione correctamente. Prueba si la función obtiene datos de la API y actualiza la lista de caracteres en consecuencia.

## Cómo ejecutar el proyecto

1. Clona el repositorio:

```
git clone https://github.com/AkagamiNoLorea/Rick-MortyCharacters.git
```

2. Abra `index.html` en su navegador web.

## Cómo probar el proyecto

1. Instale las dependencias del proyecto:

```
npm install --save-dev jest
npm install --save-dev jest-environment-jsdom
```

2. Ejecute las pruebas:

```
npm test
```

Esto ejecutará las pruebas de Jest definidas en `call.test.js` para verificar la funcionalidad de la función `getCharacters`.

---

No dude en personalizar y ampliar este proyecto para satisfacer sus necesidades específicas.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Rick and Morty Character List

This repository is my test to participate in the "Jump2Digital" Hackathon that takes place this November 2023.
The project is in English, its classes and commits to make technical communication easy since most of the technical documentation, tutorials and educational resources are available in English. Being in English, it is easier for other developers to understand and work with my project.
This one does not use any type of library (except Jest, for testing) since it is simple enough not to require the use of external libraries. A tailored solution may be more direct and appropriate for the case. Also, to reduce the external dependencies of the project. This simplifies version management and code distribution.
This project provides a simple web application that allows users to browse and filter characters from the popular TV show "Rick and Morty". It retrieves character information from the [Rick and Morty API](https://rickandmortyapi.com/api/character) and displays it in a user-friendly manner.

## Project Structure

### `index.html`

The main HTML file that serves as the entry point of the application. It contains the structure of the web page, including the header, character filters, and the character list.

### `call.js`

This JavaScript file handles fetching data from the Rick and Morty API and dynamically updating the character list based on user-selected filters (species, gender, and name). It also includes an event listener to handle form submissions.

### `CharacterCard.js`

This JavaScript file retrieves character data from the API and creates individual character cards with their image, name, status, species, and gender.

### `style.css`

The CSS file that provides styling to the web page, ensuring a visually appealing and easy-to-use experience. To style the cards and their images I've used https://9elements.github.io/fancy-border-radius/

### `package.json`

The project's configuration file that includes dependencies and scripts. In this case, it specifies the project's dev dependencies, including Jest for testing.

### `call.test.js`

This file contains Jest test cases to ensure that the `getCharacters` function works correctly. It tests if the function fetches data from the API and updates the character list accordingly.

## How to Run the Project

1. Clone the repository:

```
git clone https://github.com/AkagamiNoLorea/Rick-MortyCharacters.git
```

2. Open `index.html` in your web browser.

## How to Test the Project

1. Install the project's dependencies:

```
npm install --save-dev jest
npm install --save-dev jest-environment-jsdom
```

2. Run the tests:

```
npm test
```

This will execute the Jest tests defined in `call.test.js` to verify the functionality of the `getCharacters` function.

---

Feel free to customize and extend this project to meet your specific requirements. Happy coding!
