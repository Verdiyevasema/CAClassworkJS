let body = document.querySelector("body");
let form = document.createElement("form");
let h1text = document.createElement("h1");
let emailInput = document.createElement("input");
let password = document.createElement("input");
let loginBtn = document.createElement("button");

h1text.innerText = "Login";
emailInput.placeholder = "email";
password.placeholder = "password";

loginBtn.innerText = "Login";
loginBtn.style.backgroundColor = "green";
loginBtn.style.width = "80px";
loginBtn.style.borderRadius = "4px";
loginBtn.style.border = "none";
loginBtn.style.type = "submit";
loginBtn.style.color = "white";

form.append(h1text, emailInput, password, loginBtn);
body.append(form);

form.style.width = "30%";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.borderRadius = "10px";
form.style.padding = "60px 0";
document.body.style.backgroundColor = "yellow";
form.style.backgroundColor = "white";
form.style.gap = "1.5rem";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let Users = JSON.parse(localStorage.getItem("signUpArr"));
  let bool = Users.some(
    (item) =>
      item.password === password.value && item.email === emailInput.value
  );

  if (emailInput.value !== "" || password.value !== "") {
    if (bool) {
      window.location = "home.html";
    } else {
      alert("email ve ya password yanlis!");
    }
  }
});
