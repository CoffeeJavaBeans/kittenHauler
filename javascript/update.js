import Phaser from 'phaser';

function update() {
  // game over
  if (this.player.y > this.game.config.height) {
    this.scene.start('PlayGame');
  }
  this.player.x = this.gameOptions.playerStartPosition;

  // recycling platforms
  let minDistance = this.game.config.width;
  this.platformGroup.getChildren().forEach(function(platform) {
    let platformDistance =
      this.game.config.width - platform.x - platform.displayWidth / 2;
    minDistance = Math.min(minDistance, platformDistance);
    if (platform.x < -platform.displayWidth / 2) {
      this.platformGroup.killAndHide(platform);
      this.platformGroup.remove(platform);
    }
  }, this);

  // adding new platforms
  if (minDistance > this.nextPlatformDistance) {
    var nextPlatformWidth = Phaser.Math.Between(
      this.gameOptions.platformSizeRange[0],
      this.gameOptions.platformSizeRange[1]
    );
    this.addPlatform(
      nextPlatformWidth,
      this.game.config.width + nextPlatformWidth / 2
    );
  }
}
export default update;
