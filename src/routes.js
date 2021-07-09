import VueRouter from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {},
        component: () => import('./components/image/SearchImages')
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        meta: {},
        component: () => import('./components/pokemon/PokemonList')
    }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router;
