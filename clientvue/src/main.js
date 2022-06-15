// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'

//CSS-бібліотеки
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './components/css.css'
// import './components/index.js'
import { CalendarPlugin } from 'bootstrap-vue'
Vue.use(CalendarPlugin)
import Slider from '@jeremyhamm/vue-slider'
import { VueQueryPlugin } from "vue-query";
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.use(VueQueryPlugin)
Vue.use(Slider)
import Element from 'element-ui'

Vue.use(Element)
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
// locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi', 'ua', 'no, 'no-nn'
Vue.use(vueEventCalendar, {locale: 'en'})
import PortalVue from 'portal-vue';
Vue.use(PortalVue);
//Використання модуля BootstrapVue
Vue.use(BootstrapVue)
/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
