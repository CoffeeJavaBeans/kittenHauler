import Phaser from 'phaser';

function addCats(child) {
  child
    .setBounceY(Phaser.Math.FloatBetween(0, 1))
    .setScale(1 / 5)
    .setOrigin(0, 0);
  child
    .setVelocityX(Phaser.Math.FloatBetween(0, 50))
    .setOrigin(0, 0)
    .setGravity(0, 10);
}

export default addCats;
