import Phaser from 'phaser';

function addCats(child) {
  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)).setScale(1 / 5);
  child.setVelocityX(Phaser.Math.FloatBetween(-50, 50));
}

export default addCats;
