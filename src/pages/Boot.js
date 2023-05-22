import { Settings, Lightning, Router, Utils } from '@lightningjs/sdk'

export default class Boot extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0x6b6b6b6b,
      Header: {
        mount: 0.5,
        x: 960,
        y: 340,
        text: {
          text: 'Boot Page',
          fontFace: 'Bold',
          fontSize: 256,
        },
      },
      Cloud: {
        src: Utils.asset('images/cloud.png'),
      },
      Arrows: {
        Enter: {
          mountX: 0.5,
          x: 960,
          y: 980,
          text: { text: 'press [enter] to resume to link / deeplink', fontFace: 'Regular' },
        },
      },
    }
  }

  _handleEnter() {
    console.log('INSPECTOR', Settings.get('platform', 'inspector'))
    Router.resume()
  }

  _init() {
    // Initialize the cloud position to the left of the screen
    this.tag('Cloud').x = -this.tag('Cloud').renderWidth

    // Create an animation
    this.animation = this.tag('Cloud').animation({
      duration: 10, // The duration of the animation in seconds. Adjust to your liking.
      repeat: -1, // Repeat indefinitely
      actions: [
        { p: 'x', v: { 0: -this.tag('Cloud').renderWidth, 1: this.stage.w } }, // Moves the cloud from the left of the screen to the right
      ],
    })
  }
  _active() {
    this.animation.start()
  }
}
