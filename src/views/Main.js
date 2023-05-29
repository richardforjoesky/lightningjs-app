import { Lightning } from '@lightningjs/sdk'
import Logo from '../component/game/logo/index'
import Menu from '../component/game/main-menu/Menu'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Logo: {
        type: Logo,
        mount: 0.5,
        x: 960,
        y: 300,
        w: 300,
        h: 300,
        shader: { type: Lightning.shaders.FadeOut, fade: 20 },
      },
      Menu: {
        x: 600,
        y: 500,
        type: Menu,
        items: [
          { label: 'New game', action: 'start' },
          { label: 'About', action: 'about' },
          { label: 'Exit', action: 'exit' },
        ],
      },
    }
  }

  _getFocused() {
    return this.tag('Menu')
  }

  _handleEnter() {
    console.log('Main - handleEnter')
    this.signal('select', { item: this.tag('Menu').activeItem })
  }
}
