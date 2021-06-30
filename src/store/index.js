import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainData: {},
    teachers: [],
    jwt: '',
    userData: null
    
  },
  mutations: {
    setMainData(state, it){
      state.mainData = it
    },
    setTeachers(state, it){
      state.teachers = it
    },
    setJwt(state,it){
      state.jwt = it
    },
    setUserData(state, it){
      state.userData = it
    }

  },
  actions: {
  },
  modules: {
  }
})
