<template>
    <div>
        <button @click="text='aaa'">aaa</button>
        <button @click="text='bbb'">bbb</button>
        <h1>title {{ mytitle }}</h1>
        <input type="text" v-model="mytitle">
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';

const text = ref("text");
const mytitle = ref("");

const save = ()=>{
    console.log('saved',mytitle.value);
}

watch(text, (newvalue, oldvalue) => {
    console.log('newvalue',newvalue);
    console.log('oldvalue',oldvalue);
},
{
    immediate : true
})

watchEffect(()=>{
    console.log('effect');
    save(mytitle.value);
})
</script>

<style lang="scss" scoped></style>