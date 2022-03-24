import { shallowMount } from '@vue/test-utils'
import Login from '../index.vue'

const wrapper = shallowMount(Login)

describe('Login.vue', () => {
  it('Deve montar o componente', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
  it('botão do form deve conter texto', () => {
    const form = wrapper.find('form')
    expect(form.find('button').text()).toBe('ENTRAR')
  })
  it('botão deve conter texto entrar', () => {
    const button = wrapper.find('button')
    expect(button.text()).toBe('cadastrar')
  })
  it('input deve ter type password', () => {
    const form = wrapper.find('form')
    const div = form.find('.form')
    expect(div.find('input').attributes().type).toBe('password')
  })
  it('input deve ser obrigatório', () => {
    const form = wrapper.find('form')
    const input = form.find('.username').find('input')
    expect(input.attributes().required).toBe('')
  })
})
