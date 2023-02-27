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
let randomSection = game[Math.floor(Math.random() * game.length)];
let randomCoor =
	randomSection[Math.floor(Math.random() * randomSection.length)];

let splitCoor = randomCoor.match(/[a-zA-Z]+|[0-9]+/g);

function placeShip(ship) {
	if (direction === "hor") {
		if (parseInt(splitCoor[1]) + ship < letters.length + 1) {
			for (let i = 0; i < ship; i++) {
				ships.push(splitCoor[0], parseInt(splitCoor[1]) + i);
			}
		}
	}
}
placeShip(twoShip);
placeShip(threeShip);
placeShip(threeShip);
placeShip(fourShip);
placeShip(fiveShip);

console.log(ships);
