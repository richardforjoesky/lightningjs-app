import { Lightning } from '@lightningjs/sdk'
import { Item } from './Item'

export class Main extends Lightning.Component {
  static _template() {
    return {
      Items: {
        x: 10,
        y: 50,
        w: 1280,
        type: Lightning.components.ListComponent,
        itemSize: 230,
        horizontal: true,
        roll: true,
        rollMax: 0.5,
        rollMin: 0.5,
        rollPadding: { left: 0, right: 0 },
        viewportSize: 3,
        invertDirection: false,
        clipping: true,
        renderAhead: 2,
        snap: 'force',
        transit: 'onItemSwitch',
        transitSettings: { duration: 0.2, timingFunction: 'ease-out' },
        signals: { selected: true },
        forceSingleFocus: false,
        items: [],
      },
    }
  }

  _init() {
    this.index = 0
    this.tag('Items').items = this.items.map((item, index) => {
      const items = { ref: 'Item' + index, type: Item, item: item }
      console.log('Main', items)
      return items
    })
    console.log('Main Items Tag', this.tag('Items').items)
  }

  _getFocused() {
    return this.tag('Items')
  }

  get items() {
    return [
      { image: 'images/leaf.png', title: 'Title 1', subtitle: 'Subtitle 1' },
      { image: 'images/leaf.png', title: 'Title 2', subtitle: 'Subtitle 2' },
      { image: 'images/leaf.png', title: 'Title 3', subtitle: 'Subtitle 3' },
      { image: 'images/leaf.png', title: 'Title 4', subtitle: 'Subtitle 4' },
      { image: 'images/leaf.png', title: 'Title 5', subtitle: 'Subtitle 5' },
    ]
  }
}
