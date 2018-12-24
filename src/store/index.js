import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)

import index from './IndexModule'

export default new Vuex.Store({
    modules: {
        index
    }
})