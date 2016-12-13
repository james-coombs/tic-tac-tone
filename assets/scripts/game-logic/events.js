'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// game turn counter, increases with clicks on cells
let gameTurns = 0;
// array for game board values
let gameBoardArray = ['', '', '', '', '', '', '', '', '', ];
// game over variable
let gameIsOver = false;
// variable for X/O switching
let player = 'x';



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
    //console.log('Tie');
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

const oscillatorX = audioCtx.createOscillator();
const gainNodeX = audioCtx.createGain();

oscillatorX.connect(gainNodeX);

gainNodeX.connect(audioCtx.destination);

oscillatorX.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillatorX.frequency.value = 150; // value in hertz

const stopOscoscillatorX = () => {
  // gainNodeX.disconnect(audioCtx.destination);
  oscillatorX.stop();
};

const startOscoscillatorX = () => {
  oscillatorX.start();
};

const oscillatorO = audioCtx.createOscillator();
const gainNodeO = audioCtx.createGain();

oscillatorO.connect(gainNodeO);

gainNodeO.connect(audioCtx.destination);

oscillatorO.type = 'triangle'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillatorO.frequency.value = 200; // value in hertz

const stopOscoscillatorO = () => {
  // gainNodeO.disconnect(audioCtx.destination);
  oscillatorO.stop();
};

const startOscoscillatorO = () => {
  oscillatorO.start();
};

//oscillatorO.start();
//
// oscillator.type = 'triangle'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
// oscillator.frequency.value = 300; // value in hertz
// oscillator.start();
//
// let WIDTH = window.innerWidth;
// let HEIGHT = window.innerHeight;
//
// let maxFreq = 6000;
// let maxVol = 1;
//
// let initialFreq = 3000;
// let initialVol = 0.5;
//
// // Mouse pointer coordinates
//
// let CurX;
// let CurY;
//
// // Get new mouse pointer coordinates when mouse is moved
// // then set new gain and pitch values
//
// function updatePage(e) {
//     CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
//     CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//
//     oscillator.frequency.value = (CurX/WIDTH) * maxFreq;
//     gainNode.gain.value = (CurY/HEIGHT) * maxVol;
//
//     //canvasDraw();
// }
//
// document.onmousemove = updatePage;
//
// // set options for the oscillator
//
// oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
// oscillator.frequency.value = initialFreq; // value in hertz
// oscillator.start();
//
// gainNode.gain.value = initialVol;
//
// let mute = document.querySelector('.mute');
//
// mute.onclick = function() {
//   if(mute.id === "") {
//     gainNode.disconnect(audioCtx.destination);
//     mute.id = "activated";
//     mute.innerHTML = "Unmute";
//   } else {
//     gainNode.connect(audioCtx.destination);
//     mute.id = "";
//     mute.innerHTML = "Mute";
//   }
// };


const setGame = function() {
  let i;
  if (player === 'x' && $(this).text() === '') {
    $(this).text('x');
    startOscoscillatorX();
    gameTurns++;
    player = 'o';
    $('.info').text('it is ' + player + '\'s move');
    stopOscoscillatorX();
  }
  if (player === 'o' && $(this).text() === '') {
    $(this).text('o');
    startOscoscillatorO();
    gameTurns++;
    player = 'x';
    $('.info').text('it is ' + player + '\'s move');
    stopOscoscillatorO();
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
};
