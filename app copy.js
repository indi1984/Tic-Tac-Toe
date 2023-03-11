//* Decelerations
const info = document.querySelector('#info');
const currentPlayer = document.querySelector('#player');
const gameBoard = document.querySelector('#gameBoard');
const startButton = document.querySelector('#startButton');
const tdCells = document.querySelectorAll('td');


//* Initialize ticTacToeBoard object
// let ticTacToeBoard = {
//   player: null,
//   selectedCell: null,  //TODO Do not need
//   playerXArray: [],
//   playerOArray: [],
//   winningRows: [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ],
//   winningColumns: [
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8]
//   ],
//   winningDiags: [
//     [0, 4, 8], 
//     [2, 4, 6]
//   ],
// };

let ticTacToeBoard = {
  player: null,
  winningPlayer: false,
  selectedCell: null,  //TODO Do not need
  playerXArray: [],
  playerOArray: [],
  winningRow1: [0, 1, 2],
  winningRow2: [3, 4, 5],
  winningRow3: [6, 7, 8],
  winningColumn1: [0, 3, 6],
  winningColumn2: [1, 4, 7],
  winningColumn3: [2, 5, 8],
  winningDiag1: [0, 4, 8], 
  winningDiag2: [2, 4, 6],
};



//* Assigning Event Listeners to the buttons and gameBoard
startButton.addEventListener('click', startingPlayer);
resetButton.addEventListener('click', reset);
gameBoard.addEventListener('click', getCoords);


//* Upon clicking the Start Game button, a random starting player (X or O)
//* is chosen based on the Math.random function.   The ticTacToe.player value
//* is assigned and the player span element is set to display the current player
function startingPlayer() {
let starter = Math.floor(Math.random() * 2);
  if (starter === 1) {
    ticTacToeBoard.player = 'X';
    currentPlayer.innerHTML = ticTacToeBoard.player;
  } else {
    ticTacToeBoard.player = 'O';
    currentPlayer.innerHTML = ticTacToeBoard.player;
  };
  console.log(ticTacToeBoard.player);  //! CONSOLE LOG
};


//* Gets the coordinates of the gameBoard cell where the current player clicked.
//* Picked string coords are then converted to a numeric array and passed to the 
//* assignCoords function.   The clicked cell variable is also passed to the 
//* assignedCoords function
function getCoords(event) {  
  const cell = event.target;
  checkMoves();
  if (ticTacToeBoard.winningPlayer === false) {
    if (cell.tagName === "TD") {
      let strCoords = cell.dataset.coords;
      const coordinates = parseInt(strCoords);
      //ticTacToeBoard.selectedCell = event.target;  //TODO Do not need
      assignCoords(coordinates, cell);
    };
    cell.classList.add('disabled');
  } else {
    winningState();
  };
};


//* Checks the current player and if cell is free then pushes the gameBoard cell
//* value pair to the current players ticTacToeBoard X or O Array.  Then calls
//* the playerMove function to switch players
function assignCoords(coordinates, cell) {
  let isDisabled = cell.classList.contains('disabled');
  if (!isDisabled) {
    if (ticTacToeBoard.player === 'X' && ticTacToeBoard.player != '') {
      ticTacToeBoard.playerXArray.push(coordinates);
    } else if (ticTacToeBoard.player === 'O' && ticTacToeBoard.player != '') {
      ticTacToeBoard.playerOArray.push(coordinates);
    }
    playerMove(cell);
  };
};
  

//* Changes the player span element to the Current Player (X or O),
//* flips the value in ticTacToeBoard.player, and sets the gameBoard cell
//* to the current players' value
function playerMove(cell) {
  if (ticTacToeBoard.player === "X") {
    cell.innerHTML = "X";
    currentPlayer.innerHTML = "O";
    ticTacToeBoard.player = "O";
  } else if (ticTacToeBoard.player === "O") {
    cell.innerHTML = "O";
    currentPlayer.innerHTML = "X";
    ticTacToeBoard.player = "X";
  };
};


//* Resets the game to the default loaded state
function reset() {
  for (let i = 0; i < tdCells.length; i++) {
    tdCells[i].innerHTML = '';
    tdCells[i].classList.remove('disabled');
  };
  currentPlayer.innerHTML = "PRESS START GAME BUTTON";
  ticTacToeBoard.player = null;
  ticTacToeBoard.selectedCell = null;
  ticTacToeBoard.playerOArray = [];
  ticTacToeBoard.playerXArray = [];
  ticTacToeBoard.winningPlayer = false;
};


//! WIP function to check for winning columns based on ticTacToeBoard.winningArray

// ticTacToeBoard.winningPlayer is false when all functions below are false, 
// and true when any one of the below is true.   When one hits true, then check
// current player and declare that player the winner.   This logic should be in 
// a function called winningPlayer() and be called on every click event in that 
// function.
function checkMoves() {
  a = ticTacToeBoard.playerOArray;
  b = ticTacToeBoard.playerXArray;
  c = ticTacToeBoard.winningDiag1;
  d = ticTacToeBoard.winningDiag2;
  e = ticTacToeBoard.winningRow1;
  f = ticTacToeBoard.winningRow2;
  g = ticTacToeBoard.winningRow3;
  h = ticTacToeBoard.winningColumn1;
  i = ticTacToeBoard.winningColumn2;
  j = ticTacToeBoard.winningColumn3;

  //O
  let pO0 = c.every(v => a.includes(v));
  let pO1 = d.every(v => a.includes(v));
  let pO2 = e.every(v => a.includes(v));
  let pO3 = f.every(v => a.includes(v));
  let pO4 = g.every(v => a.includes(v)); 
  let pO5 = h.every(v => a.includes(v)); 
  let pO6 = i.every(v => a.includes(v)); 
  let pO7 = j.every(v => a.includes(v));  

  //X
  let pX0 = c.every(v => b.includes(v));
  let pX1 = d.every(v => b.includes(v));
  let pX2 = e.every(v => b.includes(v));
  let pX3 = f.every(v => b.includes(v));
  let pX4 = g.every(v => b.includes(v)); 
  let pX5 = h.every(v => b.includes(v)); 
  let pX6 = i.every(v => b.includes(v)); 
  let pX7 = j.every(v => b.includes(v)); 

  if (pO0 || pO1 || pO2 || pO3 || pO4 || pO5 || pO6 || pO7) {
    ticTacToeBoard.winningPlayer = true;
    return true;
  } else if (pX0 || pX1 || pX2 || pX3 || pX4 || pX5 || pX6 || pX7) {
    ticTacToeBoard.winningPlayer = true;
    return true;
  }
};


function winningState() {
  console.log('WINNER');
};

