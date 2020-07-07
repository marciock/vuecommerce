<template>

    <div class="col" >
        <div class="text-center">
            <router-link :to="url">
                <img :src="icon" style="width: 128px;height:auto;" >
                <h5 style="margin-top: 0;">{{title}}</h5>
            </router-link>
        </div>
    </div>
    
</template>
<script>
export default {
    name:'Icons',
    props:['icon','title','url']
    
}
</script>