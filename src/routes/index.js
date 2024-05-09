import LoginPage from "../components/Login/LoginPage.vue";
import AppPage from "../components/AppPage.vue";
import HelloWorld from "../components/Dashboard.vue";
import CreateAssetPage from "../components/Assets/CreateAssetPage.vue";
import AssetPage from "../components/Assets/Asset/AssetPage.vue";
import OwnerPage from "../components/Assets/Owner/OwnerPage.vue";
import LocationPage from "../components/Assets/Location/CreateLocationPage.vue";
import CategoryPage from "../components/Assets/Category/CreateCategoryPage.vue";
import ReportPage from "../components/Report/ReportPage.vue";
import AssetScan from "../components/AssetScan/AssetScan.vue";
import ViewLocation from "../components/Assets/Location/LocationPage.vue";
import ViewCategory from "../components/Assets/Category/CategoryPage.vue";
import CreateOwner from "../components/Assets/Owner/CreateOwnerPage.vue";
import SupplierPage from "../components/Assets/Supplier/SupplierPage.vue";
import CreateSupplierPage from "../components/Assets/Supplier/CreateSupplierPage.vue";
import AssetsPage from "../components/Assets/AssetsPage.vue";


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
                path: '/asset',
                name: 'Assets',
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
                path: 'asset/:id/edit',
                name: 'EditAsset',
                component: AssetsPage,
                auth: true
            },
            {
              path: 'asset/:id/',
              name: 'asset',
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
            },
            {
                path: 'viewLocation',
                name: 'ViewLocation',
                component: ViewLocation,
                auth: true
            },
            {
                path: 'viewCategory',
                name: 'ViewCategory',
                component: ViewCategory,
                auth: true
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