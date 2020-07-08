<template>
    <div>
        
        <button type="button" class="btn btn-outline-warning"  data-toggle="modal" 
        data-target="#modal"  id="del"   v-on:click="createModal(tbId)">
            <span class="fa fa-trash"></span>
        </button>
        

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
                    <button type="button" class="btn btn-primary" >Sim</button>

                </div> 
            </div>
         </div>
        </div>



    </div>
</template>
<script>
export default {
    name:'ButtonDel',
    data:()=>{
        return{
            results:''
        }
    },
    props:['tbId'],
    
    methods:{
        createModal(value){
            const modal=document.getElementById('conteudo');
            modal.innerHTML=value;
        }
    }
    
    
}
</script>