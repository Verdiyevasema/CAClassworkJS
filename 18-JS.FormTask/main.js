let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let form = document.querySelector(".submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (email.value !== "" && password.value !== "") {
    let user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    console.log(user);

    email.value = "";
    password.value = "";
  } else {
    alert("Not empty.");
  }
});
