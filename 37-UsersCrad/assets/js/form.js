let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let btn = document.querySelector(".btn");
const BASE_URL = "http://localhost:8000";
const usersData = JSON.parse(localStorage.getItem("users")) ?? [];

const id = new URLSearchParams(window.location.search).get("id");
console.log("id",id);


form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(allInputs[3].value);
  let usersObj = {
    name: allInputs[0].value,
    surname: allInputs[1].value,
    email: allInputs[2].value,
    userphoto: `./assets/img/${allInputs[3].value.split("\\")[2]}`,
  };
  
  if (!id) {
    axios.post(`${BASE_URL}/users`, usersObj);
  } else {
    axios.patch(`${BASE_URL}/users/${id}`,usersObj);
  }
  usersData.push(usersObj);
  localStorage.setItem("users", JSON.stringify(usersData));

  if (id) {
    axios(`${BASE_URL}/${id}`).then((resp) => {
      inputs[0].value = resp.data.name;
      inputs[1].value = resp.data.surname;
      inputs[2].value = resp.data.email;
    });
  }
});


// onclick = "userEdit(${element.id},this)";

// async function userEdit(id, btn) {
//   await axios.PATCH(`${BASE_URL}/users/${id}`, obj);
//   window.location = "./form.html";
// }
