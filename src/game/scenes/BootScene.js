import { Scene } from 'phaser'
import sky from 'Game/assets/sky.png'
import bomb from 'Game/assets/bomb.png'
import thudMp3 from 'Game/assets/thud.mp3'
import thudOgg from 'Game/assets/thud.ogg'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
