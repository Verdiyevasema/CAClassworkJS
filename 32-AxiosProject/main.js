let container = document.querySelector(".container");
let productsHeader = document.querySelector(".products-header");
let button = document.querySelector(".btn");
let productsDiv = document.querySelector(".products");
let btnElectronics = document.querySelector(".btnElectronics");
let btnJewelery = document.querySelector(".btnJewelery");
let btnMenClothing = document.querySelector(".btnMenClothing");
let btnWomenClothing = document.querySelector(".btnWomenClothing");

const BASE_URL = "https://fakestoreapi.com/products";

async function getAllData(category) {
  try {
    const response = await fetch(`${BASE_URL}/${category}`);
    const data = await response.json();
    console.log(data);
    drawCards(data);
  } catch (error) {
    console.log(error);
  }
}
getAllData("");

function drawCards(array) {
    productsDiv.innerHTML =""

  array.forEach((el) => {
    productsDiv.innerHTML += `
        <div class="product">
            <div class="imgDiv">
              <a href="./details.html?id=${el.id}">
                <img src="${el.image}" alt="">
              </a>
            </div>
            <div class="details">
                <p>${el.description.slice(0, 50)}...</p>
                <p>"${el.price}"</p>
            </div>
        </div>
        `;
  });
}


btnElectronics.addEventListener("click", function () {
  getAllData("category/electronics");
});
btnJewelery.addEventListener("click", function () {
    getAllData("category/jewelery");
});
btnMenClothing.addEventListener("click", function () {
    getAllData("category/men's clothing");
});
btnWomenClothing.addEventListener("click", function () {
    getAllData("category/women's clothing");
});
