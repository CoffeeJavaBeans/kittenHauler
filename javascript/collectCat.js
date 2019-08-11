function collectCat(player, cat) {
  cat.disableBody(true, true);

  this.score += 1;
  this.scoreText.setText('Score: ' + this.score);
}

export default collectCat;
