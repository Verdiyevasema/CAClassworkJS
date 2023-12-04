console.log(fetch("https://api.escuelajs.co/api/v1"));

fetch("https://api.escuelajs.co/api/v1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

getAllData("products");

function deleteDataByID(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
}

deleteDataByID("products", 2);