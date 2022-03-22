import { shallowMount } from '@vue/test-utils'
import Form from '../Form.vue'

const wrapper = shallowMount(Form)

describe('Form.vue', () => {
  it('Deve montar o componente', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
