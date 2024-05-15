import LoginPage from "../components/Login/LoginPage.vue";
import AppPage from "../components/AppPage.vue";
import HelloWorld from "../components/Dashboard.vue";
import CreateAssetPage from "../components/Assets/CreateAssetPage.vue";
import AssetPage from "../components/Assets/AssetPage.vue";
import OwnerPage from "../components/Owner/OwnerPage.vue";
import LocationPage from "../components/Location/LocationPage.vue";
import CategoryPage from "../components/Category/CategoryPage.vue";
import ReportPage from "../components/Report/ReportPage.vue";
import AssetScan from "../components/AssetScan/AssetScan.vue";
import CreateOwner from "../components/Owner/CreateOwnerPage.vue";
import SupplierPage from "../components/Supplier/SupplierPage.vue";
import CreateSupplierPage from "../components/Supplier/CreateSupplierPage.vue";
import AssetsPage from "../components/Assets/AssetsPage.vue";
import Asset from "../components/Assets/Asset.vue";
import CreateCategoryPage from "../components/Category/CreateCategoryPage.vue";
import CreateLocationPage from "../components/Location/CreateLocationPage.vue";

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
                path: 'suppliers/create',
                name: 'CreateSupplier',
                component: CreateSupplierPage,
                auth: true
            },
            {
                path: 'suppliers',
                name: 'Suppliers',
                component: SupplierPage,
                auth: true
            },
            {
                path: 'owner',
                name: 'Owner',
                component: OwnerPage,
                auth: true
            },
            {
                path: 'owner/create',
                name: 'CreateOwner',
                component: CreateOwner,
                auth: true
            },
            {
                path: 'location',
                name: 'Location',
                component: LocationPage,
                auth: true
            },

            {
                path: 'reports',
                name: 'Reports',
                component: ReportPage,
                auth: true
            },
            {
                path: 'scanner',
                name: 'Scanner',
                component: AssetScan,
                auth: true
            },
            {
                path:'locations',
                children: [
{
                        path: '',
                        name: 'locations',
                        component: LocationPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'create',
                        name: 'createLocation',
                        component: CreateLocationPage,
                        meta: { requiresAuth: true }
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        name: 'categories',
                        component: CategoryPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'create',
                        name: 'createCategory',
                        component: CreateCategoryPage,
                        meta: { requiresAuth: true }
                    }
                ]
            },
            {
                path: 'assets',
                children: [
                    {
                        path: '',
                        name: 'Assets',
                        component: AssetsPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'create',
                        name: 'CreateAsset',
                        component: CreateAssetPage,
                        meta: { requiresAuth: true }
                    },

                    {
                        path: ':id',
                        name: 'Asset',
                        component: Asset,
                        meta: { requiresAuth: true }
                    },
                    // Other Asset Routes...
                ]
            },


            // {
            //     path: 'viewReport',
            //     name: 'ViewReport',
            //     component: ViewRe,
            //     auth: true
            // }

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    }
]
export default routes