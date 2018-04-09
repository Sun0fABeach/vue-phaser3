import { Scene } from 'phaser'
import background from '../assets/sky.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', background)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
