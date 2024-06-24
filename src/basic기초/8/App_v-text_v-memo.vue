<template>
    <div v-once>
        <h1>{{ text }}</h1>
        <h1 v-text="text"></h1>
        <button @click="text=text+'!'">textChange</button>
    </div>
    <div v-memo="[vText]">
        <h1>{{ vText }}</h1>
        <h1 v-text="vText"></h1>
        <button @click="vText=vText+'!'">textChange</button>
    </div>
    <div v-memo="[vArr.length]">
        <h1 v-for="(item) in vArr" :key="item">{{ item }}</h1>
        <button @click="arradd">textChange</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref("text");
const vText = ref("vText");
const vArr = ref(["aaa","bbb"]);
const arradd = ()=>{
    vArr.value.push("c1");
}
</script>

<style lang="scss" scoped></style>