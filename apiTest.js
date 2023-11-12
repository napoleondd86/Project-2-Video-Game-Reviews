const body = document.getElementById("results");

var searchResults = async () => fetch("https://api.rawg.io/api/games?key=bd8ac961089f4fb694db12c2ad50dfcb&search=harry-potter")
.then(function (response) {
  return response.json();
  
})
.then(await function (data){
  console.log(data);
  var results = data.results;
  results.forEach((game) => {
    // console.log(game);
    var resultsArray = [];
    // var platforms = [];
    // game.platforms.forEach((platform) => {
    //   platforms.push(platform.name);
    //   console.log(platform.slug)
    // });
    resultsArray.push({
      "title": game.name,
      "released": game.released,
      // "platforms": platforms
    });
    console.log(resultsArray)
    const gameName = document.createElement("h1");
    const gameDate = document.createElement("p");
    gameName.textContent = game.name;
    gameDate.textContent = game.released;
    body.appendChild(gameName);
    body.appendChild(gameDate);
  }
    )
  })


searchResults();