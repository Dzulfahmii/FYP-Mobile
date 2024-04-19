import LoginPage from "../components/Login/LoginPage.vue";
import AppPage from "../components/AppPage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import SupplierPage from "../components/SupplierPage.vue";
import AssetPage from "../components/Asset/AssetPage.vue";


const routes =  [
    {
        path: '/app',
        component: AppPage,
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: HelloWorld,
                auth: true
            },
            {
                path: 'suppliers',
                name: 'Suppliers',
                component: SupplierPage,
                auth: true
            },
            {
                path: 'asset',
                name: 'Asset',
                component: AssetPage,
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