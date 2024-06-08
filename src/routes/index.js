import LoginPage from "../components/Login/LoginPage.vue";
import AppPage from "../components/AppPage.vue";
import HelloWorld from "../components/Dashboard.vue";
import CreateAssetPage from "../components/Assets/CreateAssetPage.vue";
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
import CreateReportPage from "../components/Report/CreateReportPage.vue";
import Category from "../components/Category/Category.vue";
import EditAssetPage from "../components/Assets/EditAssetPage.vue";
import QRGeneratorPage from "../components/QRGeneratorPage.vue";

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
                children: [
                    {
                        path: '',
                        name: 'Suppliers',
                        component: SupplierPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'create',
                        name: 'CreateSupplier',
                        component: CreateSupplierPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: ':id',
                        name: 'Supplier',
                        component: ()=> import('../components/Supplier/Supplier.vue'),
                        meta: { requiresAuth: true }
                    }
                ]
            },
            {
                path: 'owners',
                children: [
                    {
                        path: '',
                        name: 'Owners',
                        component: OwnerPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'create',
                        name: 'CreateOwner',
                        component: CreateOwner,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: ':id',
                        name: 'Owner',
                        component: ()=> import('../components/Owner/Owner.vue'),
                        meta: { requiresAuth: true }
                    }
                ]
            },
            {
                path: 'location',
                name: 'Location',
                component: LocationPage,
                auth: true
            },

            {
                path: 'reports',
                children: [
                    {
                        path: '',
                        name: 'Reports',
                        component: ReportPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'create',
                        name: 'CreateReport',
                        component: CreateReportPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: ':id',
                        name: 'Report',
                        component: CreateReportPage,
                        meta: { requiresAuth: true}
                    }
                ]
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
                    },
                    {
                        path: ':id',
                        name: 'location',
                        component: ()=> import('../components/Location/Location.vue'),
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
                    },
                    {
                        path: ':id',
                        name: 'category',
                        component: Category,
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
                    {
                        path: ':id/edit',
                        name: 'EditAsset',
                        component: EditAssetPage,
                        meta: { requiresAuth: true }
                    }
                    // Other Asset Routes...
                ]
            },
            {
                path: 'reports',
                children: [
                    {
                        path: '',
                        name: 'Reports',
                        component: ReportPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: 'create',
                        name: 'CreateReport',
                        component: CreateReportPage,
                        meta: { requiresAuth: true }
                    },
                    {
                        path: ':id',
                        name: 'Report',
                        component: ()=> import('../components/Report/Report.vue'),
                        meta: { requiresAuth: true}
                    }
                ]
            },
            {
                path: 'qr',
                name: 'Qr',
                component: QRGeneratorPage,
                auth: true
            }


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