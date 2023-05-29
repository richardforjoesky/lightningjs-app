import { Lightning } from '@lightningjs/sdk'

export default class MenuItem extends Lightning.Component {
  static _template() {
    return {
      text: { text: '', fontFace: 'Roboto-Regular', fontSize: 50 },
    }
  }

  set label(label) {
    this.text.text = label
  }

  set action(action) {
    console.log('MenuItem - set_action', this._action)
    this._action = action
  }

  get action() {
    console.log('Menu - get_action')
    return this._action
  }
}
