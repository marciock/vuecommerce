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
            console.log(this.marcas.descricao)
        }
    }
}
</script>