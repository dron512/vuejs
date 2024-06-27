<template>
    <div>
        <TheNav></TheNav>
        <div class="container">
            <button class="btn btn-primary me-2" @click="changeComponent(AA)">AA</button>
            <button class="btn btn-primary me-2" @click="changeComponent(BB)">BB</button>
            <button class="btn btn-primary" @click="changeComponent(CC)">CC</button>
        </div>
        <component :is="myComponent" class="container" :aa="aa" @test="testfn"/>
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
import AA from '@/components/dynamictest/AA.vue';
import BB from '@/components/dynamictest/BB.vue';
import CC from '@/components/dynamictest/CC.vue';

import {ref} from 'vue';

const propA = ref("propA");
const propB = ref("propB");

const myComponent = ref(AA);

const changeComponent = (comp)=>{
    myComponent.value = comp;
}

const propAChange = ()=>{
    propA.value +='AAA';
}
const propBChange = ()=>{
    propB.value +='BBB';
}
const aa = ref("aa props 입니다.");
const testfn = ()=>{
    console.log('testfn');
    aa.value = 'testfn으로 변경된 props 입니다.';
}
</script>

<style lang="scss" scoped></style>