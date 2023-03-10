const info = document.querySelector('#info');
const currentPlayer = document.querySelector('#playerStatus');
const gameBoard = document.querySelector('#gameBoard');
const startButton = document.querySelector('#startButton');


let ticTacToeBoard = {
  player: '',
  selectedCell: '',
  playerXArray: [],
  playerYArray: [],
  winningArray: [],
}


startButton.addEventListener('click', startingPlayer);
gameBoard.addEventListener('click', getCoords);



function startingPlayer() {
let starter = Math.floor(Math.random() * 2);
  if (starter === 1) {
    ticTacToeBoard.player = 'X';
  } else {
    ticTacToeBoard.player = 'O';
  };
  console.log(ticTacToeBoard.player);
  return ticTacToeBoard.player;
};


function getCoords(event) {
  const cell = event.target;
  if (cell.tagName === "TD") {
    let strCoords = cell.dataset.coords.split(',');
    const coordinates = strCoords.map((elem) => parseInt(elem));
    ticTacToeBoard.selectedCell = event.target;
    assignCoords(coordinates);
  };
  return coordinates;

};


function assignCoords(coordinates, event) {
  cell = event.target;
  if (ticTacToeBoard.player === 'X') {
    ticTacToeBoard.playerXArray.push(coordinates);
    cell.innerHTML = 'X';
  } else {
    ticTacToeBoard.playerYArray.push(coordinates);
    cell.innerHTML = 'O';
  };
  return coordinates;
};


function playerMove() {
  if (ticTacToeBoard.player === "X") {
    
  }
};