<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="thead in theads" v-bind:key="thead">{{thead}}</th>
      
      </tr>
    </thead>
    <tbody >
      <tr v-for="tbody in tbodies" v-bind:key="tbody" v-html="tbody" ></tr>
    
    </tbody>
  </table>
</template>
<script>
export default {
    name:'TableView',
    props:['theads','tbodies']

}
</script>