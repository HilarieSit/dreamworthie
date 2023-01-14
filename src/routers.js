import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/home/HomePage'
import AccordionEditor from './components/accordion/AccordionEditor'
import TableEditor from './components/table/TableEditor'
import TemplateEditor from './components/custom/CustomTemplateEditor'
import AboutUs from './components/about/AboutUs'
import BlogPage from './components/blog/BlogPage'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/accordions',
        name:'Accordions',
        component: AccordionEditor
    },
    {
        path:'/custom',
        name:'Custom Template',
        component: TemplateEditor
    },
    {
        path:'/tables',
        name:'Tables',
        component: TableEditor
    },
    {
        path:'/about',
        name: 'About Us',
        component: AboutUs
    },
    {
        path:'/blog',
        name: 'Blog',
        component: BlogPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;