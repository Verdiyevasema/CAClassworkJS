let allInputs = document.querySelectorAll("input");
let form = document.getElementById("signUpForm");
let submitBtn = document.querySelector(".submitBtn");

const usersData = JSON.parse(localStorage.getItem("users")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let usersObj = {
    username: allInputs[0].value,
    email: allInputs[1].value,
    password: allInputs[2].value,
  };

  usersData.push(usersObj);
  localStorage.setItem("users", JSON.stringify(usersData));

  window.location = "./login.html";
});
