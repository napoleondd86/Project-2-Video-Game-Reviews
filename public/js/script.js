const search = document.getElementById("searchBar");
const searchTerm = document.getElementById("query");
const playedSubmit = document.getElementById("playedSubmit")
// const logo = document.querySelector("")

const searchFunction = () => {
  let query = searchTerm.value;
  if (!query) {
    query = "-"
  } 
  console.log("submitted");
  console.log(query);
  const querySlug = query.replaceAll(" ", "-");
  console.log(querySlug);
  const url =  `http://localhost:3001/search/${querySlug}`;
  // const searching = fetch(`/search/${querySlug}`, {
  //   method: 'GET',
  //   redirect: 'follow'
  // })
  window.location.href = url;

}

search.addEventListener("submit", (event) => {
  event.preventDefault();
  searchFunction()
});


// FORM FROM FEEDBACK 
const playedData = document.querySelector(".played-form");
const playedCheckbox = playedData.querySelector("#played");
const wantToPlayCheckbox = playedData.querySelector("#want-play");

const playedFeedback = async (event) => {
  event.preventDefault();

  const gameId = window.location.href.split('game/')[1].split("?")[0]
  await fetch('/api/games', {
    method: "POST",
    body: JSON.stringify({id: gameId}),
    headers: { 'Content-Type': 'application/json' },
  })
 
  console.log(gameId)
  const played = playedCheckbox.checked;
  const wantToPlay = wantToPlayCheckbox.checked;
  if (!played && !wantToPlay) return
  const response = await fetch('/api/feedbacks/played', {
    method: 'POST',
    body: JSON.stringify({played, game_id: gameId}),
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  console.log(result);


  // if (response.ok) {
  //   alert("Thanks for your feedback!")
  //   document.location.replace('/game/');
  // } else {
  //   alert(result);//// RESULT.PAYLOAD -- ALSO WOULDNT BE AN ALERT
  // }
};
playedSubmit.addEventListener("click", playedFeedback);

// Rating Initialization
// $(document).ready(function() {
//   $('#rateMe3').mdbRate();
// });