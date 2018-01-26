import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

import {state,mutations} from './mutations.js'

//这个插件是为了让vuex和localStorage结合，正常情况下，刷新页面，vuex的状态都会被情况，结合插件后，状态不会被清空
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    menuPosition: state.menuPosition    //这里把菜单位置加入缓存，防止用户刷新浏览器后，菜单指向不对
  }),
  filter: (mutations) => (
    mutations.type === 'setMenuPosition' ||
    mutations.type === 'setArbitration'
  )
})


Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    plugins: [vuexLocal.plugin]
})
