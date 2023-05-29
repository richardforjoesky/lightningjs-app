import { Lightning, Utils } from '@lightningjs/sdk'
import About from './../views/About'
import Fallback from './../views/Fallback'
import GameView from './../views/GameView'
import Main from './../views/Main'

const FONT_FAMILY = 'Roboto-Regular'

export default class Games extends Lightning.Component {
  static getFonts() {
    return [{ family: FONT_FAMILY, url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      src: Utils.asset('game/background.png'),
      zIndex: -10,

      Main: {
        type: Main,
        alpha: 0,
        signals: { select: 'menuSelect' },
      },

      Fallback: {
        type: Fallback,
        alpha: 0,
      },

      Game: {
        type: GameView,
        alpha: 0,
        signals: { back: 'back' },
      },

      About: {
        type: About,
        alpha: 0,
      },
    }
  }

  _setup() {
    console.log('Games - setup')
    this.tag('Main').setSmooth('alpha', 1)
    console.log('Games - setup_setState("Main")')
    this._setState('Main')
    // this.signal('loaded')
  }

  _getFocused() {
    console.log('Games - _getFocused')
    return this.tag('Main')
  }

  // _handleEnter() {
  //   this.signal('select', { item: this.tag('Menu').activeItem })
  // }

  static _states() {
    return [
      class Main extends this {
        $enter() {
          console.log('Games - _states:enter')
          this.tag('Main').patch({
            smooth: { alpha: 1, y: 0 },
          })
        }

        $exit() {
          console.log('Games - Main_states:exit')
          this.tag('Main').patch({
            smooth: { alpha: 0, y: 100 },
          })
        }

        start() {
          console.log('Games - Main_states:start')
          this._setState('Game')
        }

        about() {
          console.log('Games - Main_states:about')
          this._setState('About')
        }

        exit() {
          console.log('Games - Main_states:exit')
          this.application.closeApp()
        }

        menuSelect({ item }) {
          console.log('Games - Main_states:menuSelect')
          if (this._hasMethod(item.action)) {
            return this[item.action]()
          } else {
            this._setState('Fallback')
          }
        }
      },

      class Game extends this {
        $enter() {
          console.log('Games - Game_states:enter')
          this.tag('Game').setSmooth('alpha', 1)
        }

        $exit() {
          console.log('Games - Game_states:exit')
          this.tag('Game').setSmooth('alpha', 0)
        }

        _getFocused() {
          console.log('Games - Game_states:getFocused')
          return this.tag('Game')
        }

        back() {
          console.log('Games - Game_states:back')
          this._setState('Main')
        }
      },

      class Fallback extends this {
        $enter() {
          this.tag('Fallback').setSmooth('alpha', 1)
        }

        $exit() {
          this.tag('Fallback').setSmooth('alpha', 0)
        }

        _getFocused() {
          return this.tag('Fallback')
        }

        _handleEnter() {
          this._setState('Main')
        }

        _handleMenu() {
          this._setState('Main')
        }
      },

      class About extends this {
        $enter() {
          this.tag('About').setSmooth('alpha', 1)
        }

        $exit() {
          this.tag('About').setSmooth('alpha', 0)
        }

        _handleEnter() {
          this._setState('Main')
        }

        _handleMenu() {
          this._setState('Main')
        }
      },
    ]
  }
}
