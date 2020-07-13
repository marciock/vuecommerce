<template>
    <div>
        <form v-on:submit.prevent="submit">
        <div class="form-group">
            <label for="produto">Produtos</label>
            <input type="text" id="produto" class="form-control" v-model="schema.produto">
        </div>
         <div class="form-group">
            <label for="marca">Marca</label>
            <select id="marca" class="form-control" v-model="schema.marca">
                <option value="">Escolha a Marca </option>>
                <option v-for="tb in table" :key="tb.id" :value="tb.id">{{tb.marca}}</option>
            </select>
        </div>
         <div class="form-group">
            <label for="preco">Preço</label>
            <input type="number" id="preco" step="any" class="form-control" v-model="schema.preco">
        </div>
        
         <div class="form-group">
           <button type="submit" class="btn btn-outline-success">Salvar</button>
           <router-link to="/produtos" class="btn btn-outline-danger ml-2" >Cancelar</router-link>
        </div>

        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import {mapState} from 'vuex';

export default {
    name:'TiposAdd',
    data:()=>{
        return{
            schema:{
                produto:'',
                marca:'',
                preco:''
            }
        }
    },
    computed:{
        ...mapState('crud',['table'])
    },
    methods:{
        ...mapActions('crud',['show','saveAction']),
        submit(){
            this.saveAction({item:this.schema,url:'produto_save'});
            this.$router.push('/produtos');
        }
        
    },
    created(){
        this.show('marca_show');
    }

}
</script>