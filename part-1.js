const rls = require("readline-sync");
// let startGame = rls.keyIn("Press any key to start game: ");
let nums = [1, 2, 3];
let letters = ["a", "b", "c"];
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
let ship1 = randomLetter[0] + randomNum[0];
let ship2 = randomLetter[1] + randomNum[1];
let checkStrike = [];
let locationsUsed = [];
function strikeCall() {
	let strike = rls.question("Please enter a location to strike: ");
	const [letter, number] = strike;
	if (letter === undefined) {
		console.log("No location given. Please try again!!");
		strikeCall();
	}
	for (let i = 0; i < letters.length; i++) {
		if (letters[i] == letter.toLowerCase()) {
			checkStrike.push(letter);
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == number) {
			checkStrike.push(number);
		}
	}
	let combineStrike = checkStrike.join("");
	locationsUsed.push(combineStrike);
}
strikeCall();
let loggedStrikes = [];
let loggedHits = [];
function findHits() {
	for (let i = 0; i < locationsUsed.length; i++) {
		if (ship1 == locationsUsed[i]) {
			loggedHits.push(locationsUsed[i]);
			console.log("You sunk my BattleShip. 1 ship remaining!!");
			strikeCall();
		} else {
			console.log("You missed please try again.");
			strikeCall();
		}
	}
	for (let i = 0; i < locationsUsed.length; i++) {
		if (ship2 == locationsUsed[i]) {
			loggedHits.push(locationsUsed[i]);
			console.log("You sunk my BattleShip. 1 ship remaining!!");
			strikeCall();
		} else {
			console.log("You missed please try again.");
			strikeCall();
		}
	}
	if (loggedHits.length === 2) {
		console.log("You've sunk all my Battleships!!");
		let playAgain = rls.keyInYN("Would you like to play again?");
		if (playAgain === Y) {
			strikeCall();
		} else {
			console.log("Have a good Day.");
		}
	}
}
findHits();
