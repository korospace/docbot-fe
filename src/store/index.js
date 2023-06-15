import { createStore }  from 'vuex'
import loading        from './modules/loading'
import login          from './modules/login'
import register       from './modules/register'
import dashboardAside from './modules/dashboardAside'
import dashboardChat  from './modules/dashboardChat'

export default createStore({
  state: {
    // apiMiddleware : "https://docbot-middleware.up.railway.app",
    // apiurl : "http://34.128.123.202:5000/api",
    apiMiddleware : "http://127.0.0.1:8000",
    apiurl : "http://127.0.0.1:5000/api",
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loading,
    login,
    register,
    dashboardAside,
    dashboardChat,
  }
})
