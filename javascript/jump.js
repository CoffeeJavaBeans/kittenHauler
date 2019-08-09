// the player jumps when on the ground, or once in the air as long as there are jumps left and the first jump was on the ground
function jump() {
  if (
    this.player.body.touching.down ||
    (this.playerJumps > 0 && this.playerJumps < this.gameOptions.jumps)
  ) {
    if (this.player.body.touching.down) {
      this.playerJumps = 0;
    }
    this.player.setVelocityY(this.gameOptions.jumpForce * -1);
    this.playerJumps++;
  }
}

export default jump;
