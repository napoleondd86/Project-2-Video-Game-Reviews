const gameId = 19487;
const header = document.getElementById("gameHeader");
const description = document.getElementById("description");
const title = document.createElement("h1");
const subtitle = document.createElement("h3");
const descrip = document.createElement("p");
const tags = document.getElementById("tags");

var gamePage = (id) => fetch(`https://api.rawg.io/api/games/${id}?key=bd8ac961089f4fb694db12c2ad50dfcb`)
  .then(function (response) {
    return response.json();
  
  })
  .then(function (data){
    console.log(data)
    var platformsArray = [];
    data.platforms.forEach((platform) => {
      platformsArray.push(platform.platform.name);
    });
    var platString = platformsArray.join(", ");
    title.textContent = data.name;
    subtitle.textContent = `Released on ${data.released} for ${platString}`;
    // header.style.backgroundImage = `url(${data.background_image})`;
    header.appendChild(title);
    header.appendChild(subtitle);
    descrip.textContent = data.description_raw;
    description.appendChild(descrip);
  })

gamePage(gameId);