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

  _handleLeft() {
    console.log('Left')
    this._setState('MyBlueState')
  }

  _handleRight() {
    console.log('Right')
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

    this._greenCubeAnimation = this.tag('MyGreenCube').animation({
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
  }

  static _states() {
    // returns array of classes
    return [
      class MyBlueState extends this {
        $enter(event) {
          this._blueCubeAnimation.play()
        }
        $exit() {
          this._blueCubeAnimation.pause()
        }
      },
      class MyGreenState extends this {
        $enter() {
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
