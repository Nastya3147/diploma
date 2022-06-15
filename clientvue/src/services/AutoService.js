import Api from '../services/Api'

export default {
  getUser (params) {
    return Api().post('/user/login',params)
  },

}
