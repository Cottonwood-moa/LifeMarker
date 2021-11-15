import { createStore } from 'vuex'
import header from './header'
import fifth from './fifth'

export default createStore({
  modules: {
    header,
    fifth
  }
})
