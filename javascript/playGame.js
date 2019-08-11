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
import collectCat from './collectCat';
import scoreT from './scoreT';
import addBombs from './addBombs';
import collectBomb from './collectBomb';

class playGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
    this.gameOptions = global;
    this.gameConfig = buildConfig(this);
    this.game = new Phaser.Game(this.gameConfig);
    this.player = '';
    this.platform = '';
    this.cat = '';
    this.bombs = '';
    this.score = 0;
    this.timedEvent = null;
    this.scoreText = 'testing one two';
  }
}

playGame.prototype.preload = preload;
playGame.prototype.addCats = addCats;
playGame.prototype.addBombs = addBombs;
playGame.prototype.collectBomb = collectBomb;
playGame.prototype.collectCat = collectCat;
playGame.prototype.create = create;
playGame.prototype.addPlatform = addPlatform;
playGame.prototype.jump = jump;
playGame.prototype.update = update;
playGame.prototype.resize = resize;
playGame.prototype.scoreT = scoreT;

export default playGame;
