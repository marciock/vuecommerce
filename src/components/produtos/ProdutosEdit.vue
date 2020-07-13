<template>
    <div>
        <form v-on:submit.prevent="submit">
        <div class="form-group">
            <label for="produto">Produtos</label>
            <input type="text" id="produto" class="form-control" v-model="table.produto">
        </div>
         <div class="form-group">
            <label for="marca">Marca</label>
            <select id="marca" class="form-control" v-model="table.idMarca">
                <option :value="table.idMarca">{{table.marca}}</option>>
                <option v-for="tb in tableEdit" :key="tb.id" :value="tb.id">{{tb.marca}}</option>
            </select>
        </div>
         <div class="form-group">
            <label for="preco">Preço</label>
            <input type="number" id="preco" step="any" class="form-control" v-model="table.preco">
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
    
    computed:{
        ...mapState('crud',['table','tableEdit','toast'])
    },
    methods:{
        ...mapActions('crud',['saveEditAction','reAction','editAction']),
        submit(){
            this.saveEditAction({item:this.table,url:'produto_up'});
            this.$router.push('/produtos');
        },
        showAll(){
        const data={'id':this.toast.id,'url':'produto_edit'};
        
        this.editAction(data);
        this.reAction('marca_show');
        }
        
    },
    created(){
        this.showAll()
        
    },
    

}
</script>