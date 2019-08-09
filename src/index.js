import Phaser from 'phaser';
//import global from '../javascript/global';
//import logoImg from './assets/logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import playGame from '../javascript/playGame';
import buildConfig from '../javascript/buildConfig';
import resize from '../javascript/resize';

//main game here

window.onload = function() {
  let gameConfig = buildConfig(playGame);
  //let game = new Phaser.Game(gameConfig);
  let game = new playGame(gameConfig);
  window.focus();
  game.resize();
  window.addEventListener('resize', resize, false);
};

ReactDOM.render(<App />, document.getElementById('root'));
