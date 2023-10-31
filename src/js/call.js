const characterList = document.getElementById('character-list');

async function getCharacters() {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(apiUrl);
    const data = await response.json();

    const characters = data.results;

    characterList.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos personajes

    if (characters.length === 0) {
        const characterError = document.createElement('article');
        haracterError.innerHTML = `<p>No se han encontrado similitudes.</p>`;
        characterList.appendChild(characterError);
    } else {
        characters.forEach(character => {
        const characterCard = document.createElement('article');
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
    }
    //module.exports = { getCharacters };
    getCharacters();