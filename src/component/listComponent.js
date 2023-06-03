import { Lightning, Utils } from '@lightningjs/sdk'
import { ListItem } from '@lightningjs/ui-components'

export class ListItems extends Lightning.Component {
  static _template() {
    return {
      type: ListItem,
      x: 10,
      y: 10,
      w: 200,
      h: 200,
      color: 0xff0000ff,
      Image: {
        src: Utils.asset('images/leaf.png'),
        w: 200,
        h: 200,
      },
      Label: {
        mount: 0.5,
        x: 100,
        y: 200,
        fontFace: 'Regular',
      },
    }
  }

  _focus() {
    this.patch({
      smooth: {
        scaleX: 1.1,
        scaleY: 1.1,
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: {
        scaleX: 1,
        scaleY: 1,
      },
    })
  }
}
