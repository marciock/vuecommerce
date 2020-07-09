<template>
    <div>
        <h3>Tipos</h3>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Marca</th><th>Descricao</th><th></th>
                </tr>
                
            </thead>
            <tbody >
                <tr v-for="(tb,index) in table" v-bind:key="index">
                    
                    <td>{{tb.marca}}</td> 
                    <td>{{tb.descricao}}</td> 
                    
                    <td><ButtonDel v-bind:tbId="tb.id_marca" /></td>
                    <td><ButtonEdit link="/tete" /></td>
                    
                </tr>

                
            </tbody>
        </table>




        <ButtonPlus link="/marcas_add"></ButtonPlus>
    </div>
</template>
<script>
import axios from 'axios';

import ButtonPlus from '../layouts/ButtonPlus';
import ButtonDel from '../layouts/ButtonDel';
import ButtonEdit from '../layouts/ButtonEdit';


export default {
    name:'MarcasIndex',
    components:{ButtonPlus,ButtonDel,ButtonEdit},
    data:()=>{
        return{
            table:''
        }
    },
    methods:{
        showData(){
            axios.get('http://192.168.1.103/vuecomerceserver/controllers/marcas/show.php')
            .then(response=>{
                console.log(response.data);
                this.table=response.data;
                })
            .catch(error=>{console.log(error)})
        }
    },
    created(){
        this.showData();
    }
    
   
    
    
}
</script>