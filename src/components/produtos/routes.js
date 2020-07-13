export default [

    {
        path:'/produtos',
        name:'ProdutosIndex',
        component:()=>import('./ProdutosIndex')
    },
    {
        path:'/produtos_add',
        name:'ProdutosAdd',
        component:()=>import('./ProdutosAdd')
    },
    {
        path:'/produtos_edit',
        name:'ProdutosEdit',
        component:()=>import('./ProdutosEdit')
    },
]

export {default as routes} from './routes';