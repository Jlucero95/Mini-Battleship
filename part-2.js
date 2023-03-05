const rls = require("readline-sync");

let direction = "hor";
const twoShip = 2;
const threeShip = 3;
const fourShip = 4;
const fiveShip = 5;
const ships = [];
function makeLetters(str) {
	return str.split("");
}
const letters = makeLetters("ABCDEFGHIJ");
function grid(num, letter) {
	let board = [];
	for (let i = 0; i < num; i++) {
		board.push([]);
		for (let j = 0; j < num; j++) {
			board[i].push(`${letters[i]}${j + 1}`);
		}
	}
	return board;
}
const game = grid(10, letters);

function placeShip(ship, shipLength) {
	let randomSection = game[Math.floor(Math.random() * game.length)];
	let randomCoor =
		randomSection[Math.floor(Math.random() * randomSection.length)];
	let splitCoor = randomCoor.match(/[a-zA-Z]+|[0-9]+/g);
	let direction = "hor";

	let newShip = [];

	if (parseInt(splitCoor[1]) + shipLength <= letters.length) {
		for (let i = 0; i < shipLength; i++) {
			newShip.push([splitCoor[0].concat(parseInt(splitCoor[1]) + i)]);
		}
	} else {
		direction = "vert";
	}

	if (
		direction === "vert" &&
		letters.indexOf(splitCoor[0]) + shipLength <= letters.length
	) {
		for (let i = 0; i < shipLength; i++) {
			newShip.push([
				letters[letters.indexOf(splitCoor[0]) + i].concat(splitCoor[1]),
			]);
		}
	}
	ships.push(newShip);
}

function forcePlaceAllShips(arr, letter) {
	arr.forEach((item) => placeShip());
}

forcePlaceAllShips(ships, letters);

console.log(ships);
