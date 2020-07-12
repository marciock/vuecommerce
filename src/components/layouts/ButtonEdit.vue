<template>
    <div>
        <button type="button" class="btn btn-outline-success" @click="go()"  >
            <span class="fa fa-pencil"></span>
        </button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name:'ButtonEdit',
    props:['link','Id'],
    methods:{
        ...mapActions('crud',['actToast']),
        go(){
            this.actToast({'item':this.Id});
            this.$router.push(this.link);
        }
    }
}
</script>