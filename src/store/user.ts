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
      return false
    }

    state.name = user.name
    state.username = username
    state.error = ''
    return true
  }
}

export default { state, getters, ...actions }
