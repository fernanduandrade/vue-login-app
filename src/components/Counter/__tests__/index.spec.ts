import { shallowMount } from '@vue/test-utils'
import Counter from '../Counter.vue'

const wrapper = shallowMount(Counter)

describe('Counter.vue', () => {
  it('Deve exister um elemento h3', () => {
    expect(wrapper.find('h3').exists()).toBe(true)
  })
  it('Componente deve ser do tipo função', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
