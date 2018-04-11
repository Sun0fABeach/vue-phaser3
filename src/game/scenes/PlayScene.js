import { Scene } from 'phaser'


export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    this.add.image(400, 300, 'sky')

    const bomb = this.physics.add.sprite(400, 200, 'bomb')
    bomb.setCollideWorldBounds(true)
    bomb.setBounce(1)
    bomb.setVelocity(200, 20)
  }

  update () {
  }
}
