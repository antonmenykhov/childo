import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainData: {},
    teachers: [],
    jwt: '',
    userData: null,
    show: true,
    lessons: []
    
  },
  mutations: {
    setMainData(state, it){
      state.mainData = it;
      it.courses.forEach(course => {
        state.lessons = state.lessons.concat(course.lessons)
      })
    },
    setTeachers(state, it){
      state.teachers = it
    },
    setJwt(state,it){
      state.jwt = it
    },
    setUserData(state, it){
      state.userData = it
    },
    setShow(state, it){
      state.show = it
    }

  },
  actions: {
  },
  modules: {
  },
 
})
