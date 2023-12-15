let header = document.querySelector("header");
let container = document.querySelector(".container");
let headerText = document.querySelector(".worldText");
let inputSelect = document.querySelector(".inputSelect");
let cardsDiv = document.querySelector(".cards");
let darkMode = document.querySelector(".darkMode");
let faMoon = document.querySelector(".fa-moon");

const BASE_URL = `https://restcountries.com/v2`;

let isDark = JSON.parse(localStorage.getItem("darkMode")) ?? false;

if (isDark) {
  document.body.classList.add("dark-mode");
}

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", true)
  } else {
    localStorage.setItem("darkMode", false)
  }
});

async function getData(mentor) {
  const response = await axios(`${BASE_URL}/${mentor}`);
  drawCards(response.data);
}

getData("all");

function drawCards(data) {
  cardsDiv.innerHTML = "";
  console.log(data);
  data.forEach((element) => {
    cardsDiv.innerHTML += `
       <div class="card">
        <a href="./details.html?name=${element.name}"><img class="card-img-top" src="${element.flag}" alt="Card image cap"></a>
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p>Population: ${element.population}</p>
          <p>Region: ${element.region}</p>
          <p>Capital: ${element.capital}</p>
        </div>
      </div>`;
  });
}

search.addEventListener("input", async function (event) {
  let resp = await axios(`${BASE_URL}/name/${event.target.value}`);
  let filtered = resp.data.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  drawCards(filtered);
});

select.addEventListener("change", async function (event) {
  console.log(event.target.value);
  let country = event.target.value;
  let resp = await axios(`${BASE_URL}/region/${country}`);
  drawCards(resp.data);
});
