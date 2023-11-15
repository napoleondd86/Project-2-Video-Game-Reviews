const search = document.getElementById("searchBar");
const searchTerm = document.getElementById("query");
const playedSubmit = document.getElementById("playedSubmit")
const optionsForm = document.getElementById("review-options-form")
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


// FORM PLAY FEEDBACK 
const playedData = document.querySelector(".played-form");
const playedCheckbox = document.querySelector("#played");
const wantToPlayCheckbox = document.querySelector("#want-play");

const playedFeedback = async (event) => {
  event.preventDefault();
  const played = playedCheckbox.checked;
  const gameId = window.location.href.split('game/')[1].split("?")[0]
  let feedbackData = {};

  if (played) {
    const rating = document.querySelector("#quantity").value;
    const hoursArray = Array.from(document.querySelectorAll("[name='hours']"));
    const hours = hoursArray.find(hour => hour.checked).value;
    const ageArr = Array.from(document.querySelectorAll("[name='age']"));
    const age = ageArr.find(age => age.checked).value;
    const review = document.querySelector("[name='review']").value;
    feedbackData = { rating, hours, age, review }
  }

  await fetch('/api/games', {
    method: "POST",
    body: JSON.stringify({id: gameId}),
    headers: { 'Content-Type': 'application/json' },
  })
  
 
  const want_play = wantToPlayCheckbox.checked;

 
  if (!played && !want_play) return
  const response = await fetch('/api/feedbacks/played', {
    method: 'POST',
    body: JSON.stringify({played, game_id: gameId, ...feedbackData}),
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  console.log(result);
};

const togglePlayed = (event) => {
  if (playedCheckbox.checked) {
    optionsForm.setAttribute("style", "display: block")
  } else {
    optionsForm.setAttribute("style", "display: none")
  }
}
// user_id: userId
  // if (response.ok) {
  //   alert("Thanks for your feedback!")
  //   document.location.replace('/game/');
  // } else {
  //   alert(result);//// RESULT.PAYLOAD -- ALSO WOULDNT BE AN ALERT
  // }
playedSubmit.addEventListener("click", playedFeedback);
playedData.addEventListener("change", togglePlayed)
// Rating Initialization
// $(document).ready(function() {
//   $('#rateMe3').mdbRate();
// });