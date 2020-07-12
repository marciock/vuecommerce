export default [

    {
        path:'/produtos',
        name:'ProdutosIndex',
        component:()=>import('./ProdutosIndex')
    },
]

export {default as routes} from './routes';