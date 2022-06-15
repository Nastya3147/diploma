import Vue from 'vue'
import Router from 'vue-router'
import Kalendar from '../components/Kalendar'
import Auto from '../components/auth/Auto'
import Registr from '../components/Registr'
import Profil from '../components/Profil'
import Log from '../components/Log'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/log',
      name: 'Log',
      component: Log,


    },
    {
      path: '/auto',
      name: 'Auto',
      component: Auto,




    },
    {
      path: '/kal',
      name: 'Kalendar',
      component: Kalendar,
      meta: { requiresAuth: true }
    },
    {
      path: '/reg',
      name: 'Registr',
      component: Registr,
    },
    {
      path: '/profil',
      name: 'Profil',
      component: Profil,
      meta: { requiresAuth: true }


    },

  ]
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    console.log(to.matched.some(record => record.meta.requiresAuth))
    if (localStorage.getItem('jwtToken') == null) {
      next({
        path: '/log',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
      let user = JSON.parse(localStorage.getItem('user'))

    }
  } else if(to.matched.some(record => record.meta.guest)) {
    console.log(to.matched.some(record => record.meta.guest))
    if(localStorage.getItem('jwtToken') == null){
      next()
    }
    else{
      next({ name: 'Log'})
    }
  }else {
    next()
  }
})

export default router

