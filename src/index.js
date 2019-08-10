//import Phaser from 'phaser';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import playGame from '../javascript/playGame';
import resize from '../javascript/resize';

//main game here

window.onload = function() {
  let game = new playGame();
  window.focus();
  game.resize();
  window.addEventListener('resize', resize, false);
};

ReactDOM.render(<App />, document.getElementById('root'));
