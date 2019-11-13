import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ComponentLibrary from './index.js'

Vue.use(ComponentLibrary)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
