import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home' 
import Heroes from '../views/Heroes' 

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/heroes',
        name:'Heroes',
        component:Heroes
    },
    {
        path:'/about',
        name:'About',
        component:About
    }
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router