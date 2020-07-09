<template>
    <div>
        
        <button type="button" class="btn btn-outline-warning"  data-toggle="modal" 
          data-target="#modal"  id="del"   v-on:click="deleteId(tbId)">
            <span class="fa fa-trash"></span>
        </button>
        

        



    </div>
</template>
<script>

export default {
    name:'ButtonDel',
    data:()=>{
        return{
            results:this.tbId
        }
    },
    props:['tbId'],
    
    methods:{
        createModal(value){
          this.$emit('delete',{del:value})
            
        },
        
    }
    
    
}
</script>