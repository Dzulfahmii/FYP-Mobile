import LoginPage from "../components/Login/LoginPage.vue";
import AppPage from "../components/AppPage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import SupplierPage from "../components/SupplierPage.vue";



const routes =  [
    {
        path: '/',
        component: AppPage,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: HelloWorld,
                auth: true
            },
            {
                path: 'users',
                name: 'Users',
                component: SupplierPage,
                auth: true
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    }
]
export default routes