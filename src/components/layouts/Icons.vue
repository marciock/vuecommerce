<template>

    <div class="col" >
        <div class="text-center">
            <a href="">
                <img :src="icon" style="width: 128px;height:auto;" >
                <h5 style="margin-top: 0;">{{title}}</h5>
            </a>
        </div>
    </div>
    
</template>
<script>
export default {
    name:'Icons',
    props:['icon','title']
    
}
</script>