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
        x: 800,
        y: 900,
        w: 100,
        h: 100,
        rect: true,
        color: 0xff0034dd,
      },
      MyGreenCube: {
        x: 900,
        y: 900,
        w: 100,
        h: 100,
        rect: true,
        color: 0xff24dd00,
      },
    }
  }

  _construct() {
    console.log(this)
  }

  _build() {
    // this.tag('MyBlueCube').text = 'TEST'
  }

  _setup() {
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
      actions: [
        {
          p: 'rotation',
          v: { 0: { v: 0, sm: 0 }, 1: { v: -Math.PI * 2, sm: 0 } },
        },
      ],
    })

    this._greenCubeAnimation = this.tag('MyGreenCube')
      .animation({
        duration: 3,
        repeat: -1,
        stopMethod: 'immediate',
        actions: [
          {
            p: 'rotation',
            v: { 0: { v: 0, sm: 0 }, 1: { v: Math.PI * 2, sm: 0 } },
          },
        ],
      })
      .start()
  }

  static _states() {
    // returns array of classes
    return [
      class MyBlueState extends this {
        call() {
          console.log('MyBlueState')
          this._blueCubeAnimation.pause()
          this._greenCubeAnimation.play()
        }
      },
      class MyGreenState extends this {
        call() {
          console.log('MyGreenState')
          this._blueCubeAnimation.play()
          this._greenCubeAnimation.pause()
        }
      },
    ]
  }

  //... more code, methods, events...
  // active, attach, detach etc........
}
