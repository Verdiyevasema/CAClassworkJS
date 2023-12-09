let header = document.querySelector("header");
let container = document.querySelector(".container");
let cards = document.querySelector(".cards");
let allBtn = document.querySelectorAll(".btn");
let search = document.querySelector("#search");

const BASE_URL = `http://localhost:8080`;

async function getData(endpoint) {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  drawCards(response.data);
}

getData("blogs");

function drawCards(dataArray) {
  console.log(dataArray);
  dataArray.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
            <div class="card" style="width: 18rem">
            <div class="card-body">
                <h4 class="card-title">${element.tittle}</h4>
                <h6 class="voluptatum"> ${element.body}
               ... <a href="#" class="read-more">Read More</a>
                </h6>
                <p class="card-text">${element.author}</p>
                <button class="btn btn-danger" onclick="deletecard(${element.id}, this)">Delete</button>
                <a href="#" class="btn btn-warning">Edit</a>
            </div>
            </div>
        </div>
      `;
  });
}

// search.addEventListener("input", function (event) {
//   let filtered = blogs.filter((item) =>
//     item.tittle
//       .toLocaleLowerCase()
//       .includes(event.target.value.toLocaleLowerCase())
//   );
//   drawCards(filtered);
// });

search.addEventListener("input", async function (event) {
  let response = await axios(`${BASE_URL}/blogs`);
  let filtered = response.data.filter((item) =>
    item.tittle
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  drawCards(filtered);
});

async function deletecard(id, btn) {
    console.log(id,btn);
    if (confirm("Are you sure you want to delete it?")) {
      btn.closest(".card").remove();
  await axios.delete(`${BASE_URL}/blogs/${id}`);
    }
}
