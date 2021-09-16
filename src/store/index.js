import Vue from 'vue'
import Vuex from 'vuex'
import  patient  from "../../services/patientDetails";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[]
  },
  mutations: {
      saveUnsave(state,item){
      const i=  state.items.findIndex(t=> t._id === item._id)
      state.items[i].saved = ! state.items[i].saved
      console.log(state.items[i])
       item.saved=!item.saved
      },

      getAllPatients(state){
        patient.getAllDetails()
        .then( data =>{state.items=data.data /*,console.log(data)*/})
        .catch(err => console.log(err))
      }
  },
  actions: {
    getAllPatients(contex)
    { contex.commit('getAllPatients') }
  },
  getters:{
      unSaved(state){
        return state.items.filter(item => !item.save)
      }
  },
  modules: {
  }
})
