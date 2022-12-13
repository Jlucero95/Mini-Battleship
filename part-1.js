var rLS = require('readline-sync');

var keyPress = rLS.keyIn('Press any key to start the game!');

const shipSize = 1;
let size = 3;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if (x + y) { 
      board += "-";
    } else {
      board += "-";
    }
  }
  board += "\n";
  
}
console.log(board);


