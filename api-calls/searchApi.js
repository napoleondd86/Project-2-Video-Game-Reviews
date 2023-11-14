// const body = document.getElementById("results");
// var search = "grand theft auto";
// var searchSlug = search.replaceAll(" ", "-");
async function searchApi(query) {
  const resultsArray = [];
  const response = await fetch(`https://api.rawg.io/api/games?key=bd8ac961089f4fb694db12c2ad50dfcb&search=${query}`)
  const data = await response.json()

    var results = data.results;
    results.forEach((game) => {
      // console.log(game);
      var platformsArray = [];
      game.platforms.forEach((platform) => {
        platformsArray.push(platform.platform.name);
      });
      const results = {
        "title": game.name,
        "released": game.released,
        "platforms": platformsArray,
        "id": game.id
      };
      resultsArray.push(results);
      // const platString = platformsArray.join(" / ");
      // console.log(results)
      // const gameName = document.createElement("h1");
      // const gameData = document.createElement("p");
      // gameName.textContent = game.name;
      // gameData.textContent = `${game.released} (${platString})`;
      // body.appendChild(gameName);
      // body.appendChild(gameData);
    }
      )


return resultsArray;
}


const gameId = 19487;

async function gameApi(query) {
  const response = await fetch(`https://api.rawg.io/api/games/${query}?key=bd8ac961089f4fb694db12c2ad50dfcb`)
const data = await response.json();
  console.log(data)
  var platformsArray = [];
  data.platforms.forEach((platform) => {
    platformsArray.push(platform.platform.name);
  });
  var platString = platformsArray.join(", ");
  data.platString = platString;

return data

}

module.exports = { searchApi, gameApi };