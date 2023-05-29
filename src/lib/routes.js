// we import all the pages that we want to add to our app
import { Home, Boot, List, Error, Games } from '../pages'

export default {
  boot: (params) => {
    console.log(params)
    return new Promise((resolve, reject) => {
      resolve()
    })
    // boot request will always fire
    // on root and deeplink
  },
  // First we define a root, this is the hash were the browser will point to
  // at the moment that you boot your app
  root: 'boot',

  // Next we can define the rest of our routes
  routes: [
    {
      // this is a one level deep route.
      path: 'boot',
      // define the attached Component that the Router will show
      // on this route. If configured the Router will create an instance
      component: Boot,
    },
    {
      // this is a one level deep route.
      path: 'home',
      // define the attached Component that the Router will show
      // on this route. If configured the Router will create an instance
      component: Home,
      before() {
        console.log('before home!')
        return Promise.resolve()
      },
    },
    {
      // we can specify deeper route levels
      path: 'list',
      component: List,
    },
    {
      // we can specify deeper route levels
      path: 'games',
      component: Games,
    },
    {
      path: '*',
      component: Error,
    },
    {
      path: '!',
      component: Error,
    },
    {
      path: '$',
      component: Boot,
    },
  ],
  beforeEachRoute: async (from, to) => {
    console.log('beforeEachRoute', from, to)
    return true
  },
}
