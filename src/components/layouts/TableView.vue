<template>
<div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="thead in theads" v-bind:key="thead">{{thead}}</th>
        <th></th>
        <th></th>
        
      </tr>
    </thead>
    <tbody >
      <tr v-for="(tbody,index) in tbodies" v-bind:key="index" >
        <td v-for="(tb,xb) in tbody" v-bind:key="xb">{{tb}} </td><td><ButtonDel v-bind:tbId="index" /></td>
        <td><button type="button" :data-id="index" @click="vai()" id="teste">teste</button></td>
            
      </tr>
      
       
    
    </tbody>
  </table>
  
  
</div>
</template>
<script>
import ButtonDel from './ButtonDel'
export default {
    name:'TableView',
    data:()=>{
      return{
        teste:'<td><ButtonDel></ButtonDel></td>'
      }
    },
    props:['theads','tbodies','tbId'],
    components:{ButtonDel},
   created(){
     console.log(this.tbodies);
   },
   methods:{
     vai(){
       const teste=document.getElementById('teste');

       console.log(teste.dataset.id);
     }
   }
    


}
</script>