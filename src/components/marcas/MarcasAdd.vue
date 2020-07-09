<template>
    <div>
        <form v-on:submit.prevent="salvar()">
        <div class="form-group">
            <label for="marca">Marca</label>
            <input type="text" id="tipo" class="form-control" v-model="marcas.marca">
        </div>
         <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" class="form-control" rows="5" v-model="marcas.descricao"></textarea>
        </div>
         <div class="form-group">
           <button type="submit" class="btn btn-outline-success">Salvar</button>
        </div>

        </form>
    </div>
</template>
<script>

import axios from 'axios';
export default {
    name:'MarcasAdd',
    data:()=>{
        return{
            marcas:{
                marca:'',
                descricao:''
            }
        }
    },
    methods:{
        salvar(){

            let marcas=this.marcas;
            axios.post('http://localhost/vuecomerceserver/controllers/marcas/insert.php',marcas)
            .then((res)=>{
                console.log(res.data)
                //console.log(marcas)
            })
            .catch((error)=>{
                console.log(error)
                //console.log(marcas.marca)
            })
        }
    }
}
</script>