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
                <tr  v-for="item of  table" :key="item.id" >
                    
                    <td >{{item.marca}}</td> 
                    <td >{{item.descricao}}</td> 
                   
                    
                    <td><ButtonDel v-bind:Id="item.id" v-bind:nameRecord="item.marca" url="marca_del"/></td>
                    <td><ButtonEdit link="/marcas_edit" v-bind:Id="item.id" /></td>
                    
                </tr>

                
            </tbody>
        </table>


       

        <ButtonPlus link="/marcas_add"></ButtonPlus>
    </div>
</template>
<script>


import ButtonPlus from '../layouts/ButtonPlus';
import ButtonDel from '../layouts/ButtonDel';
import ButtonEdit from '../layouts/ButtonEdit';


import {mapState} from 'vuex';

import {mapActions} from 'vuex';

export default {
    name:'MarcasIndex',
    components:{ButtonPlus,ButtonDel,ButtonEdit},
   
    computed:{
     ...mapState('crud',['table'])
    },
    methods:{
      
       ...mapActions('crud',['show','updateView',])

    },
    created(){
        this.show('marca_show')
    },
    updated(){
        this.updateView('marca_show')
    }
    
   
    
    
}
</script>