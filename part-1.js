const rls = require("readline-sync");
function game() {
	let shipA;
	let shipB;
	let nums = ["1", "2", "3"];
	let letters = ["a", "b", "c"];
	function startGame() {
		let start = rls.keyIn("Press any key to start game: ");
		let ship1 = [];
		let ship2 = [];
		function shipPlacement() {
			let randomLetter = letters
				.sort(function () {
					return 0.5 - Math.random();
				})
				.slice(0, 2);
			let randomNum = nums
				.sort(function () {
					return 0.5 - Math.random();
				})
				.slice(0, 2);
			ship1.push(randomLetter[0] + randomNum[0]);
			ship2.push(randomLetter[1] + randomNum[1]);
		}
		shipPlacement();
		if (ship1 === ship2) {
			shipPlacement();
		}
		shipA = ship1;
		shipB = ship2;
	}
	startGame();

	let checkStrike = [];
	let sunkShips = [];

	function strikeCall() {
		let strike;
		while (true) {
			strike = rls.question("Please enter a location to strike: ");
			if (strike[0] === undefined) {
				console.log("No location given. Please try again.");
				return strikeCall();
			} else {
				let [letter, number] = strike;
				if (letters.includes(letter.toLowerCase()) && nums.includes(number)) {
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
	strikeCall();
	function checkSunkShips() {
		if (sunkShips.length === 1) {
			console.log("You sunk my BattleShip! 1 ship remaining!!");
		} else if (sunkShips.length === 2) {
			console.log("You've sunk all my Battleships!!");
			let playAgain = rls.keyInYN("Would you like to play again?");
			if (playAgain === true) {
				game();
			} else {
				console.log("Have a good Day.");
				process.exit();
			}
		}
	}
	function findHits() {
		for (let position of checkStrike) {
			if (shipA[0] === position) {
				sunkShips.push(shipA[0]);
				checkSunkShips();
				strikeCall();
			} else if (shipB[0] === position) {
				sunkShips.push(shipB[0]);
				checkSunkShips();
				strikeCall();
			} else {
				console.log("You missed! Please try again.");
				strikeCall();
			}
		}
	}
	findHits();
}
game();
