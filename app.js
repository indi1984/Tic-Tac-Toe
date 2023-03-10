const info = document.querySelector('#info');
const currentPlayer = document.querySelector('#player');
const gameBoard = document.querySelector('#gameBoard');
const startButton = document.querySelector('#startButton');


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




function checkRows() {
  for (let row = 0; row < ticTacToeBoard.length - 1; row++) {
   if (ticTacToeBoard.playerXArray === ticTacToeBoard.winningArray[row]) {
      console.log('PLAYER X WINS!');
   } else if (ticTacToeBoard.playerYArray === ticTacToeBoard.winningArray[row]) {
      console.log('PLAYER Y WINS!');
   }
  }
};


startButton.addEventListener('click', startingPlayer);
gameBoard.addEventListener('click', getCoords);


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


function getCoords(event) {  
const cell = event.target;
  console.log(cell);
  if (cell != "O"  & cell != "X") {
    if (cell.tagName === "TD") {
      let strCoords = cell.dataset.coords.split(',');
      const coordinates = strCoords.map((elem) => parseInt(elem));
      ticTacToeBoard.selectedCell = event.target;
      console.log(ticTacToeBoard.selectedCell);  //TODO Do not need
      assignCoords(coordinates, cell);
    }
  };
};


function assignCoords(coordinates, cell) {
  if (ticTacToeBoard.player === 'X' && ticTacToeBoard.player != '') {
    ticTacToeBoard.playerXArray.push(coordinates);
  } else if (ticTacToeBoard.player === 'O' && ticTacToeBoard.player != '') {
    ticTacToeBoard.playerOArray.push(coordinates);
  };
  playerMove(cell);
};


function playerMove(cell) {
  if (ticTacToeBoard.player === "X") {
    cell.innerHTML = "X";
    currentPlayer.innerHTML = "O";
    ticTacToeBoard.player = "O";
  } else if (ticTacToeBoard.player === "O") {
    currentPlayer.innerHTML = "X";
    cell.innerHTML = "O";
    ticTacToeBoard.player = "X";
  };
};