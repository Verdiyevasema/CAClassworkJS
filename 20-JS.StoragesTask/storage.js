let form = document.querySelector("#form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let address = document.querySelector("#address");

let databases = JSON.parse(localStorage.getItem("peopleobjects")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let object = {
    id: Date.now(),
    firstName: "firstName.value",
    lastName: "lastName.value",
    address: "address.value",
  };

  databases.push("object");
  localStorage.setItem("peopleobjects", JSON.stringify(object));

  firstName.value = " ";
  lastName.value = " ";
  address.value = " ";
});

console.log(databases);