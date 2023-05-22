import { Router, Lightning } from '@lightningjs/sdk'
import routes from './../lib/routes'

export class MyComponent extends Lightning.Component {
  static _template() {
    return {
      ExamplanationText: {
        x: 600,
        y: 800,
        text: {
          text: 'Press up for MyBlueState,\n press down for MyGreenState \n',
          fontSize: 22,
          wordWrap: true,
          wordWrapWidth: 450,
          lineHeight: 30,
        },
      },
      MyBlueCube: {
        x: 960,
        y: 800,
        w: 100,
        h: 100,
        rect: true,
        color: 0xff0034dd,
        text: 'template - text',
      },
      MyGreenCube: {
        x: 1080,
        y: 800,
        w: 100,
        h: 100,
        rect: true,
        color: 0xff24dd00,
      },
      Button: {
        rect: true,
        w: 200,
        h: 50,
        color: 0xff0000ff, // Blue color
        Label: {
          x: 100,
          y: 25,
          mount: 0.5,
          text: {
            text: 'Button',
            fontFace: 'Source Sans Pro',
            textAlign: 'center',
          },
        },
      },
    }
  }

  _construct() {
    console.log(this)
  }

  _focus() {
    // eslint-disable-next-line prettier/prettier
    this.tag('Button').patch({ color: 0xff87CEEB })
  }

  _unfocus() {
    this.tag('Button').patch({ color: 0xff0000ff })
  }

  _handleEnter() {
    // Navigate to home route when enter is pressed
    Router.navigate('home')
  }

  _build() {
    this.tag('MyBlueCube').text = 'template - build - text'
  }

  _setup() {
    this.tag('MyBlueCube').x = 1090
    Router.startRouter(routes, this)
  }

  _handleUp() {
    console.log('up')
    this._setState('MyBlueState')
  }

  _handleDown() {
    console.log('down')
    this._setState('MyGreenState')
  }

  _init() {
    // Fires when a component is instantiated.
    console.log(this.someData) //logs the content of someData

    this._blueCubeAnimation = this.tag('MyBlueCube').animation({
      duration: 3,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [{ p: 'rotation', v: { 0: { v: 0, sm: 0 }, 1: { v: -Math.PI * 2, sm: 0 } } }],
    })
    this._greenCubeAnimation = this.tag('MyGreenCube').animation({
      duration: 3,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [{ p: 'rotation', v: { 0: { v: 0, sm: 0 }, 1: { v: Math.PI * 2, sm: 0 } } }],
    })
  }

  static _states() {
    return [
      class MyBlueState extends this {
        $exit() {
          this._blueCubeAnimation.pause()
        }
        $handleEnter() {
          console.log('enter')
          this._blueCubeAnimation.play()
        }
      },
      class MyGreenState extends this {
        _handleEnter() {
          this._greenCubeAnimation.play()
        }
        $exit() {
          this._greenCubeAnimation.pause()
        }
      },
    ]
  }

  //... more code, methods, events...
  // active, attach, detach etc........
}
