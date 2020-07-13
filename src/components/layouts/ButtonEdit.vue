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
            const id=this.Id;
           // console.log(id)
            const link=this.link
           // console.log(id);
            this.actToast({'id':id});
            this.$router.push(link);
        }
    }
}
</script>