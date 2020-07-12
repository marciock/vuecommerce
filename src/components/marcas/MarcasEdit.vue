<template>
    <div>
        <form v-on:submit.prevent="submit">
        <div class="form-group">
            <label for="marca">Marca</label>
            <input type="text" id="tipo" class="form-control" v-model="table.marca"  >
        </div>
         <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" class="form-control" rows="5" v-model="table.descricao" ></textarea>
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
    props:['Id'],
    computed:{
        ...mapState('crud',['table','toast']),
    },
    methods:{
       
       ...mapActions('crud',['saveAction','editAction']),
       submit(){
           this.saveAction({item:this.schema,url:'marca_save'})
           this.$router.push('/marcas')
       },
    mounted() {
        this.editAction({item:this.toast.item,url:'marca_edit'})
    },
       
        
    }
}
</script>