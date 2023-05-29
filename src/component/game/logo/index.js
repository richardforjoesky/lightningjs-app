import { Lightning, Utils } from '@lightningjs/sdk'

export default class Logo extends Lightning.Component {
  static _template() {
    return {
      x: 100,
      y: 100,
      w: 200,
      h: 200,
      src: Utils.asset('game/logo.png'),
    }
  }
}
