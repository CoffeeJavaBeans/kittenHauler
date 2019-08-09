import Phaser from 'phaser';

function addPlatform(platformWidth, posX) {
  let platform = this.platform;
  if (this.platformPool.getLength()) {
    platform = this.platformPool.getFirst();
    platform.x = posX;
    platform.active = true;
    platform.visible = true;
    this.platformPool.remove(platform);
  } else {
    platform = this.physics.add.sprite(
      posX,
      this.game.config.height * 0.8,
      'platform'
    );
    platform.setImmovable(true);
    platform.setVelocityX(this.gameOptions.platformStartSpeed * -1);
    this.platformGroup.add(platform);
  }
  platform.displayWidth = platformWidth;
  this.nextPlatformDistance = Phaser.Math.Between(
    this.gameOptions.spawnRange[0],
    this.gameOptions.spawnRange[1]
  );
}

export default addPlatform;
