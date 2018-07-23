import { Scene } from 'phaser'
import sky from 'Game/assets/sky.png'
import bomb from 'Game/assets/bomb.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
