export default [
    {
        path:'/marcas',
        name:'MarcasIndex',
        component:()=>import('./MarcasIndex')
    },
    {
        path:'/marcas_add',
        name:'MarcasAdd',
        component:()=>import('./MarcasAdd')
    },
    {
        path:'/marcas_edit',
        name:'MarcasEdit',
        component:()=>import('./MarcasEdit')
    }
]

export {default as routes} from './routes';

/*webpackChunkName: "MarcasIndex" */