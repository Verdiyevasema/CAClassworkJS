const productDiv = document.querySelector(".product");
const id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "https://fakestoreapi.com/products";

async function getAllData() {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    console.log(data);
    drawCards(data);
  } catch (error) {
    console.log(error);
  }
}

function drawCards(obj) {
  productDiv.innerHTML = `
          <div class="product">
              <div class="imgDiv">
                <a href="./details.html?id=${obj.id}">
                  <img src="${obj.image}" alt="">
                </a>
              </div>
              <div class="details">
                  <p>${obj.description.slice(0, 50)}...</p>
                  <p>"${obj.price}"</p>
              </div>
          </div>
          `;
}

getAllData();
