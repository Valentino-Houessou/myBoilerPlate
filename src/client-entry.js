//  a json import
import {app} from './app'

//  Mount the object app with the element with the id=#app of the DOM
app.$mount('#app')

//  to avoid event propagation notification from hot-middleware
if (module.hot) {
  module.hot.accept()
}
