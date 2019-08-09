const create = function() {
  console.log(this);
  // group with all active platforms.
  this.platformGroup = this.add.group({
    // once a platform is removed, it's added to the pool
    removeCallback: function(platform) {
      platform.scene.platformPool.add(platform);
    }
  });

  // pool
  this.platformPool = this.add.group({
    // once a platform is removed from the pool, it's added to the active platforms group
    removeCallback: function(platform) {
      platform.scene.platformGroup.add(platform);
    }
  });

  // number of consecutive jumps made by the player
  this.playerJumps = 0;

  // adding a platform to the game, the arguments are platform width and x position
  this.addPlatform(this.game.config.width, this.game.config.width / 2);

  // adding the player;
  this.player = this.physics.add.sprite(
    this.gameOptions.playerStartPosition,
    this.game.config.height / 2,
    'player'
  );
  this.player.setGravityY(this.gameOptions.playerGravity);

  // setting collisions between the player and the platform group
  this.physics.add.collider(this.player, this.platformGroup);

  // checking for input
  this.input.on('pointerdown', this.jump, this);
};

export default create;
