const rLS = require("readline-sync");
// var start = rLS.keyIn("Press any key to start the game! ");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const topBorder = "+-";
let sideBorder = "| ";
let ship1 = "|x";
let ship2 = "|x";
function createBoard(size) {
	const xTopAndBottom = topBorder.repeat(size);
	function createNums(column) {
		const x = nums.slice(0, column);
		let xNum = "";
		xNum += `${x}\n ${xTopAndBottom}+`;
		return xNum;
	}
	const sides = sideBorder.repeat(size + 1);
	function createLetters(letterLength) {
		const y = letters.slice(0, letterLength);
		let yLetter = "";
		for (let i = 0; i < y.length; i++) {
			yLetter += `${y[i] + sides}\n ${xTopAndBottom}+\n`;
		}
		return yLetter;
	}
	return `  ${createNums(size)}\n${createLetters(size)}`;
}
console.log(createBoard(3));
