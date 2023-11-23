const input = document.querySelector(".input");
const buttonAdd = document.querySelector(".button");
const ul = document.querySelector("#list");

buttonAdd.addEventListener("click", function () {
  if (input.value) {
    let liEl = document.createElement("li");
    let spanEl = document.createElement("span");
    let deleteBtn = document.createElement("button");
    console.log(input.value);

    spanEl.innerText = input.value;
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "Delette";

    liEl.append(spanEl, deleteBtn);
    ul.append(liEl);

    deleteBtn.addEventListener("click", function () {
      this.parentElement.remove();
    });

    input.value = "";
  } else {
    alert("inputu doldur.");
  }
});
