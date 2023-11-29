let body = document.querySelector("body");
let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

const isDarkMode = localStorage.getItem("dark-mode") === true;
isDarkMode = localStorage.getItem("dark-mode") === false;
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}
