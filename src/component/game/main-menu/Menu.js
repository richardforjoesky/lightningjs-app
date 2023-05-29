import { Lightning } from '@lightningjs/sdk'
import MenuItem from './MenuItem'

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      Items: {
        x: 40,
      },
      FocusIndicator: {
        y: 5,
        text: { text: '>', fontFace: 'Roboto-Regular' },
      },
    }
  }

  set items(values) {
    this.tag('Items').children = values.map((el, idx) => {
      return { type: MenuItem, action: el.action, label: el.label, y: idx * 90 }
    })
  }

  get items() {
    console.log('Menu - getItems')
    return this.tag('Items').children
  }

  get activeItem() {
    console.log('Menu - getActiveItem')
    return this.items[this._index]
  }

  _setIndex(idx) {
    console.log('Menu - _setIndex', this._index)
    this.tag('FocusIndicator').setSmooth('y', idx * 90 + 5)
    this._index = idx
  }

  _init() {
    console.log('Menu - _init')
    this._blink = this.tag('FocusIndicator').animation({
      duration: 0.5,
      repeat: -1,
      actions: [{ p: 'x', v: { 0: 0, 0.5: -40, 1: 0 } }],
    })

    this._index = 0
  }

  _active() {
    console.log('Menu - _active')
    this._blink.start()
  }

  _inactive() {
    console.log('Menu - _inactive')
    this._blink.stop()
  }

  _handleUp() {
    console.log('Menu - _handleUp', this._index)
    this._setIndex(Math.max(0, --this._index))
  }

  _handleDown() {
    console.log('Menu - _handleDown', this._index)
    this._setIndex(Math.min(++this._index, this.items.length - 1))
  }
}
