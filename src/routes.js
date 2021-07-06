import VueRouter from "vue-router";

const routes = [{
    path: '/',
    name: 'home',
    meta: {},
    component: () => import('./components/image/SearchImages')
}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router;
