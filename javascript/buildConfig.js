import Phaser from 'phaser';

function buildConfig(playGame) {
  return {
    type: Phaser.AUTO,
    width: 1000,
    height: 750,
    scene: playGame,
    backgroundColor: 'white',
    physics: {
      default: 'arcade',
      debug: true
    }
  };
}

export default buildConfig;
