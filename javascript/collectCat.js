import Phaser from 'phaser';

function collectCat(player, cat) {
  cat.disableBody(true, true);

  this.score += 1;
  //scoreText.setText('Score: ' + score);

  // if (this.score % 5 === 0) {
  //   this.cats.children.iterate(function(child) {
  //     child.enableBody(true, child.x, 0, true, true);
  //   });

  // let x =
  //   player.x < 400
  //     ? Phaser.Math.Between(400, 800)
  //     : Phaser.Math.Between(0, 400);

  // let bomb = bombs.create(x, 3, 'bomb');
  // bomb.setBounce(1);
  // bomb.setCollideWorldBounds(true);
  // bomb.setVelocity(Phaser.Math.Between(-20, 20), 5);
  // }
}

export default collectCat;
