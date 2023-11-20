// --------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.

// let elementbtn = document.querySelector(".button");

// let count = 1;
// let intervall = setInterval(() => {
//   console.log(count++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervall);
// }, 4000);

// --------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.

// let btn = document.querySelector(".button");
// let text = document.querySelector(".text");

// btn.addEventListener("click", () => {
//   text.innerText = "sema";
//   text.style.fontSize = "2rem";
//   text.style.color = "blue";
// });

// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.
// let texts = document.querySelectorAll(".text");

// console.log(texts);
// texts.forEach((item) => {
//   console.log(item.innerText);
// });

// --------------------------------------------------------- TASK 4 ---------------------------------------------------------

//Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// let str = "developer";
// Developer;
// DEveloper;
// DEVEloper;
// DEVELOper;
// DEVELOPer;
// DEVELOPEr;
// DEVELOPER;

// let index = 1;
// let intervall = setInterval(() => {
//   if (index <= str.length) {
//     str = str.slice(0, index).toLocaleUpperCase() + str.slice(index);
//     index++;
//     console.log(str);
//   } else {
//     clearInterval(intervall);
//   }
// }, 1000);

// --------------------------------------------------------- TASK 5 ---------------------------------------------------------

// HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.

// let colorbtn = document.querySelector(".button");

// let colors = [blue, grey, red, green, yellow];

