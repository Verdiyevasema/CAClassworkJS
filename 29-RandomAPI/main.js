let container = document.querySelector(".container");
let img = document.createElement("img");
let h1Elm = document.createElement("h1");
let box = document.querySelector(".box");
h1Elm.innerText = "RANDOM IMAGE";
h1Elm.style.color = "white";
h1Elm.style.textAlign = "center";
container.style.background = "linear-gradient(#e66465, #9198e5)";

box.append(h1Elm, img);
//container.append(h1)
container.style.height = "100vh";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.aliginItems = "center";
// box.style.display = "flex";
// box.style.justifyConten = "center";
// box.style.aliginItems = "center";
box.style.width = "30%";
box.style.height = "60%";
img.style.width = "100%";
img.style.height = "100%";

let intervall = setInterval(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      img.src = data?.message;
    })
    .catch((error) => console.log(error));
}, 2000);

img.src =
  "https://images.dog.ceo/breeds/ovcharka-caucasian/MVIMG_20190730_171335.jpg";
