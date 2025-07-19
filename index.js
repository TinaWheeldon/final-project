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
