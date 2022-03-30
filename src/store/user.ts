import { computed, reactive } from 'vue'
import * as Request from '../services/request'

const state = reactive({
  name: '',
  username: '',
  error: ''
})

const getters = reactive({
  isLogged: computed(() => state.username !== '')
})

const actions = {
  async getUser (): Promise<void> {
    const user = await Request.getUser()
    if (user === null) return

    state.name = user.name
    state.username = user.username
  },
  async logout (): Promise<void> {
    state.name = ''
    state.username = ''
  },
  async login (username: string, password: string): Promise<boolean> {
    const user = await Request.login(username, password)
    if (user == null) {
      state.error = 'Usuário não encontrado'
      setTimeout(() => { state.error = '' }, 2000)
      return false
    }

    state.name = user.name
    state.username = username
    state.error = ''
    return true
  },
  async register (name: string, username: string, password: string) : Promise<boolean> {
    const response = await Request.register(name, username, password)
    if (!response) {
      state.error = 'Usuário já cadastrado'
      setTimeout(() => { state.error = '' }, 5000)
      return false
    }
    return true
  }
}

export default { state, getters, ...actions }
