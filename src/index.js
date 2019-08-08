import Phaser from 'phaser';
//import logoImg from './assets/logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import main from '../javascript';

console.log(main);
//main game here
let game;

let gameOptions = main.global;

//playGame scene
class playGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
  }
}

playGame.prototype.preload = main.preload;

window.onload = function() {
  let gameConfig = main.buildConfig(Phaser, playGame);
  game = new Phaser.Game(gameConfig);
  window.focus();
  //main.resize();
  //window.addEventListener('resize', main.resize, false);
};

ReactDOM.render(<App />, document.getElementById('root'));
