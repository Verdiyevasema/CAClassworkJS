let cardsDiv = document.querySelector(".cardsDiv");

const countryName = new URLSearchParams(window.location.search).get("name");

const BASE_URL = `https://restcountries.com/v2`;

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  drawCards(response.data);
  console.log(endPoint);
}

getData(`name/${countryName}`);

function drawCards(data) {
  console.log(data);
  data.forEach((element) => {
    cardsDiv.innerHTML += `
        <div class="d-flex">
            <img width="250" class="" src="${element.flag}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p>Population: ${element.population}</p>
                <p>Region: ${element.region}</p>
                <p>Capital: ${element.capital}</p>
            </div>
        </div>`;
  });
}
