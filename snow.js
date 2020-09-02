/*!
// Snow.js - v0.0.3
// kurisubrooks.com
*/


// Amount of Snowflakes
var snowMax = 35;

// Snowflake Colours
var snowColor = ["white"];

// Snow Entity
var snowEntity = "&#x2022;";

// Falling Velocity
var snowSpeed = 0.5;

// Minimum Flake Size
var snowMinSize = 8;

// Maximum Flake Size
var snowMaxSize = 24;

// Refresh Rate (in milliseconds)
var snowRefresh = 50;

// Additional Styles
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";
var stop = false;
/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

function startSnow() {
	// If it is snowing, stop it
	var button = document.getElementById('startstop');
	if (stop === false) {
		stop = true;
		snowMinSize = 0;
		snowMaxSize = 0;
		button.classList.add('stop');
		button.classList.remove('start');
		button.value = 'Start Snow';
		initSnow(stop);
	}
	// If it is not snowing, make it snow
	else {
		stop = false;
		snowMinSize = 8;
		snowMaxSize = 24;
		button.classList.add('start');
		button.classList.remove('stop');
		button.value = 'Stop Snow';
		initSnow(stop);
	}
}

var snow = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
	rand = Math.floor(range * Math.random());
	return rand;
}

function initSnow() {
	var snowSize = snowMaxSize - snowMinSize;
	marginBottom = document.body.scrollHeight - 5;
    marginRight = document.body.clientWidth - 15;

	for (i = 0; i <= snowMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		snow[i] = document.getElementById("flake" + i);
		snow[i].style.fontFamily = "inherit";
		snow[i].size = randomise(snowSize) + snowMinSize;
		snow[i].style.fontSize = snow[i].size + "px";
		snow[i].style.color = snowColor[randomise(snowColor.length)];
		snow[i].style.zIndex = -1;
		snow[i].sink = snowSpeed * snow[i].size / 5;
		snow[i].posX = randomise(marginRight - snow[i].size);
		snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
		snow[i].style.left = snow[i].posX + "px";
		snow[i].style.top = snow[i].posY + "px";
	}

	moveSnow(stop);
}

function resize() {
	marginBottom = document.body.scrollHeight - 5;
	marginRight = document.body.clientWidth - 15;
}

function moveSnow(stop) {
	for (i = 0; i <= snowMax; i++) {
		coords[i] += pos[i];
		snow[i].posY += snow[i].sink;
		snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		snow[i].style.top = snow[i].posY + "px";

		if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
			snow[i].posX = randomise(marginRight - snow[i].size);
			snow[i].posY = 0;
		}
	}

	if (stop === false) {
		setTimeout("moveSnow(stop)", snowRefresh);
	}
	else {
		clearTimeout();
	}
}

for (i = 0; i <= snowMax; i++) {
	document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}


window.addEventListener('resize', resize);
window.addEventListener('load', initSnow);
// document.getElementById('stopButton').addEventListener('click', function() {
//     snowMinSize = 0;
//     snowMaxSize = 0;
//     return;
// });
