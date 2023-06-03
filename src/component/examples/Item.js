import { Lightning, Utils } from '@lightningjs/sdk'

export class Item extends Lightning.Component {
  static _template() {
    return {
      Image: {
        x: 10,
        y: 10,
        w: 200,
        h: 200,
        src: Utils.asset(''),
      },
      Title: {
        y: 220,
        w: 220,
        mountX: 0.5,
        x: 110,
        text: { text: '', fontFace: 'Regular', fontSize: 20 },
      },
      Subtitle: {
        y: 250,
        w: 220,
        mountX: 0.5,
        x: 110,
        text: { text: '', fontFace: 'Regular', fontSize: 16 },
      },
    }
  }

  set item(v) {
    this.tag('Image').src = Utils.asset(v.image)
    this.tag('Title').text.text = v.title
    this.tag('Subtitle').text.text = v.subtitle
  }

  _focus() {
    this.setSmooth('scale', 1.1)
  }

  _unfocus() {
    this.setSmooth('scale', 1)
  }
}
