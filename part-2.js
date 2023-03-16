const rls = require("readline-sync");
function game() {
	let start = rls.keyIn("Press any key to start game: ");
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
	console.log(ships);

	let recordedStrike = [];
	let currentStrike;
	let sunkShips = [];
	let hitPoint = 17;
	while (true) {
		function checkCoor() {
			let strike = rls.question("Please enter a location to strike: ");
			let [letter, ...nums] = strike;
			let num = nums.join("").toString();

			function checkLetter(letterCoor) {
				if (letterCoor === undefined) {
					console.log("No location given. Please try again.");
					checkCoor();
				} else if (!letters.includes(letterCoor.toUpperCase())) {
					console.log("Invalid location. Please try again.");
					checkCoor();
				} else {
					return true;
				}
			}
			checkLetter(letter);

			function checkNum(number) {
				if (checkLetter(letter)) {
					if (/[1-9]/g.test(number) || number === 10) {
						currentStrike = letter.toUpperCase() + number;
						return true;
					} else {
						console.log("Invalid location. Please try again.");
						checkCoor();
					}
				}
			}
			checkNum(num);

			if (checkNum === true) {
				return checkCoor();
			}
		}
		checkCoor();

		function goodStrike() {
			if (recordedStrike.includes(currentStrike)) {
				return console.log(
					"You tried that location already. Please try again!!"
				);
				checkCoor();
			}
			recordedStrike.push(currentStrike);
			console.log(currentStrike);
			console.log(recordedStrike);
			if (ships.flat().includes(currentStrike)) {
				hitPoint--;

				console.log("Thats a hit!!");
				checkCoor;
			} else if (!ships.flat().includes(currentStrike)) {
				console.log("You missed!! Try again");
				checkCoor;
			}
		}

		goodStrike();
		function checkSunkShips() {
			if (hitPoint === 0) {
				console.log("You have sunk all my ships!!!");
				let playAgain = rls.keyInYN("Would you like to play again? ");
				if (playAgain === true) {
					game();
				} else {
					console.log("Have a good day!!");
					process.exit();
				}
			}
		}
		checkSunkShips();
	}
}
game();
