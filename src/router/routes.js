
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home.vue') },
      { path: '/aboutus', component: () => import('pages/AboutUs.vue') },
      { path: '/activities', component: () => import('pages/Activities.vue') },
      { path: '/contactus', component: () => import('pages/ContactUs.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
