import { createStore } from 'vuex'
import header from './header'
import fifth from './fifth'
import chatBot from './chatBot'

export default createStore({
  modules: {
    header,
    fifth,
    chatBot
  }
})
