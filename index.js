//http://img.omdbapi.com/?apikey=9aa666f1&
//http://www.omdbapi.com/?apikey=9aa666f1&
//"http://www.omdbapi.com/?s=fast&apikey=9aa666f1"

async function fetchData() {
    const title = document.getElementById("title")
    const response = await fetch("http://www.omdbapi.com/?s=fast&apikey=9aa666f1")
    const data = await response.json()
    console.log(data)
}

fetchData();


const movieListEl = document.querySelector(".movie-list")

async function main() {
const movie = await fetch("http://www.omdbapi.com/?s=fast&apikey=9aa666f1")
const movieData = await movie.json()
movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("")
console.log(movie)
}

main();

function showMovieTitle(title) {
    window.location.href = `${window.location}`
}

function movieHTML(movie) {
        return `<div class="movie-list">
                <h1>Movie</h1>
                <p>${movie.title}</p>
                <p>${movie.year}</p>
                <p>${movie.poster}</p> 
            </div>`
}
