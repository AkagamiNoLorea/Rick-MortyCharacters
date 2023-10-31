const characterList = document.getElementById('character-list');

async function getCharacters() {
    try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    const characters = data.results;

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
    } catch (error) {
    console.log('Error:', error);
    }
}
getCharacters();