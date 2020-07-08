<template>
    <div>
        <h3>Produtos</h3>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Produto</th><th>Tipo</th><th>Preço</th><th></th>
                </tr>
                
            </thead>
            <tbody >
                <tr v-for="(tb, index) in tbody" v-bind:key="index">
                    <td>{{tb.produto}}</td> 
                    <td>{{tb.tipo}}</td> 
                    <td>{{tb.preco}}</td>
                    <td><ButtonDel v-bind:tbId="tb.id" /></td>
                    <td><ButtonEdit v-bind:link="tb.id" /></td>
                    
                </tr>

                
            </tbody>
        </table>




        <ButtonPlus link="/produtos_add"></ButtonPlus>
    </div>
</template>
<script>

import ButtonPlus from '../layouts/ButtonPlus';
import ButtonDel from '../layouts/ButtonDel';
import ButtonEdit from '../layouts/ButtonEdit';


export default {
    name:'ProdutosIndex',
    components:{ButtonPlus,ButtonDel,ButtonEdit},
    data:()=>{
        return{
            heads:['Produto','Tipo','Preço'],
            tbody:[{'id':'1','produto':'X-tudo','tipo':'lanche','preco':'12,00'},{'id':'2','produto':'X-salada','tipo':'lanche','preco':'13,00'}],
            md:[],
            
        }
    },
    
    
}
</script>