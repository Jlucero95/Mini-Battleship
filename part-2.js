const rls = require("readline-sync");
function game() {
	let ships = [];
	const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	function buildGrid(size) {
		let letterCoordinate = letters.slice(0, size);
		let numCoordinate = nums.slice(0, size);
	}
	console.log(buildGrid(10));
}
game();
