let body = document.querySelector("body");
let form = document.querySelector("form");
let text = document.querySelector(".websiteText");
let login = document.querySelector(".login");

let footer = document.querySelector(".footer");
let allInputs= document.querySelectorAll("input");

let users = JSON.parse(localStorage.getItem("users"));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  console.log(users);
  let bool = users.find(
    (item) =>
      item.password === allInputs[1].value && item.email === allInputs[0].value
  );
    console.log(bool);

  if (allInputs[0].value !== "" || allInputs[1].value !== "") {
    if (bool) {
      window.location = "./home.html";
    } else {
      alert("email ve ya password yanlis!");
    }
  }
});
