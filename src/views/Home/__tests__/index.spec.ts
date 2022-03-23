import { shallowMount } from '@vue/test-utils'
import Home from '../index.vue'

const wrapper = shallowMount(Home)

describe('Counter.vue', () => {
  it('Deve exister um elemento h3', () => {
    expect(wrapper.find('h3').exists()).toBe(true)
  })
  it('Componente deve ser do tipo função', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
