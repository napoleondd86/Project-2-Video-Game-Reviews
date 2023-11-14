const search = document.getElementById("searchBar");
const searchTerm = document.getElementById("query");

const searchFunction = () => {
  const query = searchTerm.value;
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


