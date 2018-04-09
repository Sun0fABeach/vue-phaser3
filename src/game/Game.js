import Phaser from 'phaser'
import background from '../assets/sky.png'

export default class Game {
  constructor() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      scene: {
        preload: preload,
        create: create
      }
    })
  }
}

function preload() {
  this.load.image('sky', background)
}

function create() {
  this.add.image(400, 300, 'sky')
}

export { Game }
