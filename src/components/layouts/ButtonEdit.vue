<template>
    <div>
        <router-link type="button" class="btn btn-outline-success"  data-toggle="modal"  data-target="#modal"  v-bind:to="link">
            <span class="fa fa-pencil"></span>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'ButtonEdit',
    props:['link']
}
</script>