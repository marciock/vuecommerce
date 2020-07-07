import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layouts/Home.vue'
import ProdutosIndex from './components/produtos/ProdutosIndex.vue'

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


    ]
})