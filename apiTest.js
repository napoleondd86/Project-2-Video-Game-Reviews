const body = document.getElementById("results");
var search = "grand theft auto";
var searchSlug = search.replaceAll(" ", "-");


var searchResults = async () => fetch(`https://api.rawg.io/api/games?key=bd8ac961089f4fb694db12c2ad50dfcb&search=${searchSlug}`)
.then(function (response) {
  return response.json();
  
})
.then(await function (data){
  console.log(data);
  var results = data.results;
  results.forEach((game) => {
    // console.log(game);
    var resultsArray = [];
    var platformsArray = [];
    game.platforms.forEach((platform) => {
      platformsArray.push(platform.platform.name);
    });
    const results = {
      "title": game.name,
      "released": game.released,
      "platforms": platformsArray
    };
    const platString = platformsArray.join("/");
    console.log(results)
    const gameName = document.createElement("h1");
    const gameData = document.createElement("p");
    gameName.textContent = game.name;
    gameData.textContent = `${game.released} (${platString})`;
    body.appendChild(gameName);
    body.appendChild(gameData);
  }
    )
  })


searchResults();