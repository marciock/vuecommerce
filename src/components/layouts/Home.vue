<template>
    <div>
        <div class="row">
         <Icons v-for="(m,index) in menu" v-bind:key="index" :icon="m.icon" :title="m.title" :url="m.url"></Icons>
      </div>
    </div>
</template>

<script>
import Icons from './Icons';


export default {
    name:'Home',
    components: {
    
    Icons,
    
    
  },
  data:()=>{
        return{
            menu:[
                    {'title':'Produtos','icon':require('@/assets/icons/produtos.svg'),'url':'/produtos'},
                    {'title':'Marcas','icon':require('@/assets/icons/marca.svg'),'url':'/marcas'},
                    {'title':'Usuarios','icon':require('@/assets/icons/imagens.svg'),'url':'/usuarios'},
                
                ] 
        }
    }
    
}
</script>