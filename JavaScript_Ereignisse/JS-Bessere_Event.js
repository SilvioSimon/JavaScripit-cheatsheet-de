//const prompt = document.querySelector("#prompt");
//const el = document.querySelector("button");

//function publish() {
//  prompt.innerText = "Website Published";
//}

//el.onclick = publish;

//////////////////////////////////////////////////////////////////////
//Event besser version
const textArea = document.querySelector("textarea");

function changeToBlue() {
  textArea.style.backgroundColor = "blue";
}
function changeToRed() {
  textArea.style.backgroundColor = "red";
}
textArea.onscroll = changeToRed;

//////////////////////////////////////////////////////////////////////
//change-Event bei einem <input type="range">
const input = document.querySelector("input");
const log = document.getElementById("log");

function updateValue() {
  log.innerText = input.value;
}
input.onchange = updateValue;

//////////////////////////////////////////////////////////////////////
//Eine modernere Methode, um Ereignisse zu Elementen hinzuzufügen,
// ist die addEventListener()-Methode.
const item = document.querySelectorAll("div")[4];

function changeColor() {
  item.classList.toggle("pink");
}
item.addEventListener("click", changeColor);


//////////////////////////////////////////////////////////////////////
//addEventListener()
const item3 = document.querySelector(".default");

const heightWidth = document.querySelector("#height-width");
const height = document.querySelector("#height");
const width = document.querySelector("#width");

function changeWidth() {
  item3.classList.toggle("width");
}

function changeHeight() {
  item3.classList.toggle("height");
}

heightWidth.addEventListener("click", changeHeight);
heightWidth.addEventListener("click", changeWidth);

height.addEventListener("click", changeHeight);

width.addEventListener("click", changeWidth);