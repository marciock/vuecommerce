<template>
    <div>
        <form v-on:submit.prevent="submit" >
        <div class="form-group">
            <label for="marca">Marca</label>
            <input type="text" id="tipo" class="form-control"   v-model="schema.marca">
        </div>
         <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" class="form-control" rows="5"  v-model="schema.descricao" ></textarea>
        </div>
         <div class="form-group">
           <button type="submit"  class="btn btn-outline-success"  >Salvar</button>
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
           this.saveEditAction({item:this.schema,url:'marca_up'})
           this.$router.push('/marcas')
       },
       getForm(){
           /*this.schema.marca=this.table.marca;
           
           this.schema.descricao=this.table.descricao;*/

           this.schema=this.table;
       }
    },
    mounted() {
        const data={'id':this.toast.id,'url':'marca_edit'}
        this.editAction(data)
        this.getForm()
        console.log('montou')
    },
        
        
   
}
</script>