<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container">
      <Home></Home>

      <div class="row">
        <Icons v-for="m in menu" v-bind:key="m" :icon="m.icon" :title="m.title"></Icons>
      </div>

     

    
    </div>

  </div>
</template>

<script>
 import 'bootstrap/dist/css/bootstrap.css';
 import 'font-awesome/css/font-awesome.css';
 import NavBar from './components/layouts/NavBar';
 import Home from './components/layouts/Home';
 import Icons from './components/layouts/Icons';
 

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Icons,
    
    
  },
  data:()=>{
        return{
            menu:[
                    {'title':'Produtos','icon':require('@/assets/icons/produtos.svg')},
                    {'title':'Marcas','icon':require('@/assets/icons/marca.svg')},
                    {'title':'Imagens','icon':require('@/assets/icons/imagens.svg')},
                
                ] 
        }
    }
}
</script>

<style>

</style>
