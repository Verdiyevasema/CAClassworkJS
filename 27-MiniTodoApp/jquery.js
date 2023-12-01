let container = $(".container");
let textH1 = $(".texth1");
let inputBtn = $(".inpbtn");
let input = $("input");

$(".addbtn").on("click", function () {
  //console.log("funksiya");
  $(".addbtn").css("backgroundColor", "green");
  let span = document.createElement("span");
  $(".box").append(span);
  span.innerText = $("input").val();
  $("span").css({
    color: "blue",
    backgroundColor: "aqua",
    padding: "0 30px",
    margin: "10px",
    //width: "10px",
    height: "40px",
    borderRadius: "10px",
  });

  span.onclick = function () {
    this.remove();
  };
  $("input").val("");
});

let arr = [];

// arr.forEach((item) => {
//   arr.push(item);
// });

let allContainer = JSON.parse(localStorage.getItem("container")) || [];
span.addEventListener("click", function () {
    this.remove();
  allContainer = allContainer.filter((item) => item != element);
  localStorage.setItem("container", JSON.stringify("container"));
});

$("addbtn").on("click", function () {
  allContainer.push($("input").val());
  localStorage.setItem("container", JSON.stringify(allContainer));
  drawFilm(allContainer);
  $("input").val("");
});

drawFilm(allContainer);