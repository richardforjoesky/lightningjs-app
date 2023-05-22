import { Router } from '@lightningjs/sdk'
import routes from './lib/routes'

export default class App extends Router.App {
  /**
   * Start the Router and provide with:
   * - routes configuration
   * - App instance (optional)
   */
  _setup() {
    Router.startRouter(routes)
  }
  _handleAppClose() {
    this.application.closeApp()
  }
}
