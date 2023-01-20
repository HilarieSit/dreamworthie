import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/home/HomePage'
import AccordionEditor from './components/accordion/AccordionEditor'
import TableEditor from './components/table/TableEditor'
import TemplateEditor from './components/custom/CustomTemplateEditor'
import AboutUs from './components/about/AboutUs'
import BlogPage from './components/blog/BlogPage'
import DashBoard from './components/blog/DashBoard'
import LogIn from './components/home/LogIn'
import { auth } from './firebase'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home,
        meta: {
            requiresAuth: false
        }
    },
    {
        path:'/accordions',
        name:'Accordions',
        component: AccordionEditor,
        meta: {
            requiresAuth: false
        }
    },
    {
        path:'/custom',
        name:'Custom Template',
        component: TemplateEditor,
        meta: {
            requiresAuth: false
        }
    },
    {
        path:'/tables',
        name:'Tables',
        component: TableEditor,
        meta: {
            requiresAuth: false
        }
    },
    {
        path:'/about',
        name: 'About Us',
        component: AboutUs,
        meta: {
            requiresAuth: false
        }
    },
    {
        path:'/blog',
        name: 'Blog',
        component: BlogPage,
        meta: {
            requiresAuth: false
        }
    },
    {
        path:'/dashboard',
        name: 'Dashboard',
        component: DashBoard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path:'/login',
        name: 'Login',
        component: LogIn
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser){
        next('/dashboard')
        return;
    }
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
        next('/login')
        return;
    }
    next();
})

export default router;