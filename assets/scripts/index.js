'use strict';

require('./example');

const userEvents = require('./users/events');

const gameEvents = require('./game-logic/events');

$(() => {
//  $('.game-board').hide();
//  $('.game-actions').hide();
//  $('#new-game-button').hide();
  $('#createUser').on('submit', userEvents.onCreateUser);
  $('#createUser').on('submit');
  $('#signInUser').on('submit', userEvents.onSignInUser);
  $('#change-password').on('submit', userEvents.onChangePassword);
  $('.sign-out-button').on('click', userEvents.onSignOutUser);
  $('#new-game-button').on('click', gameEvents.onNewGame);
  $('.game-cell').on('click', gameEvents.setGame);
  $('#get-game-by-id').on('submit', gameEvents.onGetGameById);
  $('#get-games-played-button').on('click', gameEvents.onGetGamesPlayed);
  $('.playX').on('click', gameEvents.startOscoscillatorX);
  $('.stopX').on('click', gameEvents.stopOscoscillatorX);
  $('.playO').on('click', gameEvents.startOscoscillatorO);
  $('.stopO').on('click', gameEvents.stopOscoscillatorO);
  $('.game-cell').on('click', gameEvents.playerTone);
});
