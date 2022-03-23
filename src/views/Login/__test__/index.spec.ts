import { shallowMount } from '@vue/test-utils'
import Login from '../index.vue'

const wrapper = shallowMount(Login)

describe('Form.vue', () => {
  it('Deve montar o componente', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
