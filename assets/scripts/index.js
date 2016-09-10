'use strict';

require('./example');

const userEvents = require('./users/events');

const gameEvents = require('./game-logic/events');

$(() => {
  $('#createUser').on('submit', userEvents.onCreateUser);
  $('#signInUser').on('submit', userEvents.onSignInUser);
  $('#changePassword').on('submit', userEvents.onChangePassword);
  $('#sign-out-modal-button').on('click', userEvents.onSignOutUser);
  $('#new-game-button').on('click', gameEvents.onNewGame);
  $('.game-cell').on('click', gameEvents.setGame);
  $('.game-cell').on('click', gameEvents.setArray);
  $('.game-cell').on('click', gameEvents.cellPainter);
  $('#new-game-button').on('click', gameEvents.clearGameBoardArray);
  $('.game-cell').on('click', gameEvents.isValidMove);

});
