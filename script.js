var _= require('lodash');

console.log(_);

var array = [1,2,3,4,5,6,7,8];

console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ","
		+ color2.value
		+ ")";
		css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function getRandomColor() {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

//Initial Brackground Gradient
color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomGradient);