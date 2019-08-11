import Phaser from 'phaser';
import global from './global';
import buildConfig from './buildConfig';
import resize from './resize';
import preload from './preload';
import create from './create';
import addPlatform from './addPlatform';
import jump from './jump';
import update from './update';
import addCats from './addCats';

class playGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
    this.gameOptions = global;
    this.gameConfig = buildConfig(this);
    this.game = new Phaser.Game(this.gameConfig);
    this.platform = '';
    this.cats = '';
  }
}

playGame.prototype.preload = preload;
playGame.prototype.addCats = addCats;
playGame.prototype.create = create;
playGame.prototype.addPlatform = addPlatform;
playGame.prototype.jump = jump;
playGame.prototype.update = update;
playGame.prototype.resize = resize;

export default playGame;
