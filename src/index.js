import { Launch } from '@lightningjs/sdk'
import App from './App.js'

export default function () {
  const keys = {
    keys: {
      38: 'Up',
      40: 'Down',
      37: 'Left',
      39: 'Right',
      13: 'Enter',
      9: 'Back',
      8: 'Back',
      93: 'Back',
      174: 'Back',
      175: 'Menu',
      83: 'Search',
    },
  }
  // const options = { stage: { forceTxCanvasSource: true, memoryPressure: 24e6, canvas2d: true, w: 1920, h: 1080, clearColor: 0xff223366 }, ...keys }
  console.log('Launch', ...arguments)
  return Launch(App, ...arguments)
}
