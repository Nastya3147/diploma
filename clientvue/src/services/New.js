import Api from '../services/Api'

export default {
  add (params) {
    return Api().post('/tasks/create', params)
  },
  fetchTasks() {
    return Api().get("/tasks")
  },
  update (params) {
    return Api().patch('/tasks/'+params.id, params)
  },

}
