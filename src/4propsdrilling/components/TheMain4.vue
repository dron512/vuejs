<template>
    <div class="container">
        <h1>MAIN4</h1>
        <subMain></subMain>
        <button class="btn btn-primary" @click="changeAA">changeAA</button>
    </div>
</template>

<script>
import { provide, ref } from 'vue';
import SubMain from './propstest/SubMain.vue';

export default{
    components: {SubMain},
    setup(){
        const AA = ref('AA');
        const BB = ref('BB');

        const changeAA = ()=>{
            AA.value = AA.value + "바꾸기";
        }

        provide('aa',{AA,changeAA});
        provide('bb',BB);

        return{
            AA,BB,changeAA
        }
    }
}

</script>

<style lang="scss" scoped>
</style>