<template>
    <div>
        <h3>Produtos</h3>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Produto</th><th>Marca</th><th>Preço</th><th></th>
                </tr>
                
            </thead>
            <tbody >
                <tr v-for="tb of table" v-bind:key="tb.id">
                    <td>{{tb.produto}}</td> 
                    <td>{{tb.marca}}</td> 
                    <td>{{tb.preco}}</td>
                    <td><ButtonDel v-bind:Id="tb.id" v-bind:nameRecord="tb.produto" url="produto_del" /></td>
                    <td><ButtonEdit link="/produtos_edit"  v-bind:Id="tb.id" /></td>
                    
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

import {mapActions} from 'vuex';
import {mapState} from 'vuex';

export default {
    name:'ProdutosIndex',
    components:{ButtonPlus,ButtonDel,ButtonEdit},
    computed:{
        ...mapState('crud',['table'])
    },
    methods:{
        ...mapActions('crud',['show','updateView'])
    },
    created(){
        this.show('produto_show')
    },
    updated(){
        this.updateView('produto_show')
    }
    
    
    
}
</script>