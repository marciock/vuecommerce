import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layouts/Home.vue'
import ProdutosIndex from './components/produtos/ProdutosIndex.vue'
import MarcasIndex from './components/marcas/MarcasIndex.vue'
import MarcasAdd from './components/marcas/MarcasAdd.vue'

Vue.use(Router)

export default new Router({
    routes:[
       
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/produtos',
            name:'ProdutosIndex',
            component:ProdutosIndex
        },
        {
            path:'/marcas',
            name:'MarcasIndex',
            component:MarcasIndex
        },
        {
            path:'/marcas_add',
            name:'MarcasAdd',
            component:MarcasAdd
        },


    ]
})