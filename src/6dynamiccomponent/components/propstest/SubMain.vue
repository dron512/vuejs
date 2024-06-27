<template>
    <div class="border m-3 p-3">
        <h1>SubMain</h1>
        <p>SubMain입니다. msg : {{ msg }}</p>
        <SubSubMain></SubSubMain>
    </div>
</template>

<script>
import { inject } from 'vue';
import SubSubMain from './SubSubMain.vue'

export default{
    components:{
        SubSubMain
    },
    setup(){
        const msg = inject('msg');
        return{
            msg
        }
    }
}

</script>

<style lang="scss" scoped>


</style>