import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/home/HomePage'
import AccordionEditor from './components/accordion/AccordionEditor'
import TableEditor from './components/table/TableEditor'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/Accordions',
        name:'Accordions',
        component: AccordionEditor
    },
    {
        path:'/Tables',
        name:'Tables',
        component: TableEditor
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;