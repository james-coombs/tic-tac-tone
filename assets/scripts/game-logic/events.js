'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
//const app = require('../app');

// game turn counter, increases with clicks on cells
let gameTurns = 0;
// array for game board values
let gameBoardArray = new Array(9);
// game over variable
let gameIsOver = false;
// variable for X/O switching
let player = 1;

// reset board and 'POST' for new game
const onNewGame = function onNewGame(event) {
  event.preventDefault();
  $('.col-xs-4').text('');
  gameBoardArray = [];
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

// allows player to place x/o of space is unocupied
// adds x/o to index value of array
const setGame = function () {
  let index;
  if (player === 1 && $(this).text() === ''){
      $(this).text('X');
        player = 2;
        gameTurns++;
        api.updateGame();

  } if (player === 2 && $(this).text() === ''){
      $(this).text('O');
        player = 1;
        gameTurns++;
        api.updateGame();

  }
  index = $(this).data('index');
  gameBoardArray[index] = $(this).text();
  console.log(gameBoardArray);
};

//
const allX = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'X') && (cellTwo === 'X') && (cellThree === 'X');
};

//
const allO = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'O') && (cellTwo === 'O') && (cellThree === 'O');
};

//
const xWinRows = function() {
  return allX(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
    allX(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
    allX(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

//
const oWinRows = function() {
  return allO(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
    allO(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
    allO(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

//
const xWinCol = function() {
  return allX(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
    allX(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
    allX(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

//
const oWinCol = function() {
  return allO(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
    allO(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
    allO(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

//
const xWinDiag = function() {
  return allX(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
    allX(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

//
const oWinDiag = function() {
  return allO(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
    allO(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

//
const xWins = function() {
  return xWinRows() || xWinCol() || xWinDiag();
};

//
const oWins = function() {
  return oWinRows() || oWinCol() || oWinDiag();
};

const checkWinner = function(){
  if(xWins('X')) {

    console.log("x win");
    gameBoardArray = [];
    //counter = 0;
    //over = true;
  }else if(oWins('O')){

    console.log("o win");
    gameBoardArray = [];
    //counter = 0;
    //over = true;
}
};

// turns val = 0
//if turns % 1 = O
// if turns % 2 = X

//append array

//if
// horz winner


//if
// vert winner

//if
// diag winner

//else increace turn

// if array full and no winner then draw

module.exports = {
  onNewGame,
  gameBoardArray,
  gameTurns,
  gameIsOver,
  xWins,
  oWins,
  checkWinner,
  setGame,
};
