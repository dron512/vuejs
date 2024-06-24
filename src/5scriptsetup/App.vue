<template>
    <div>
        <TheNav></TheNav>
        <TheMainProps 
            :propA="propA" 
            :propB="propB"
            @propAChange="propAChange"
            @propBChange="propBChange"
            >
        </TheMainProps>
    </div>
</template>

<script setup>
import TheNav from './components/TheNav.vue';
import TheMainProps from './components/TheMainProps.vue';
import {ref} from 'vue';

const propA = ref("propA");
const propB = ref("propB");

const propAChange = ()=>{
    propA.value +='AAA';
}
const propBChange = ()=>{
    propB.value +='BBB';
}
</script>

<style lang="scss" scoped></style>