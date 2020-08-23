var _ = require("lodash");

// console.log(_);

// var array = [1,2,3,4,5,6,7,8];

// console.log('answer', _.without(array, 3));

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.querySelector("button");
let copyBtn = document.querySelector(".copy");

const setGradient = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
};

const setRandomGradient = () => {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
};

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// const copyToClipboard = () => {
//   let code = copyCss.value.select();
//   document.execCommand("copy");
// };

const copyToClipboard = (str) => {
  console.log(str);
  const el = document.createElement("textarea");
  el.value = css.textContent;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

//Initial Brackground Gradient
color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomGradient);
copyBtn.addEventListener("click", () => copyToClipboard(css.textContent));
