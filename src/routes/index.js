import LoginPage from "../components/Login/LoginPage.vue";
import AppPage from "../components/AppPage.vue";
import HelloWorld from "../components/Dashboard.vue";
import SupplierPage from "../components/SupplierPage.vue";
import CreateAssetPage from "../components/Asset/CreateAssetPage.vue";
import AssetPage from "../components/Asset/AssetPage.vue";
import OwnerPage from "../components/Asset/Owner/OwnerPage.vue";
import LocationPage from "../components/Asset/Location/LocationPage.vue";
import CategoryPage from "../components/Asset/Category/CategoryPage.vue";
import ReportPage from "../components/Report/ReportPage.vue";
import AssetScan from "../components/AssetScan/AssetScan.vue";


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
                path: 'suppliers',
                name: 'Suppliers',
                component: SupplierPage,
                auth: true
            },
            {
                path: '/asset',
                name: 'Asset',
                component: AssetPage,
                children: [
                    {
                        path: 'create',
                        name: 'CreateAsset',
                        component: CreateAssetPage,
                        auth: true
                    },
                    {
                        path: 'edit/:id',
                        name: 'EditAsset',
                        component: AssetPage,
                        auth: true
                    }
                ],
                auth: true
            },
            {
                path: 'asset/create',
                name: 'CreateAsset',
                component: CreateAssetPage,
                auth: true
            },
            {
                path: 'asset/edit/:id',
                name: 'EditAsset',
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
                component: CategoryPage,
                auth: true
            },
            {
                path: 'report',
                name: 'Report',
                component: ReportPage,
                auth: true
            },
            {
                path: 'scanner',
                name: 'Scanner',
                component: AssetScan,
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