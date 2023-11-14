const search = document.getElementById("searchBar");
const searchTerm = document.getElementById("query");

const searchFunction = () => {
  const query = searchTerm.value;
  console.log("submitted");
  console.log(query);
  const querySlug = query.replaceAll(" ", "-");
  console.log(querySlug);
  const searching = fetch(`/search/${querySlug}`)
}

search.addEventListener("submit", (event) => {
  event.preventDefault();
  searchFunction()
});
