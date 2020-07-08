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
                <tr >
                    <td></td> 
                    <td></td> 
                    
                    <td><ButtonDel v-bind:tbId="1" /></td>
                    <td><ButtonEdit link="/tete" /></td>
                    
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


export default {
    name:'MarcasIndex',
    components:{ButtonPlus,ButtonDel,ButtonEdit},
    
   
    
    
}
</script>