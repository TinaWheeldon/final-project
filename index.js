//http://img.omdbapi.com/?apikey=9aa666f1&
//http://www.omdbapi.com/?apikey=9aa666f1&
//"http://www.omdbapi.com/?s=fast&apikey=9aa666f1"

async function fetchData() {
    const title = document.getElementById("title")
    const response = await fetch("http://www.omdbapi.com/?s=fast&apikey=9aa666f1")
    const data = await response.json()
    console.log(data)
}

fetchData()

//const backgroundImg = document.querySelector(".background__img")
//backgroundImg.scr = "./final assets/theater curtains.html"

const movieListEl = document.querySelector(".movie-list")

async function main() {
const movie = await fetch("http://www.omdbapi.com/?s=fast&apikey=9aa666f1")
const movieData = await movie.json()
movieListEl.innerHTML = movieData.map((movie) => movieHTML(movie)).join("")
}

main()

function movieHTML(movie) {
        return `<div class="movie">
            <div class="movie__container">
                <div class="movie-list">
                 <h1>Movie</h1>
                <p>title</p>
                <p>year</p>
                <p>poster</p>    
                </div>
            </div>
        </div>`
}