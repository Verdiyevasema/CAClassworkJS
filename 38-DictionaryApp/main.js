let dictSection = document.querySelector(".dictionary");
let cardDiv = document.querySelector(".card");
let form = document.querySelector("form");
let input = document.querySelector(".search");
let icon = document.querySelector(".icon");
let definitionDiv = document.querySelector(".definition");
let difDiv = document.querySelector(".dif");
let iconText = document.querySelector(".icontext");

const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  drawCard(response.data);
  console.log(response.data);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(input.value);
  console.log(input.value);
});


function drawCard(array) {
  iconText.innerHTML = ""
  array.forEach((element) => {
    console.log(element);
    iconText.innerHTML += `
      <div class="definition">
              <div class="icon">
                  <p>(${element.word})</p>
                  <i class="fa-solid fa-volume-high"> 
                    <audio src="${element?.phonetics[0]?.audio}"></audio>
                  </i>
              </div>
              <div class="dif">
                  <p>${element?.meanings[0]?.definitions[0].definition}</p>
                  <p>${element?.meanings[0]?.definitions[0].example}</p>
              </div>
      </div>`;
  });

}

function playAudio(icon) {
  icon.querySelector("audio").play();
}
