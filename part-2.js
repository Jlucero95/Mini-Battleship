const rls = require("readline-sync");

let direction = "hor";
const twoShip = 2;
const threeShip = 3;
const fourShip = 4;
const fiveShip = 5;
const ship = [];

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findLocation(shipSize) {
	let randomLetter = letters[Math.floor(Math.random() * letters.length)];
	let randomNum = nums[Math.floor(Math.random() * nums.length)];
	function horLocation() {
		if (direction === "hor") {
			let numsOfCoor = [];
			let endNum = randomNum + shipSize - 1;
			if (endNum <= 10) {
				for (let i = randomNum; i <= endNum; i++) {
					numsOfCoor.push(i);
				}
			}
			console.log(numsOfCoor);
		}
	}
	horLocation();
}
findLocation(fiveShip);
