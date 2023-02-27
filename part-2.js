const rls = require("readline-sync");

let direction = "hor";
const twoShip = 2;
const threeShip = 3;
const fourShip = 4;
const fiveShip = 5;
const ship = [];
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

let splitCoor = randomCoor.split("");

if (direction === "hor") {
	if (splitCoor[1] + twoShip < letters.length) {
		for (let i = 0; i < twoShip; i++) {
			ship.push([splitCoor[0], splitCoor[1] + i]);
		}
	}
}

console.log(splitCoor[1]);
