import { shallowMount } from '@vue/test-utils'
import Landing from '../index.vue'

const wrapper = shallowMount(Landing)

describe('Landing.vue', () => {
  it('Deve ter um paragraph', () => {
    expect(wrapper.find('p').exists()).toBe(true)
  })

  it('Checa se o redirect do botão vai para o login', () => {
    const button = wrapper.find('a')
    expect(button.attributes().href).toBe('/login')
  })
})
