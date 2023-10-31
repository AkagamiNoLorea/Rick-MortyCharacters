document.body.innerHTML = '<div id="character-list"></div>';
const { getCharacters } = require('../js/call');

test("fetches characters data from API", async () => {
  const mockResponse = {
    results: [
      {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://example.com/rick.jpg",
      },
    ],
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );

  await getCharacters();

  expect(global.fetch).toHaveBeenCalledWith(
    "https://rickandmortyapi.com/api/character"
  );

  const characterList = document.getElementById("character-list");
  expect(characterList.children.length).toBe(mockResponse.results.length);
});
