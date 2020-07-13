<template>
    <div>
        <form v-on:submit.prevent="submit">
        <div class="form-group">
            <label for="marca">Marca</label>
            <input type="text" id="tipo" class="form-control" v-model="schema.marca">
        </div>
         <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" class="form-control" rows="5" v-model="schema.descricao"></textarea>
        </div>
         <div class="form-group">
           <button type="submit"  class="btn btn-outline-success"  >Salvar</button>
           <router-link type="button"  class="btn btn-outline-danger ml-2" to="/marcas" >Cancelar</router-link>
        </div>
         

        </form>
    </div>
</template>
<script>
//import {mapActions} from 'vuex';

import {mapActions} from 'vuex';
export default {
    name:'MarcasAdd',
    data:()=>{
        return {
            schema:{
                marca:'',
                descricao:''
            }
        }
    },
    computed:{
        
    },
    methods:{
       
       ...mapActions('crud',['saveAction']),
       submit(){
           this.saveAction({item:this.schema,url:'marca_save'})
           this.$router.push('/marcas')
       },
       
        
    }
}
</script>