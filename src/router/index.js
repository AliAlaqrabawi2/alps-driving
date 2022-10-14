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
        path: '/trainee-listing',
        name: 'trainee-listing',
        layout: "dashboard",
        component: () => import( '../views/trainee/TraineeListing.vue') ,
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
        path: '/trainee-creating',
        name: 'trainee-creating',
        layout: "dashboard",
        component: () => import( '../views/trainee/TraineeCreating'),
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
        path: '/trainee-editing/:id',
        name: 'trainee-editing',
        layout: "dashboard",
        component: () => import('../views/trainee/TraineeEditing'),
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
        path: '/instructor-listing',
        name: 'instructor-listing',
        layout: "dashboard",
        component: () => import( '../views/instructor/InstructorListing') ,
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
        path: '/instructor-creating',
        name: 'instructor-creating',
        layout: "dashboard",
        component: () => import( '../views/instructor/InstructorCreating'),
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
        path: '/instructor-editing/:id',
        name: 'instructor-editing',
        layout: "dashboard",
        component: () => import('../views/instructor/InstructorEditing'),
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
        path: '/employee-listing',
        name: 'employee-listing',
        layout: "dashboard",
        component: () => import( '../views/employee/EmployeeListing') ,
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
        path: '/employee-creating',
        name: 'employee-creating',
        layout: "dashboard",
        component: () => import( '../views/employee/EmployeeCreating'),
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
        path: '/employee-editing/:id',
        name: 'employee-editing',
        layout: "dashboard",
        component: () => import('../views/employee/EmployeeEditing'),
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
