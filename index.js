//http://img.omdbapi.com/?apikey=[9aa666f1]&
//"http://www.omdbapi.com/?apikey=[9aa666f1]&"
//
const titleRef = document.querySelector(".title")

async function main() {
    const response = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=9aa666f1")
    const data = await response.json()
    console.log(data)
    titleRef.innerHTML = data.title
}

main ()

const backgroundImg = document.querySelector(".background__img")
backgroundImg.scr = "./final assets/theater curtains.html"
