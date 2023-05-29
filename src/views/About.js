import { Lightning } from '@lightningjs/sdk'

const FONT_FAMILY = 'Roboto-Regular'

export default class About extends Lightning.Component {
  static _template() {
    return {
      Logo: {
        y: 200,
        x: 960,

        Title: {
          mountX: 0.5,
          text: {
            text: 'About',
            fontFace: FONT_FAMILY,
            fontStyle: 'bold',
            fontSize: 36,
          },
        },

        Description: {
          mountX: 0.5,
          y: 100,
          w: 750,
          text: {
            text: 'Lighting playground using work developed using LightningJS (https://lightningjs.io) by Rui Lebre (https://ruilebre.com and https://github.com/rlebre).',
            fontSize: 25,
            lineHeight: 55,
            paddingLeft: 0,
            fontFace: FONT_FAMILY,
            fontStyle: 'bold',
            wordWrap: true,
          },
        },
      },
    }
  }
}
