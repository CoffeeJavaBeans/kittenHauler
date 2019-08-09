import Phaser from 'phaser';

function buildConfig(playGame) {
  return {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    scene: playGame,
    backgroundColor: 0x664466,
    physics: {
      default: 'arcade'
    }
  };
}

export default buildConfig;
