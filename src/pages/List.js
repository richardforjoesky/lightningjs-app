import { Lightning } from '@lightningjs/sdk'
import { ListItems } from '../component/listComponent'

export default class List extends Lightning.Component {
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
        List: {
          y: 200,
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
        Poster: {
          src: 'image.png',
        },
        ContextMenu: {
          y: 200,
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
    }
  }

  // https://lightningjs.io/examples/#/advanced/slider

  _init() {
    // Initialize the cloud position to the left of the screen
  }

  _active() {}

  _handleLeft() {}

  _handleRight() {}

  _getFocused() {
    return this.tag('List').element
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
