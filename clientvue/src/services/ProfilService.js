import Api from '../services/Api'

export default {
  getU (params) {
    return Api().get('/user/found/'+ params.id)
  },
  Log (params) {
    return Api().post('/user/logout/', params)
  },
  updateUser (params) {
    return Api().patch('/user/'+params.id, params)
  },
  getMe (params) {
    return Api().get('/user/me', params)
  },
  Img (params) {
    return Api().patch('/user/upload_files/'+params.id, params.body)
  },

}
