import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hi there i am using vue with webpack'
  },
  template: '<div id="app">{{ hello }}</div>'
})

//  a json export
export {app}
