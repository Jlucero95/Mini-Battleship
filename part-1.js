const rLS = require("readline-sync");
// var start = rLS.keyIn("Press any key to start the game! ");
function createBoard(size) {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const x = nums.slice(0, size);
	const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const y = letters.slice(0, size);
	return `${x}\n${y}`;
}

console.log(createBoard(3));
