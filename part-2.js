const rls = require("readline-sync");
// let start = rls.keyIn("Press any key to start game: ");
let direction = "hor";
const twoShip = 2;
const threeShip = 3;
const fourShip = 4;
const fiveShip = 5;
let ships = [];
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
			newShip.push(splitCoor[0].concat(parseInt(splitCoor[1]) + i));
		}
	} else {
		direction = "vert";
	}

	if (
		direction === "vert" &&
		letters.indexOf(splitCoor[0]) + shipLength <= letters.length
	) {
		for (let i = 0; i < shipLength; i++) {
			newShip.push(
				letters[letters.indexOf(splitCoor[0]) + i].concat(splitCoor[1])
			);
		}
	}
	ships.push(newShip);
}
function checkOverlap(shipCoords, usedCoords) {
	for (let coord of shipCoords) {
		if (usedCoords.has(coord)) {
			return true;
		}
	}
	return false;
}

function checkPlacement(arr) {
	let usedCoords = new Set();
	while (arr.flat().length < 17) {
		arr.length = 0;
		placeShip(twoShip, 2);
		placeShip(threeShip, 3);
		placeShip(threeShip, 3);
		placeShip(fourShip, 4);
		placeShip(fiveShip, 5);

		let overlaps = false;
		for (let ship of arr) {
			if (checkOverlap(ship, usedCoords)) {
				overlaps = true;
				break;
			} else {
				for (let coord of ship) {
					usedCoords.add(coord);
				}
			}
		}
		if (overlaps) {
			arr.length = 0;
			usedCoords.clear();
		}
	}
}
checkPlacement(ships);
let checkStrike = [];
function checkHit() {
	const indexList = [];
	for (let i = 0; i < letters.length; i++) {
		indexList.push(letters.indexOf(letters[i]) + 1);
	}
	let strike;
	while (true) {
		strike = rls.question("Please enter a location to strike: ");
		if (strike[0] === undefined) {
			console.log("No location given. Please try again.");
			return checkHit();
		} else {
			let [letter, number] = strike;
			if (
				letters.includes(letter.toUpperCase()) &&
				indexList.includes(number)
			) {
				if (checkStrike.includes(letter + number)) {
					console.log(
						"You have already tried that location. Please try again."
					);
				} else {
					checkStrike.push(letter + number);
					break;
				}
			} else {
				console.log("Invalid location. Please try again.");
			}
		}
	}
}
checkHit();

// console.log(ships);
