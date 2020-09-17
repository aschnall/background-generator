var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


document.addEventListener("DOMContentLoaded", setGradient);


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";"
}

function randomColor() {
	var randomColor = Math.random().toString(16).substring(2,8);
	return randomColor;
}

function setBackground() {
	var newColor1 = "#" + randomColor();
	var newColor2 = "#" + randomColor();
	var randomGradient = "linear-gradient(to right, " + newColor1 + ", " + newColor2 + ")";
	body.style.background = randomGradient;
	css.textContent = body.style.background + ";";
	color1.value = newColor1;
	color2.value= newColor2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setBackground);

