const rls = require("readline-sync");

let direction = "hor";
const twoShip = 2;
const threeShip = 3;
const fourShip = 4;
const fiveShip = 5;
const ship = [];

const placeHolder = [];
const letters = "abcdefghij".toUpperCase().split("");

function findLocation() {
	let randomIndex = Math.floor(Math.random() * letters.length);
	if (randomIndex > 0) {
		placeHolder.push(letters[randomIndex - 1] + randomIndex);
	} else findLocation();
}
findLocation();

let converter = (str, letters) => {
	const x = letters.indexOf(str[0]);
	const y = +str.substring(1) - 1;
	return [x, y];
};

let coord = converter(placeHolder[0], letters);

if (direction === "hor") {
	if (coord[1] + fourShip < letters.length) {
		for (let i = 0; i < fourShip; i++) {
			ship.push([coord[0], coord[1] + i]);
		}
	}
}

console.log(ship);
