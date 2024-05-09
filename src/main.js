import { createApp } from 'vue'
import { result} from './mobile.js'
import { createMemoryHistory, createRouter,createWebHashHistory } from 'vue-router'
import './style.css'
import Application from './Application.vue'
import routes from "./routes/index.js";
import HelloWorld from "./components/Dashboard.vue";
import SupplierPage from "./components/SupplierPage.vue";




const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//localstorage seed authenticated true




router.beforeEach(function (to, from, next) {
    console.log('beforeEach', to.path + ' - Auth: ' + localStorage.getItem('authenticated'))
    if ((to.path !== '/login' && to.path !== 'login') && !localStorage.getItem('authenticated')) {
        next({ path: '/login' })
    } else if ((to.path === '/login' || to.path === 'login') && localStorage.getItem('authenticated')) {
        next({ path: '/app' })
    } else {
        next()
    }
})



createApp(Application).use(router).mount('#app')
