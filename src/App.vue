<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container">
      <router-view></router-view>

      

     

    
    </div>

  </div>
</template>

<script>
 import 'bootstrap/dist/css/bootstrap.css';
 import 'font-awesome/css/font-awesome.css';
 import NavBar from './components/layouts/NavBar';
 
 
 
 

export default {
  name: 'App',
  components:{
    NavBar
  }
  
}
</script>

<style>

</style>
