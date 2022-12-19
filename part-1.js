var rLS = require('readline-sync');

// var start = rLS.keyIn('Press any key to start the game! ');

const ship = 'o';


const board = {
  a: ['x', 'x', 'x'],
  b: ['x', 'x', 'x'],
  c: ['x', 'x', 'x'],
};

const cell = Object.entries(board);

const [row1, row2, row3 ] = cell;

const [r1, col1] = row1;
const [r2, col2] = row2;
const [r3, col3] = row3;

const randomRows = r1[Math.floor(Math.random() * r1.length)];



console.log(randomRows);
// console.log(r1, col1, r2, col2, r3, col3);

// console.table(board);