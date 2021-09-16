import Api from '../services/api'
/* eslint-disable */
export default{
  getAllDetails(){
    return Api().get('/patient');
    },

    updateSavedStatus(item){
      return Api().put('/patient',item);
    },

    deleteSavedPatients(id){
      return Api().delete(`/patient/${id}`)
    }
}
