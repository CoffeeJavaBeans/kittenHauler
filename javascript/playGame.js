import Phaser from 'phaser';
import global from './global';
import buildConfig from './buildConfig';
import resize from './resize';
import preload from './preload';
import create from './create';
import addPlatform from './addPlatform';
import jump from './jump';
import update from './update';

class playGame extends Phaser.Scene {
  constructor(gameConfig) {
    super('PlayGame');
    this.gameOptions = global;
    //this.gameConfig = buildConfig();
    this.gameConfig = gameConfig;
    this.game = new Phaser.Game(gameConfig);
    this.platform = '';
  }
}

playGame.prototype.preload = preload;
playGame.prototype.create = create;
playGame.prototype.addPlatform = addPlatform;
playGame.prototype.jump = jump;
playGame.prototype.update = update;
playGame.prototype.resize = resize;

export default playGame;
