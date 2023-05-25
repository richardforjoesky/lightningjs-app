import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class Browse extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff000000,
      Header: {
        mount: 0.5,
        x: 960,
        y: 340,
        text: {
          text: 'Browse Page',
          fontFace: 'Bold',
          fontSize: 128,
        },
        Poster: {
          src: 'image.png',
        },
        Score: {
          Imdb: {
            text: { text: '5/7' },
          },
        },
        ContextMenu: {
          Play: {},
          Record: {},
          SetReminder: {},
        },
        longpress: {
          up: 700,
          down: 1500,
          enter: 800,
        },
      },
      Cloud: {
        src: Utils.asset('images/cloud.png'),
      },
    }
  }

  // https://lightningjs.io/examples/#/advanced/slider

  _handleRight() {
    Router.navigate('account')
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

  _handleDownLong() {
    // 1.5s
  }

  _handleUpLong() {
    // 1.5s
  }

  pageTransition() {
    return 'up'
  }
}
