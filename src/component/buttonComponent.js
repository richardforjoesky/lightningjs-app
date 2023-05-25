import { Lightning } from '@lightningjs/sdk'
export class Button extends Lightning.Component {
  static _template() {
    return {
      h: 50,
      w: 200,
      rect: true,
      color: 0xff00ff,
      Label: {
        x: 10,
        color: 0xfff1f1f1,
        text: { text: 'CLICK ME', fontSize: 32, fontFace: 'Source Sans Pro' },
      },
    }
  }

  set label(value) {
    this.tag('Label').text = value.toString()
  }

  _focus() {
    this.patch({
      smooth: { color: 0xff377fac },
      Label: {
        smooth: { color: 0xffffffff },
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff },
      Label: {
        smooth: { color: 0xff000000 },
      },
    })
  }
}
