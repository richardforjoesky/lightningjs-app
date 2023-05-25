import { Settings, Lightning, Router, Utils, Metrics } from '@lightningjs/sdk'

export default class Boot extends Lightning.Component {
  static _template() {
    const timingFunction = 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0x6b6b6b6b,
      Header: {
        _testId: 'BOOT_TITLE',
        mount: 0.5,
        x: 960,
        y: 340,
        text: {
          _testId: 'BOOT_TITLE_TEXT',
          text: 'Boot Page',
          fontFace: 'Bold',
          fontSize: 256,
        },
      },
      Cloud: {
        _testId: 'BOOT_CLOUD',
        src: Utils.asset('images/cloud.png'),
      },
      Spinner: {
        _testId: 'BOOT_SPINNER',
        src: Utils.asset('images/spinner.png'),
        mountX: 0.5,
        x: 960,
        y: 920,
        alpha: 0.001,
        color: 0xaaffffff,
        transitions: {
          alpha: { duration: 1, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)' },
        },
      },
      Footer: {
        _testId: 'BOOT_FOOTER',
        Enter: {
          _testId: 'BOOT_FOOTER_ENTER',
          mountX: 0.5,
          x: 960,
          y: 980,
          text: {
            text: 'press [enter] to resume to link / deeplink',
            fontFace: 'Regular',
          },
        },
      },
    }
  }

  get id() {
    return 'boot-page'
  }

  _handleEnter() {
    console.log('INSPECTOR', Settings.get('platform', 'inspector'))
    Router.resume()
  }

  _init() {
    // Initialize the cloud position to the left of the screen
    Metrics.app.launch()
    Metrics.app.loaded()
    Metrics.app.close()
    Metrics.app.ready()
    Metrics.page.leave('Boot', { user: 'me' })

    this.tag('Cloud').x = -this.tag('Cloud').renderWidth

    this.tag('Spinner').on('txLoaded', () => {
      this.tag('Spinner').setSmooth('alpha', 1)
      this._spinnerAnimation.start()
    })
    // Spinner animation
    this._spinnerAnimation = this.animation({
      duration: 1,
      repeat: -1,
      actions: [
        {
          t: 'Spinner',
          p: 'rotation',
          sm: 0,
          v: function (t) {
            if (t < 0.125) {
              return 45 * (Math.PI / 180)
            } else if (t < 0.25) {
              return 90 * (Math.PI / 180)
            } else if (t < 0.375) {
              return 135 * (Math.PI / 180)
            } else if (t < 0.5) {
              return 180 * (Math.PI / 180)
            } else if (t < 0.625) {
              return 225 * (Math.PI / 180)
            } else if (t < 0.75) {
              return 270 * (Math.PI / 180)
            } else if (t < 0.875) {
              return 315 * (Math.PI / 180)
            } else if (t < 1) {
              return 360 * (Math.PI / 180)
            }
          },
        },
      ],
    })
    // Create an animation
    this.cloudAnimation = this.tag('Cloud').animation({
      duration: 10, // The duration of the animation in seconds. Adjust to your liking.
      repeat: -1, // Repeat indefinitely
      actions: [
        { p: 'x', v: { 0: -this.tag('Cloud').renderWidth, 1: this.stage.w } }, // Moves the cloud from the left of the screen to the right
      ],
    })
  }
  _active() {
    this.cloudAnimation.start()
  }

  _inactive() {
    this._spinnerAnimation.stop()
  }
}
