const btnStart = document.querySelector(".start");
const btnText = document.querySelector(".text");
const btnStop = document.querySelector(".stop");
const btnText1 = document.querySelector(".incriment");
const btnText2 = document.querySelector(".decriment");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");
const incByInpValue = document.querySelector(".incByInpValue");
const decByInpValue = document.querySelector(".decByInpValue");
const inputInc = document.querySelector(".inputInc");
const inputDec = document.querySelector(".inputDec");
let countInterval;
let count = 0;

btnText1.addEventListener("click", function () {
  console.log("btnStart clicked");
  count++;
  result.innerText = count;
  btnStart.removeAttribute("disabled");
  btnStop.removeAttribute("disabled");
});
btnText2.addEventListener("click", function () {
  count--;
  result.innerText = count;
  btnStart.removeAttribute("disabled");
  btnStop.removeAttribute("disabled");
});
btnStart.addEventListener("click", function () {
  this.setAttribute("disabled", null);
  btnStop.removeAttribute("disabled");
  clearInterval(countInterval);
  countInterval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 500);
});

btnStop.addEventListener("click", function () {
  this.setAttribute("disabled", null);
  btnStart.removeAttribute("disabled");
  clearInterval(countInterval);
});

reset.addEventListener("click", function () {
  count = 0;
  result.innerText = count;
  clearInterval(countInterval);
  btnStart.removeAttribute("disabled");
  btnStop.removeAttribute("disabled");
});

incByInpValue.addEventListener("click", function () {
  count += +inputInc.value;
  result.innerText = count;
  clearInterval(countInterval);
  btnStart.removeAttribute("disabled");
  btnStop.removeAttribute("disabled");
});

decByInpValue.addEventListener("click", function () {
  count += +inputDec.valiue;
  result.innerText = count;
  clearInterval = (countInterval);
  btnStart.removeAttribute("disabled");
  btnStop.removeAttribute("disabled");
});
