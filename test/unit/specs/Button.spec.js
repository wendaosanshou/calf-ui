import Vue from 'vue'
import button from '../../../src/components/button/button.vue'

describe('button.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(button)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
