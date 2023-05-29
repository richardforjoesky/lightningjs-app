import { Lightning } from '@lightningjs/sdk'
import Menu from '../component/game/main-menu/Menu'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Menu: {
        x: 600,
        y: 400,
        type: Menu,
        items: [
          { label: 'Playground', action: 'home' },
          { label: 'List', action: 'list' },
          { label: 'Tic Tac Toe', action: 'start' },
          { label: 'About', action: 'about' },
          { label: 'Exit', action: 'exit' },
        ],
      },
    }
  }

  _getFocused() {
    console.log('Main - _getFocused')
    return this.tag('Menu')
  }

  _handleEnter() {
    console.log('Main - handleEnter')
    this.signal('select', { item: this.tag('Menu').activeItem })
  }
}
