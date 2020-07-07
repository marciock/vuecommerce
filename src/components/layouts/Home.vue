<template>
    <div>
        <div class="row">
         <Icons v-for="m in menu" v-bind:key="m" :icon="m.icon" :title="m.title" :url="m.url"></Icons>
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
                    {'title':'Tipos','icon':require('@/assets/icons/marca.svg'),'url':'/tipos'},
                    {'title':'Garçons','icon':require('@/assets/icons/imagens.svg'),'url':'/garcons'},
                
                ] 
        }
    }
    
}
</script>