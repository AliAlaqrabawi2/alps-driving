import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        // will match everything
        path: '*',
        component: () => import('../views/404.vue'),
    },
    {
        path: '/',
        name: 'Home',
        redirect: '/admin-listing',
    },

    {
        path: '/admin-listing',
        name: 'admin-listing',
        layout: "dashboard",
        component: () => import( '../views/admin/AdminListing.vue') ,
        beforeEnter(to, from, next) {
            const user = localStorage.getItem("user") ;
            if (user===null){
                next("/sign-in")
            }
            else {
                next();
            }
        }

    },
    {
        path: '/admin-creating',
        name: 'admin-creating',
        layout: "dashboard",
        component: () => import( '../views/admin/AdminCreating.vue'),
        beforeEnter(to, from, next) {
            const user = localStorage.getItem("user") ;
            if (user===null){
                next("/sign-in")
            }
            else {
                next();
            }
        }
    },
    {
        path: '/admin-editing/:id',
        name: 'admin-editing',
        layout: "dashboard",
        component: () => import('../views/admin/AdminEditing.vue'),
        beforeEnter(to, from, next) {
            const user = localStorage.getItem("user") ;
            if (user===null){
                next("/sign-in")
            }
            else {
                next();
            }
        }
    },





    {
        path: '/sign-in',
        name: 'Sign-In',
        component: () => import('../views/Sign-In.vue'),
    },

]

function addLayoutToRoute(route, parentLayout = "default") {
    route.meta = route.meta || {};
    route.meta.layout = route.layout || parentLayout;

    if (route.children) {
        route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.meta.layout));
    }
    return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
        return {
            x: 0,
            y: 0,
            behavior: 'smooth',
        }
    }

})
router.beforeEach((to, from, next)=>{
        if (to.fullPath==='/sign-in'){
            localStorage.getItem("user")!==null ? next("/"):next();
        }
        else {
            next();
        }
})

export default router
