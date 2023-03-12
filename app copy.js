const info = document.querySelector('#info');
const currentPlayer = document.querySelector('#player');
const gameBoard = document.querySelector('#gameBoard');
const startButton = document.querySelector('#startButton');
const tdCells = document.querySelectorAll('td');
const whoWon = document.querySelector('.whoWon');
const winID = document.querySelector('.winID');


let ticTacToeBoard = {
  player: null,
  winningPlayer: false,
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


startButton.addEventListener('click', startingPlayer);
resetButton.addEventListener('click', reset);
gameBoard.addEventListener('click', getCoords);


function startingPlayer() {
gameBoard.classList.remove('disabled');
let starter = Math.floor(Math.random() * 2);
  if (starter === 1) {
    ticTacToeBoard.player = 'X';
    currentPlayer.innerHTML = ticTacToeBoard.player;
  } else {
    ticTacToeBoard.player = 'O';
    currentPlayer.innerHTML = ticTacToeBoard.player;
  };
};


function getCoords(event) {  
  const cell = event.target;
  checkMoves();
  if (ticTacToeBoard.winningPlayer === false) {
    if (cell.tagName === "TD") {
      let strCoords = cell.dataset.coords;
      const coordinates = parseInt(strCoords);
      assignCoords(coordinates, cell);
    };
  cell.classList.add('disabled');
  checkMoves();
  };
};


function assignCoords(coordinates, cell) {
  let isDisabled = cell.classList.contains('disabled');
  if (!isDisabled) {
    if (ticTacToeBoard.player === 'X' && ticTacToeBoard.player != '') {
      ticTacToeBoard.playerXArray.push(coordinates);
    } else if (ticTacToeBoard.player === 'O' && ticTacToeBoard.player != '') {
      ticTacToeBoard.playerOArray.push(coordinates);
  };
  playerMove(cell);
  };  
};
  

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
  gameBoard.classList.add('disabled');
  whoWon.style.visibility = "hidden";
  winID.innerHTML = ''
};


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
    ticTacToeBoard.player = 'O';
    currentPlayer.innerHTML = 'O';
    ticTacToeBoard.winningPlayer = true;
    whoWon.style.visibility = 'visible';
    winID.innerHTML = ticTacToeBoard.player;
    console.log(ticTacToeBoard.player);
    console.log("WINNER O");
    return true;
  } else if (pX0 || pX1 || pX2 || pX3 || pX4 || pX5 || pX6 || pX7) {
    ticTacToeBoard.player = 'X';
    currentPlayer.innerHTML = 'X';
    ticTacToeBoard.winningPlayer = true;
    whoWon.style.visibility = 'visible';
    winID.innerHTML = ticTacToeBoard.player;
    console.log(ticTacToeBoard.player);
    console.log("WINNER X");
    return true;
  } else if (ticTacToeBoard.playerOArray.length >= 5 || ticTacToeBoard.playerXArray.length >= 5) {
    currentPlayer.innerHTML = '';  
    whoWon.style.visibility = "visible";
    winID.innerHTML = 'A DRAW!'
  };
};

