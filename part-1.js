var rLS = require('readline-sync');

var start = rLS.keyIn('Press any key to start the game! ');

const ship = 1;
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



var location = rLS.question('Enter location to strike? ');

if (location = shipPlacement) {
  console.log('You suck my Battleship!');
  let playAgain = rLS.keyInYN('Would you like to play again?');
  } else {
    console.log('You missed try again.');
    var location = rLS.question('Enter location to strike? ');
};

