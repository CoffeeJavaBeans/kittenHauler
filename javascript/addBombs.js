import Phaser from 'phaser';
function addBombs(child) {
  child.setBounceY(Phaser.Math.FloatBetween(0, 1)).setOrigin(0, 0);
  child
    .setVelocityX(Phaser.Math.FloatBetween(0, 50))
    .setOrigin(0, 0)
    .setGravity(0, 10);
}

export default addBombs;
