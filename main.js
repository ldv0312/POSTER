//TODO
const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
const cont = document.querySelector(".container");
fetch(API)
  .then((data) => data.json())
  .then((x) => {
    console.log(x);
    x.Search.forEach((item) => {
      cont.innerHTML += `<div class = "block"><div class = "block1">
      <img width = '200px' height = '300px' src='${item.Poster}'>
      <h4>${item.Title}</h4><p>${item.Year}</p>
      </div></div>`;
    });
  });
