import { Lightning } from '@lightningjs/sdk'

export class MyComponent extends Lightning.Component {
  static _template() {
    return {
      //component template
    }
  }

  _init() {
    // Fires when a component is instantiated.
    console.log(this.someData) //logs the content of someData
  }

  //... more code, methods, events...
  // active, attach, detach etc........
}
