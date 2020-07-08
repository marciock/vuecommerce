<template>
    <div>
        <form v-on:submit.prevent="salvar()">
        <div class="form-group">
            <label for="produto">Produtos</label>
            <input type="text" id="produto" class="form-control" v-model="produtos.produto">
        </div>
         <div class="form-group">
            <label for="tipo">Tipo</label>
            <select id="tipo" class="form-control" v-model="tipos.tipo"></select>
        </div>
         <div class="form-group">
            <label for="preco">Preço</label>
            <input type="number" id="preco" step="any" class="form-control" v-model="produtos.preco">
        </div>
        
         <div class="form-group">
           <button type="submit" class="btn btn-outline-success">Salvar</button>
        </div>

        </form>
    </div>
</template>
<script>
export default {
    name:'TiposAdd',
    data:()=>{
        return{
            tipos:{
                produto:'',
                tipo:'',
                preco:''
            }
        }
    },
    methods:{
        salvar(){
            console.log(this.tipos.descricao)
        }
    }
}
</script>