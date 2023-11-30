const formDiv = document.getElementById("formDiv");

let form = document.createElement("form");
let texth1 = document.createElement("h1");

let userInpDiv = document.createElement("div");
let emailInpDiv = document.createElement("div");
let phInpDiv = document.createElement("div");
let pswInpDiv = document.createElement("div");
let btnSignUp = document.createElement("div");

let inputUsername = document.createElement("input");
let inputEmail = document.createElement("input");
let inputPhoneNumber = document.createElement("input");
let inputPassword = document.createElement("input");

let btnSign = document.createElement("button");
let texth3 = document.createElement("h3");

texth1.style.color = "black";
texth1.innerText = "Sign Up";
texth3.type = "text";

inputUsername.placeholder = "Enter Your Username";
inputEmail.placeholder = "Enter Your Email";
inputPhoneNumber.placeholder = "Enter Your Phone Number";
inputPassword.placeholder = "Enter Your Password";

inputUsername.type = "text";
inputEmail.type = "email";
inputEmail.required = "true";
inputPhoneNumber.type = "number";
inputPassword.type = "password";

inputUsername.style.width = "100%";
inputEmail.style.width = "100%";
inputPhoneNumber.style.width = "100%";
inputPassword.style.width = "100%";
btnSign.style.width = "100%";

btnSign.innerText = "Sign Up";
btnSign.type = "submit";

document.body.style.backgroundColor = "blue";

form.style.backgroundColor = "white";
form.style.width = "30%";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.padding = "60px 0";
form.style.gap = "1.5rem";


btnSignUp.append(btnSign);
userInpDiv.append(inputUsername);
phInpDiv.append(inputPhoneNumber);
emailInpDiv.append(inputEmail);
pswInpDiv.append(inputPassword);

form.append(texth1, userInpDiv, phInpDiv, emailInpDiv, pswInpDiv, btnSignUp);

formDiv.append(form);

let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

// let inputUsername = document.createElement("input");
// let inputEmail = document.createElement("input");
// let inputPhoneNumber = document.createElement("input");
// let inputPassword = document.createElement("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userObj = {
    name: inputUsername.value,
    email: inputEmail.value,
    phoneNumber: inputPhoneNumber.value,
    password: inputPassword.value,
  };

  if (inputUsername.value.length >= 3 && inputPassword.value.length >= 6) {
    userInfo.push(userObj);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "login.html"
  }
});