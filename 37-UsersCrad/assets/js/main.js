let tBody = document.querySelector("tBody");

const BASE_URL = "http://localhost:8000";

const favUsers = JSON.parse(localStorage.getItem("favs")) ?? [];

async function getData(endpoint) {
  const resp = await axios(`${BASE_URL}/${endpoint}`);
  console.log(resp.data);
  drawTable(resp.data);
}

getData("users");

function drawTable(data) {
  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td><img src="${element.userphoto}" alt=""></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td>
        <th class = "tableBtn">
          <a class="edit" href="./form.html?id=${element.id}">Edit</a>
          <button class="deleteBtn" onclick="userDelete(${element.id}, this)">Delete</button>
          <button class="addBtn" onclick="addFavorits(${element.id})">Add Fav</button>
        </th>
    </tr>
    `; 
  });
}

async function userDelete(id, btn) {
  if (confirm("Are you sure you want to delete?")) {
    btn.closest("th");
  }
  await axios.delete(`${BASE_URL}/users/${id}`);
}

async function addFavorits(id) {
  let favorits = await axios(`${BASE_URL}/users/${id}`);
  console.log(favorits.data);
  favUsers.push(favorits.data);
  localStorage.setItem("favs", JSON.stringify(favUsers));
}

