import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/home/HomePage'
import AccordionEditor from './components/accordion/AccordionEditor'
import TableEditor from './components/table/TableEditor'
import TemplateEditor from './components/custom/CustomTemplateEditor'
import CanvasCourse from './components/canvas/CanvasForm'
import WaitingScreen from './components/canvas/WaitingScreen'

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
        path:'/canvas',
        name:'Populate Canvas Course',
        component: CanvasCourse
    },
    {
        path:'/wait',
        name:'Waiting Screen',
        component: WaitingScreen
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;