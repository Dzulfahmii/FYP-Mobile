import LoginPage from "../components/Login/LoginPage.vue";
import AppPage from "../components/AppPage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import SupplierPage from "../components/SupplierPage.vue";
import AssetPage from "../components/Asset/AssetPage.vue";
import OwnerPage from "../components/Asset/Owner/OwnerPage.vue";
import LocationPage from "../components/Asset/Location/LocationPage.vue";
import CategotyPage from "../components/Asset/Category/CategoryPage.vue";


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
            },
            {
                path: 'owner',
                name: 'Owner',
                component: OwnerPage,
                auth: true
            },
            {
                path: 'location',
                name: 'Location',
                component: LocationPage,
                auth: true
            },
            {
                path: 'category',
                name: 'Category',
                component: CategotyPage,
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