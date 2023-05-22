// we import all the pages that we want to add to our app
import { Home, Boot, Browse, Error } from '../pages'

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
  root: 'home',
  // Next we can define the rest of our routes
  routes: [
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
      path: 'browse',
      component: Browse,
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
    return true
  },
}
