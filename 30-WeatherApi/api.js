let container = document.querySelector(".container");
let inpBtn = document.querySelector(".btninp");
let = document.querySelector(".end");

container.style.background = "linear-gradient(#e66465, #9198e5)";
container.style.height = "100vh";

function getAllData(curCity) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      img.src = data?.message;
    })
    .catch((error) => console.log(error));
}

img.src =
  "https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=$";

getAllData("Baku");
