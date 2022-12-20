var rLS = require('readline-sync');

// var start = rLS.keyIn('Press any key to start the game! ');

const board = {
  a: ['1', '2', '3'],
  b: ['4', '5', '6'],
  c: ['7', '8', '9'],
};

const cell = Object.entries(board);


function sample(arr) {
  let rowPick = arr[Math.floor(Math.random() * arr.length)];
  let colPick = rowPick[0] + rowPick[1][Math.floor(Math.random() * rowPick[1].length)];
  return colPick;
}

function sample2(arr) {
  let rowPick2 = arr[Math.floor(Math.random() * arr.length)];
  let colPick2 = rowPick2[0] + rowPick2[1][Math.floor(Math.random() * rowPick2[1].length)];
  return colPick2;
}

let ship1 = sample(cell);
let ship2 = sample2(cell);

if (ship1 === ship2 || ship1 !== ship2){
  sample(), sample2();
}

console.log(ship1, ship2);
