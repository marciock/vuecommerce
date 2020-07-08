<template>
    <div>
        <h3>Produtos</h3>
        <TableView v-bind:theads="heads" v-bind:tbodies="md"></TableView>
        <ButtonPlus link="/produtos_add"></ButtonPlus>
    </div>
</template>
<script>
import TableView from '../layouts/TableView';
import ButtonPlus from '../layouts/ButtonPlus';


export default {
    name:'ProdutosIndex',
    components:{TableView,ButtonPlus},
    data:()=>{
        return{
            heads:['Produto','Tipo','Preço'],
            tbody:[{'produto':'X-tudo','tipo':'lanche','preco':'12,00'},{'produto':'X-salada','tipo':'lanche','preco':'13,00'}],
            md:[]
        }
    },
    methods:{
        makeData(){
            this.tbody.forEach(f=>{
                console.log(f)
                let td=`<td>${f.produto}</td><td>${f.tipo}</td><td>${f.preco}</td>`
                this.md.push(td)
            })

        },
    },
    created(){
        this.makeData()
    }
    
}
</script>