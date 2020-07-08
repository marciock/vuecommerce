<template>
    <div class="float-right align-botton">
        <router-link class="btn btn-outline-danger rounded-circle" :to="link"><span class="fa fa-plus"></span></router-link>
    </div>
</template>
<script>
export default {
    name:'ButtonPlus',
    props:['link']
}
</script>