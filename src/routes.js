import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/layouts/Home.vue'

import {routes as produtos} from './components/produtos/routes'; 
import {routes as marcas} from './components/marcas/routes'; 

Vue.use(Router)
   
export default new Router({
    routes:[
             
        ...produtos, 
        ...marcas,
        {
            path:'/',
            name:'Home',
            component:()=>import('@/components/layouts/Home')
        },
       
        


    ]
})