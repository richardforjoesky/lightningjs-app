import { Lightning } from '@lightningjs/sdk'
export class Menu extends Lightning.Component {
  static _template() {
    return {
      List: {
        x: 200,
        y: 300,
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
  }

  //... more code, methods, events...
  // active, attach, detach etc........
}
