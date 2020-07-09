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
                   
                   
                    
                </div>  
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Não</button>
                    <button type="button" class="btn btn-primary"  v-on:click="deleteId" >Sim</button>

                </div> 
            </div>
         </div>
        </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'Modal',
    props:['Id'],
    methods:{
    deleteId(value){
            
          //  console.log(this.result)
            let result=value.del;

            console.log(result);
            axios.delete('http://localhost/vuecommerceserver/controllers/marcas/delete.php',{data:result}).then(
                (response)=>{
                    console.log(response.data)
                }
            )
            .catch(error=>{
                console.log(error)
            })
        }
    },
    
}


</script>