let tBody = document.querySelector("tBody");
const search = document.querySelector("#search");

const BASE_URL = "http://universities.hipolabs.com";

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  drawTable(response.data);
}

getData("search?country=Azerbaijan");

function drawTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
        <td>${element.name}</td>
        <td>${element.country}</td>
        <td>${element.domains}</td>
        <td><a href="${element.web_pages}">${element.web_pages}</a></td>
    </tr>
    `;
  });
}

search.addEventListener("input", function (e) {
  console.log(e.target.value);
  getData(`search?country=Azerbaijan&name=${e.target.value}`);
});

// async function getData(endPoint) {
//   loading.classList.add("open");
//   let response = await axios('${BASE_URL}/${endpoint}');
//   loading.classList.remove("open");
//   drawTable(response.data)
// }
