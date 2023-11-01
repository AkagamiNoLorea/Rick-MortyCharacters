const characterList = document.getElementById("character-list");
const searchForm = document.getElementById("search-form");

// Función para obtener los personajes de la API
async function getCharacters(species = "", gender = "", name = "") {
  try {
    let apiUrl = "https://rickandmortyapi.com/api/character";

    const queryParams = [];

    if (species) {
      queryParams.push(`species=${encodeURIComponent(species)}`);
    }

    if (gender) {
      queryParams.push(`gender=${encodeURIComponent(gender)}`);
    }
    if (name) {
      queryParams.push(`name=${encodeURIComponent(name)}`);
    }

    if (queryParams.length > 0) {
      apiUrl += `?${queryParams.join("&")}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    const characters = data.results;

    characterList.innerHTML = ""; 

    if (characters.length === 0) {
      const characterError = document.createElement("article");
      characterError.innerHTML = `<p>No se encontraron similitudes.</p>`;
      characterList.appendChild(characterError);
    } else {
      characters.forEach((character) => {
        const characterCard = document.createElement("article");
        characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div class="descripcion">
          <h2>${character.name}</h2>
          <p>Status: ${character.status}</p>
          <p>Species: ${character.species}</p>
          <p>Gender: ${character.gender}</p>
        </div>
        `;
        characterList.appendChild(characterCard);
      });
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

// Manejar el envío del formulario de búsqueda
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const species = document.getElementById("species-input").value;
  const gender = document.getElementById("gender-input").value;
  const name = document.getElementById("name-input").value;
  getCharacters(species, gender, name);
});
getCharacters("", "", "");
//module.exports = { getCharacters };
