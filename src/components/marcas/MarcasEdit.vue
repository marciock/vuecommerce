<template>
    <div>
        <form v-on:submit.prevent="submit" >
        <div class="form-group">
            <label for="marca">Marca</label>
            <input type="text" id="tipo" class="form-control"   v-model="table.marca">
        </div>
         <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" class="form-control" rows="5"  v-model="table.descricao" ></textarea>
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
import {mapState} from 'vuex';

import {mapActions} from 'vuex';
export default {
    name:'MarcasEdit',
    data:()=>{
        return {
            schema:{
                marca:'',
                descricao:''
            }
                
        }
    },
    computed:{
        ...mapState('crud',['table','toast']),
        
    },
    methods:{
       
       ...mapActions('crud',['saveEditAction','editAction']),
       
       submit(){
           this.saveEditAction({item:this.table,url:'marca_up'})
           this.$router.push('/marcas')
       },
       
    },
    created() {
         const data={'id':this.toast.id,'url':'marca_edit'}
        // console.log(this.toast.id)
        this.editAction(data)
       // this.getForm()
       // console.log(this.schema.marca)
        
    },
    
        
        
   
}
</script>