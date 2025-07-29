//http://img.omdbapi.com/?apikey=9aa666f1&
//http://www.omdbapi.com/?apikey=9aa666f1&
//"http://www.omdbapi.com/?s=fast&apikey=9aa666f1"

async function main() {
const movie = await fetch("http://www.omdbapi.com/?s=fast&apikey=9aa666f1")
const movieData = await movie.json()
movieListEl.innerHTML = movieData.Search.slice(0, 6).map((movie) => movieHTML(movie)).join("")
console.log(movieData)  
}

main();

function movieHTML(movie) {
 return `
 <div class="movie">
<img src="${movie.Poster}" alt=""/>
<p>${movie.Title}</p>
 <p>${movie.Year}</p>
  </div>`
}

const searchInput = document.querySelector('.searchbar');
const searchButton = document.querySelector('.search__button');
const movieListEl = document.querySelector('.movie-list');
const loadingOverlay = document.getElementById('loadingOverlay');
const content = document.getElementById('content');


async function fetchData(query = '') {

  loadingOverlay.style.display = 'flex';
  content.style.display = 'none';
  
  const apiKey = '9aa666f1';
  const apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;
  
const timeoutId = setTimeout(() => {
    loadingOverlay.style.display = 'none'
    content.style.display = 'block'
    movieListEl.innerHTML = '<p>No movies found.</p>'
}, 6000)

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.Response === 'True' && data.Search) {
      displayMovies(data.Search.slice(0, 6));
      clearTimeout(timeoutId)
    } 
    else {
      movieListEl.innerHTML = '<p>No movies found.</p>';
      clearTimeout(timeoutId)
    }
  } 
  catch (error) {
    console.error('Error fetching data:', error);
    movieListEl.innerHTML = '<p>Failed to fetch data. Please try again.</p>';
    clearTimeout(timeoutId)
  } 
  finally {
  
    loadingOverlay.style.display = 'none';
    content.style.display = 'block flex';
  }
}

function displayMovies(movies) {
  const movieHTML = movies.map(movie => `
    <div class="movie">
      <img src="${movie.Poster}" alt="" class="movie-poster">
      <p class="movie-title">${movie.Title}</p>
      <p class="movie-year">${movie.Year}</p>
    </div>
  `).join('');

  movieListEl.innerHTML = movieHTML;
}


fetchData(); 

searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    fetchData(searchInput.value);
  }
});


searchButton.addEventListener('click', function() {
  fetchData(searchInput.value);
});
