import { Lightning, Utils, Router } from '@lightningjs/sdk'
import { ListItems } from '../component/listComponent'
import { Main } from '../component/examples/Main'

export default class List extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        src: Utils.asset('images/Background-old-field-harvest.jpg'),
      },
      Overlay: {
        rect: true,
        w: 1920,
        h: 1080,
        colorTop: 0xffffffff,
        color: 0x19000000,
      },
      Header: {
        mount: 0.5,
        x: 960,
        y: 340,
        text: {
          text: 'Harvesting Innovation',
          fontFace: 'Bold',
          fontSize: 128,
        },
        List: {
          y: 150,
          flex: { direction: 'row' },
          children: [
            {
              type: ListItems,
              Label: { text: { text: 'Item 1' } },
            },
            {
              type: ListItems,
              x: 100,
              Label: { text: { text: 'Item 2' } },
            },
            {
              type: ListItems,
              x: 200,
              Label: { text: { text: 'Item 3' } },
            },
          ],
        },
      },
    }
  }

  // https://lightningjs.io/examples/#/advanced/slider

  _init() {
    // Initialize the cloud position to the left of the screen
  }

  _active() {}

  _handleLeft() {}

  _handleRight() {}

  _handleBack() {
    Router.navigate('menu', false)
  }

  _getFocused() {
    return this.tag('List')
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
