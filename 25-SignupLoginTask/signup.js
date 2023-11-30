let body = document.querySelector("body");
let form = document.createElement("form");
let h1text = document.createElement("h1");
let emailInput = document.createElement("input");
let createPassword = document.createElement("input");
let confirmPassword = document.createElement("input");
let signupBtn = document.createElement("button");

// emailInput.style.width = "100%";
// inputEmail.style.width = "100%";
// createPassword.style.width = "100%";
// confirmPassword.style.width = "100%";
// signupBtn.style.width = "100%";

h1text.innerText = "Sign up";
emailInput.placeholder = "email";
createPassword.placeholder = "Create password";
confirmPassword.placeholder = "Confirm password";

signupBtn.innerText = "Sign up";
signupBtn.style.backgroundColor = "blue";
signupBtn.style.width = "80px";
signupBtn.style.color = "white";
signupBtn.style.type = "submit";
signupBtn.style.borderRadius = "4px";
signupBtn.style.border = "none";

form.append(h1text, emailInput, createPassword, confirmPassword, signupBtn);
body.append(form);

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.borderRadius = "10px";
form.style.width = "25%";
form.style.height = "50vh";
form.style.padding = "60px 0";
document.body.style.backgroundColor = "blue";
form.style.backgroundColor = "white";
form.style.gap = "1.5rem";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

let Arr = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userObj = {
    email: emailInput.value,
    password: createPassword.value,
    confirm: confirmPassword.value,
  };

  if (
    emailInput.value.length > 0 &&
    createPassword.value === confirmPassword.value
  ) {
    Arr.push(userObj);
    localStorage.setItem("signUpArr", JSON.stringify(Arr));

    window.location.href = "login.html";
  } else {
    alert("Email ve ya sifre yanlisdir!");
  }
});
