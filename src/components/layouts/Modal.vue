<template>
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Titulo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> 
                <div class="modal-body" id="conteudo" >
                   
                   {{toast.id}}
                    
                </div>  
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Não</button>
                    <button type="button" class="btn btn-primary"  @click="removeAction({item:toast.id,url:'marca_del'})" id="sim"  data-dismiss="modal">Sim</button>
                </div> 
            </div>
         </div>
        </div>
</template>
<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
//import {mapMutations} from 'vuex';


export default {
    name:'Modal',
   
    methods:{
        //...mapMutations('marcas',['hidratation']),
        ...mapActions('crud',['removeAction']),
       
    
    },
    computed:{
        ...mapState('crud',['toast','table'])
    },
    mounted(){
        
       // this.updateView()
        
    }
    
}


</script>