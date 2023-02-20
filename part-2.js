const rls = require("readline-sync");
function game() {
	let ships = [[], [], [], [], []];
	let direction = "hor";
	const twoUnit = 2;
	const threeUnit = 3;
	const fourUnit = 4;
	const fiveUnit = 5;
	const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

	function shipPlacement() {
		let randomLetter = letters
			.sort(function () {
				return 0.5 - Math.random();
			})
			.slice(0, 9);
		let randomNum = nums
			.sort(function () {
				return 0.5 - Math.random();
			})
			.slice(0, 9);
	}

	let converter = (str, length) => {
		const x = letters.indexOf(str[0]);
		const y = str.substring(1) - 1;
		return [x, y];
	};

	let coord = converter("F5", letters);

	if (direction === "hor") {
		if (coord[1] + fiveUnit < letters.length) {
			for (let i = 0; i < fiveUnit; i++) {
				ships[4].push([coord[0], coord[1] + i]);
			}
		}
	}

	console.log(ships);
}
game();
