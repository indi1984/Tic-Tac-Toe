//* Declerations
const info = document.querySelector('#info');
const currentPlayer = document.querySelector('#player');
const gameBoard = document.querySelector('#gameBoard');
const startButton = document.querySelector('#startButton');
const tdCells = document.querySelectorAll('td');



//* Initialize ticTacToeBoard object
let ticTacToeBoard = {
  player: null,
  selectedCell: null,  //TODO Do not need
  playerXArray: [],
  playerOArray: [],
  winningArray: [
    // Rows
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    //Columns
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    //Diags
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]],
  ],
};



//! WIP function to check for winning rows based on ticTacToeBoard.winningArray
function checkRows() {
  for (let row = 0; row < ticTacToeBoard.length - 1; row++) {
    if (ticTacToeBoard.playerXArray === ticTacToeBoard.winningArray[row]) {
      console.log('PLAYER X WINS!');
    } else if (ticTacToeBoard.playerYArray === ticTacToeBoard.winningArray[row]) {
      console.log('PLAYER Y WINS!');
    };
  };
};
//! WIP function to check for winning columns based on ticTacToeBoard.winningArray
function checkColumns() {
  for (let i = 0; i < ticTacToeBoard.length - 1; i++) {
    if (ticTacToeBoard.playerXArray === ticTacToeBoard.winningArray[i]) {
      console.log('PLAYER X WINS!');
    } else if (ticTacToeBoard.playerYArray === ticTacToeBoard.winningArray[i]) {
      console.log('PLAYER Y WINS!');
    };
  };
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
  if (cell.tagName === "TD") {
    let strCoords = cell.dataset.coords.split(',');
    const coordinates = strCoords.map((elem) => parseInt(elem));
    //ticTacToeBoard.selectedCell = event.target;  //TODO Do not need
    assignCoords(coordinates, cell);
  };
};



//* Checks who the current player is and pushes the gameBoard cell value pair
//* to the current players ticTacToeBoard X or O Array.  Then calls the 
//* playerMove function to switch players
function assignCoords(coordinates, cell) {
  if (ticTacToeBoard.player === 'X' && ticTacToeBoard.player != '') {
    ticTacToeBoard.playerXArray.push(coordinates);
  } else if (ticTacToeBoard.player === 'O' && ticTacToeBoard.player != '') {
    ticTacToeBoard.playerOArray.push(coordinates);
  };
  playerMove(cell);
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
  };
  currentPlayer.innerHTML = "PRESS START GAME BUTTON";
  ticTacToeBoard.player = null;
  ticTacToeBoard.selectedCell = null;
  ticTacToeBoard.playerOArray = [];
  ticTacToeBoard.playerXArray = [];
};