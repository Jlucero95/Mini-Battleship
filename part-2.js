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

function findCoor(ship, shipLength) {
	let randomSection = game[Math.floor(Math.random() * game.length)];
	let randomCoor =
		randomSection[Math.floor(Math.random() * randomSection.length)];

	console.log(randomCoor);
	let splitCoor = randomCoor.match(/[a-jA-J]+|[0-9]+/g);
	let direction = "hor";

	let newShip = [];

	function placeShipHor() {
		if (parseInt(splitCoor[1]) + shipLength <= letters.length) {
			for (let i = 0; i < shipLength; i++) {
				console.log("Look at this", parseInt(splitCoor[1]));
				if (parseInt(splitCoor[1]) + i > 9) {
					placeShipHor();
				}
				newShip.push([splitCoor[0].concat(parseInt(splitCoor[1]) + i)]);
			}
		} else {
			direction = "vert";
		}
	}

	function placeShipVert() {
		if (
			direction === "vert"
			// letters.indexOf(splitCoor[0]) + shipLength <= letters.length
		) {
			for (let i = 0; i < shipLength; i++) {
				console.log("Look at this", letters.indexOf(splitCoor[0]));
				if (letters.indexOf(splitCoor[0]) + i > 9) {
					placeShipVert();
				}
				if (
					letters[letters.indexOf(splitCoor[0]) + i].concat(splitCoor[1]) >
					(letters.indexOf(splitCoor[0]) + i > 9)
				) {
					placeShipVert();
				}
				newShip.push([
					letters[letters.indexOf(splitCoor[0]) + i].concat(splitCoor[1]),
				]);
			}
		}
	}
	placeShipHor();
	placeShipVert();

	if (placeShipHor === undefined && placeShipVert === undefined) {
	}
	if (newShip.length === 0) {
		findCoor(ship, shipLength);
	}
	// console.log(newShip);
	ships.push(newShip);
}
findCoor(threeShip, 3);
console.log(ships);
