//http://img.omdbapi.com/?apikey=9aa666f1&
//http://www.omdbapi.com/?apikey=9aa666f1&
//"http://www.omdbapi.com/?s=fast&apikey=9aa666f1"

let input = document.querySelector('input');

input.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
 console.log(e.target.value)
}
})

const movieListEl = document.querySelector(".movie-list")

 async function main() {
 const title = document.getElementById("title")
 const response = await fetch("http://www.omdbapi.com/?s=fast&apikey=9aa666f1")
  const data = await response.json()
   console.log(data)
}

main();


async function fetchData() {
const movie = await fetch("http://www.omdbapi.com/?s=fast&apikey=9aa666f1")
const movieData = await movie.json()
movieListEl.innerHTML = movieData.Search.slice(0, 6).map((movie) => movieHTML(movie)).join("")
console.log(movieData)  
}

fetchData();

function movieHTML(movie) {
 return `<div class="movie-list">
 <div class="movie">
<img src="${movie.Poster}" alt=""/>
<p>${movie.Title}</p>
 <p>${movie.Year}</p>
  </div>
 </div>`
}




