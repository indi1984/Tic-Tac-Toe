const info = document.querySelector('#info');
const currentPlayer = document.querySelector('#player');
const gameBoard = document.querySelector('#gameBoard');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const tdCells = document.querySelectorAll('td');
const whoWon = document.querySelector('.whoWon');
const winID = document.querySelector('.winID');
const span = document.querySelector('.hidden');
const playerSymbol = document.querySelector('#playerSymbol');
const winTxt = document.querySelector('#winTxt');
const namesForm = document.querySelector('#namesForm');
const form = document.querySelector('form');
const playerXName = document.querySelector('#playerXName');
const playerOName = document.querySelector('#playerOName');


let ticTacToeBoard = {
  player: null,
  playerXName: '',
  playerOName: '',
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
  winVisual: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
};


startButton.addEventListener('click', startingPlayer);
resetButton.addEventListener('click', reset);
gameBoard.addEventListener('click', getCoords);


function startingPlayer(event) {
playerSymbol.classList.remove('hidden');
event.preventDefault();
gameBoard.classList.remove('disabled');
startButton.classList.remove('activeButton');
resetButton.classList.add('activeButton');
startButton.disabled = true;
namesForm.classList.add('hidden');
let starter = Math.floor(Math.random() * 2);
ticTacToeBoard.playerXName = playerXName.value;
ticTacToeBoard.playerOName = playerOName.value;
  if (starter === 1) {
    ticTacToeBoard.player = 'X';
    if (ticTacToeBoard.playerXName) {
      currentPlayer.innerHTML = `${ticTacToeBoard.playerXName} | X`;
    } else {
      currentPlayer.innerHTML = 'X'
    };
  } else {
    ticTacToeBoard.player = 'O';
    if (ticTacToeBoard.playerOName) {
      currentPlayer.innerHTML = `${ticTacToeBoard.playerOName} | O`;
    } else {
      currentPlayer.innerHTML = 'O'
    };
  };

};


function getCoords(event) {  
  const cell = event.target;
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
  if (ticTacToeBoard.player === 'X') {
    cell.innerHTML = "X";
    ticTacToeBoard.player = 'O';
      if (ticTacToeBoard.playerOName) {
        currentPlayer.innerHTML = `${ticTacToeBoard.playerOName} | O`;
      } else {
        currentPlayer.innerHTML = 'O';  
      };
  } else if (ticTacToeBoard.player === 'O') {
    cell.innerHTML = 'O';
    ticTacToeBoard.player = 'X';
      if (ticTacToeBoard.playerXName) {
        currentPlayer.innerHTML = `${ticTacToeBoard.playerXName} | X`;
      } else {
        currentPlayer.innerHTML = 'X';   
      }; 
  };
};


function reset() {
  for (let i = 0; i < tdCells.length; i++) {
    tdCells[i].innerHTML = '';
    tdCells[i].classList.remove('disabled');
    tdCells[i].classList.remove('winCell');
  };
  currentPlayer.innerHTML = "ENTER PLAYER NAMES AND PRESS START";
  ticTacToeBoard.player = null;
  ticTacToeBoard.selectedCell = null;
  ticTacToeBoard.playerOArray = [];
  ticTacToeBoard.playerXArray = [];
  ticTacToeBoard.winningPlayer = false;
  gameBoard.classList.add('disabled');
  whoWon.style.visibility = "hidden";
  winID.innerHTML = ''
  playerSymbol.classList.add('hidden');
  resetButton.classList.remove('activeButton');
  startButton.classList.add('activeButton');
  startButton.disabled = false;
  namesForm.classList.remove('hidden');
  playerOName.value = '';
  playerXName.value = '';
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


  function playerOWins() {
      ticTacToeBoard.player = 'O';
      playerSymbol.classList.add('hidden');
      winTxt.classList.remove('hidden');
      currentPlayer.innerHTML = 'PRESS RESET BUTTON TO START A NEW GAME';
      ticTacToeBoard.winningPlayer = true;
      whoWon.style.visibility = 'visible';
        if (ticTacToeBoard.playerOName) {
        winID.innerHTML = ticTacToeBoard.playerOName;
        } else {
          winID.innerHTML = 'O';
        }
      winVisual();
  };


  function playerXWins() {
      ticTacToeBoard.player = 'X';
      playerSymbol.classList.add('hidden');
      winTxt.classList.remove('hidden');
      currentPlayer.innerHTML = 'PRESS RESET BUTTON TO START A NEW GAME';
      ticTacToeBoard.winningPlayer = true;
      whoWon.style.visibility = 'visible';
        if (ticTacToeBoard.playerXName) {
        winID.innerHTML = ticTacToeBoard.playerXName;
        } else {
        winID.innerHTML = 'X';
        };
      winVisual();
  };

  if (pO0) {
      playerOWins();
      return console.log('pO0');

  } else if (pO1) {
      playerOWins();
      return console.log('pO1');

  } else if (pO2) {
      playerOWins();
       return console.log('pO2');

  } else if (pO3) {
      playerOWins();
      return console.log('pO3');

  } else if (pO4) {
      playerOWins();
      return console.log('pO4');

  } else if (pO5) {
      playerOWins();
      return console.log('pO5');

  } else if (pO6) {
      playerOWins();
      return console.log('pO6');

  } else if (pO7) {
      playerOWins();
      return console.log('pO7');

  } else if (pX0) {
      playerXWins();
      return console.log('pX0');

  } else if (pX1) {
      playerXWins();
      return console.log('pX1');

  } else if (pX2) {
      playerXWins();
      return console.log('pX2');

  } else if (pX3) {
      playerXWins();
      return console.log('pX3');

  } else if (pX4) {
      playerXWins();
      return console.log('pX4');

  } else if (pX5) {
      playerXWins();
      return console.log('pX5');

  } else if (pX6) {
      playerXWins();
      return console.log('pX6');

  } else if (pX7) {
      playerXWins();
      return console.log('pX7');

  } else if (ticTacToeBoard.playerOArray.length >= 5 || ticTacToeBoard.playerXArray.length >= 5) {
      span.classList.add('hidden');
      currentPlayer.innerHTML = 'PRESS RESET BUTTON TO START A NEW GAME';
      whoWon.style.visibility = "visible";
      winID.innerHTML = 'A DRAW!'
      resetButton.classList.add('activeButton');
  };
};


function winVisual() {
  for (let i = 0; i < ticTacToeBoard.winVisual.length; i++) {  
    if (document.getElementById(ticTacToeBoard.winVisual[i][0]).innerHTML === ticTacToeBoard.player &&
      document.getElementById(ticTacToeBoard.winVisual[i][1]).innerHTML === ticTacToeBoard.player  &&
      document.getElementById(ticTacToeBoard.winVisual[i][2]).innerHTML === ticTacToeBoard.player) { 
      ticTacToeBoard.winningPlayer = true;
      document.getElementById(ticTacToeBoard.winVisual[i][0]).classList.add('winCell');
      document.getElementById(ticTacToeBoard.winVisual[i][1]).classList.add('winCell');
      document.getElementById(ticTacToeBoard.winVisual[i][2]).classList.add('winCell');
      resetButton.classList.add('activeButton');
      };
  };
};

