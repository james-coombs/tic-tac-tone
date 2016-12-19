'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const audioCtxX = new (window.AudioContext || window.webkitAudioContext)();
const audioCtxO = new (window.AudioContext || window.webkitAudioContext)();

// game turn counter, increases with clicks on cells
let gameTurns = 0;
// array for game board values
let gameBoardArray = ['', '', '', '', '', '', '', '', '', ];
// game over variable
let gameIsOver = false;
// variable for X/O switching
let player = 'x';

let oscillatorXIsOn = false;

let oscillatorOIsOn = false;

// reset board and 'POST' for new game
const onNewGame = function onNewGame(event) {
  event.preventDefault();
  player = 'x';
  gameIsOver = false;
  gameTurns = 0;
  gameBoardArray = ['', '', '', '', '', '', '', '', '', ];
  $('.col-xs-4').text('');
  $('.game-board').show();
  let data = {};
  player = 'x';
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

const onGetGameById = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // console.log(data);
  //$('.game-board').hide();
  api.getGameById(data)
    .done(ui.getGameByIdSuccess)
    .fail(ui.onError);
};

const onGetGamesPlayed = function (data) {
  event.preventDefault();
  api.getGamesPlayed(data)
    .done(ui.getGamesPlayedSuccess)
    .fail(ui.onError);
    //console.log(data);
};

const gameResolutionTie = function() {
  if (gameTurns === 9) {
    $('.info').text('It is a tie. Press the New Game button to play a new game.');
    gameIsOver = true;
  }
};

const hideBoardAfterResolution = function () {
  if (gameIsOver === true) {
    $('.game-board').hide();
  }
};

const gameResolutionXorO = function() {
  let victor;
  if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[3] === 'x') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[6] === 'x') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[1] === 'x') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'x') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'x') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  }else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[3] === 'o') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[6] === 'o') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[1] === 'o') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    // console.log(victor + ' has won.');
    $('.info').text('the winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'o') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'o') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    // console.log(victor + ' has won.');
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  }
};

const oscillatorX = audioCtxX.createOscillator();
const gainNodeX = audioCtxX.createGain();

oscillatorX.connect(gainNodeX);

gainNodeX.connect(audioCtxX.destination);

oscillatorX.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillatorX.frequency.value = 150; // value in hertz

const stopOscoscillatorX = () => {
  oscillatorXIsOn = false;
  gainNodeX.disconnect(audioCtxX.destination);
};

const startOscoscillatorX = () => {
  oscillatorXIsOn = true;
  {gainNodeX.connect(audioCtxX.destination);
  oscillatorX.start();}
};

const oscillatorO = audioCtxO.createOscillator();
const gainNodeO = audioCtxO.createGain();

oscillatorO.connect(gainNodeO);

gainNodeO.connect(audioCtxO.destination);

oscillatorO.type = 'triangle'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillatorO.frequency.value = 200; // value in hertz

const stopOscoscillatorO = () => {
  oscillatorOIsOn = false;
  gainNodeO.disconnect(audioCtxO.destination);
};

const startOscoscillatorO = () => {
  oscillatorOIsOn = true;
  {gainNodeO.connect(audioCtxO.destination);
  oscillatorO.start();}
};

const stopOscillatorOInterval = window.setInterval(stopOscoscillatorO, 1000);
const stopOscillatorXInterval = window.setInterval(stopOscoscillatorX, 1000);

const switchTone = () => {
  if (player === 'x')
    {startOscoscillatorX(); stopOscoscillatorO();}
  if (player === 'o')
    {startOscoscillatorO(); stopOscoscillatorX();}
  else
    {stopOscoscillatorO(); stopOscoscillatorX();}
};

const setGame = function() {
  let i;
  if (player === 'x' && $(this).text() === '') {
    $(this).text('x');
    gameTurns++;
    player = 'o';
    $('.info').text('it is ' + player + '\'s move');
  }
  if (player === 'o' && $(this).text() === '') {
    $(this).text('o');
    gameTurns++;
    player = 'x';
    $('.info').text('it is ' + player + '\'s move');
  }
  i = $(this).data('index');
  gameBoardArray[i] = $(this).text();
  gameResolutionXorO();
  gameResolutionTie();
  hideBoardAfterResolution();
  api.updateGame(i, $(this).text(), gameIsOver);
  //console.log(gameBoardArray);
};

module.exports = {
  onNewGame,
  onGetGameById,
  gameBoardArray,
  gameTurns,
  gameIsOver,
  setGame,
  gameResolutionXorO,
  gameResolutionTie,
  onGetGamesPlayed,
  hideBoardAfterResolution,
  startOscoscillatorX,
  stopOscoscillatorX,
  startOscoscillatorO,
  stopOscoscillatorO,
  switchTone,
  stopOscillatorOInterval,
  stopOscillatorXInterval,
};
