function collectBomb(player, bomb) {
  bomb.disableBody(true, true);

  this.score -= 2;
  this.scoreText.setText('Score: ' + this.score);
}

export default collectBomb;
