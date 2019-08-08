function buildConfig(Phaser, playGame) {
  return {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    scene: playGame,
    backgroundColor: 0x444444,
    physcis: {
      default: 'arcade'
    }
  };
}

export default buildConfig;
