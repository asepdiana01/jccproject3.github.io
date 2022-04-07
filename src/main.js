import Vue from 'vue'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
        const redirect = sessionStorage.redirect
        delete sessionStorage.redirect
        this.$router.push(redirect)
    }
}
}).$mount('#app')