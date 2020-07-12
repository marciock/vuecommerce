<template>
    <div>
        
        <button type="button" class="btn btn-outline-warning"  data-toggle="modal" 
          data-target="#modal"  id="del" @click="actToast({'id':Id,'name':nameRecord})"  >
            <span class="fa fa-trash"></span>
        </button>
        
        <Modal />
        



    </div>
</template>
<script>
import {mapActions} from 'vuex';
import Modal from './Modal';
export default {
    name:'ButtonDel',
    components:{Modal},
    data:()=>{
        return{
            results:''
        }
    },
    
    props:['Id','nameRecord'],

    methods:{
        ...mapActions('crud',['actToast']),
        

    },
    
    
    
}
</script>