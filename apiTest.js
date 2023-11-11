const body = document.getElementsByTagName("body");
let gameName = document.createElement("h1");
let gameDate = document.createElement("p");

var searchResults = () => fetch("https://api.rawg.io/api/games?key=bd8ac961089f4fb694db12c2ad50dfcb&search=harry-potter")
  .then(function (response) {
    return response.json();

  })
  .then(function (data){
    console.log(data);
    var results = data.results;
    results.forEach((game) => {
      // console.log(game);
      var resultsArray = [];
      resultsArray.push({
      "title": game.name,
      "released": game.released
    });
    console.log(resultsArray)
    // gameName.appendChild(game.name);
    // gameDate.appendChild(game.released);
    // body.appendChild(gameName);
    // body.appendChild(gameDate);
  }
    )
  })


searchResults();