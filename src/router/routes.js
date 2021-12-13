import Company from '../pages/Company.vue';
import AboutUs from '../pages/AboutUs.vue';
import Activities from '../pages/Activities.vue'
import Businesses from '../pages/Businesses.vue'
const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }, {
            path: '/company',
            component: Company,
            children: [{
                path: 'about-us',
                component: AboutUs
            }, {
                path: 'activities',
                component: Activities
            }, {
                path: 'businesses',
                component: Businesses
            }]
        }, ]
    },



    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes