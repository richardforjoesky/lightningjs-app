import { Router } from '@lightningjs/sdk'
import routes from './lib/routes'

// const inspector = import('@lightningjs/core/devtools/lightning-inspect');
export default class App extends Router.App {
  /**
   * Start the Router and provide with:
   * - routes configuration
   * - App instance (optional)
   */
  _setup() {
    // initFactory(this.stage);
    //     Router.startRouter(routes, this);
    console.log('[routes]', routes)

    Router.startRouter(routes, this)
  }

  _handleAppClose() {
    this.application.closeApp()
  }
}
