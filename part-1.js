var rLS = require('readline-sync');

// var keyPress = rLS.keyIn('Press any key to start the game! ');


let size = 3;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) { 
      board += "-";
    } else {
      board += "+";
    }
  }
  board += "\n";
}

console.log(board);
