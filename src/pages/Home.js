import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { MyComponent } from './../component/component'

export default class Home extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Header: {
        rect: true,
        w: window.innerWidth,
        h: 50,
        color: 0xff005500,
        Title: {
          x: 960,
          mountX: 1,
          mountY: 0.5,
          y: 30,
          text: { text: 'Header' },
          OverlayGradient: {
            w: (w) => 0.25 * w,
            rect: true,
            colorLeft: 0xff000000,
            colorRight: 0x00000000,
          },
        },
      },
      Logo: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 600,
        src: Utils.asset('images/logo.png'),
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: "Let's start Building!",
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
      LilLightning: { x: 1000, y: 100, src: Utils.asset('images/bad-experience.png') },
      RectangleDefault: {
        x: 100,
        y: 100,
        w: 200,
        h: 100,
        rect: true,
      },
      RectangleWithColor: {
        x: 400,
        y: 100,
        w: 200,
        h: 100,
        rect: true,
        color: 0xff1c27bc,
      },
      RectangleWithGradientTopBottom: {
        x: 100,
        y: 300,
        w: 200,
        h: 100,
        rect: true,
        colorTop: 0xff636efb,
        colorBottom: 0xff1c27bc,
      },
      RectangleWithGradientLeftRight: {
        x: 400,
        y: 300,
        w: 200,
        h: 100,
        rect: true,
        colorLeft: 0xff636efb,
        colorRight: 0xff1c27bc,
      },
      RectangleWithGradientDiagonal: {
        x: 100,
        y: 500,
        w: 200,
        h: 100,
        rect: true,
        colorUl: 0xff636efb,
        colorUr: 0xff00ff00,
        colorBr: 0xff1c27bc,
        colorBl: 0xff00ff00,
      },
      RectangleWithGradientDiagonalMixed: {
        x: 400,
        y: 500,
        w: 200,
        h: 100,
        rect: true,
        colorLeft: 0xff00ff00,
        colorBr: 0xff1c27bc,
        colorUr: 0xffff0000,
      },
      MyComponentInstance: {
        type: MyComponent,
        someData: { test: 'test' },
      },
    }
  }

  set persist(args) {
    console.log('we received data:', args)
  }

  _init() {
    console.log('INIT')
    // Tags are used to reference objects inside a template.
    console.log('BACKGROUND', this.tag('Background'))
    this.myFunction()
    this.tag('Background')
      .animation({
        duration: 15,
        repeat: -1,
        actions: [
          {
            t: '',
            p: 'color',
            v: {
              0: { v: 0xfffbb03b },
              0.5: { v: 0xfff46730 },
              0.8: { v: 0xfffbb03b },
            },
          },
        ],
      })
      .start()
  }
  myFunction() {
    console.log('MY-FUNCTION')
  }
  _handleLeft() {
    this.tag('LilLightning').patch({ x: 900 })
  }

  _handleRight() {
    this.tag('LilLightning').patch({ x: 1200 })
  }

  _handleUp() {
    Router.navigate('home/browse')
  }

  _handleDown() {
    this.tag('MyComponentInstance').setFocus(true)
  }

  pageTransition() {
    return 'up'
  }
}
