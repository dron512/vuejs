<template>
    <div >
        <input type="text" @keyup.enter="add">
        <ul>
            <li v-for="item in arr" :key="item">{{ item }}</li>
        </ul>
        <input type="text" @keyup.ctrl.enter="test">
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const arr = reactive([]);
const add = (e) => {
    if (e.target.value)
        arr.push(e.target.value);
    e.target.value = '';
}
const test = ()=>{
    console.log('test');
}
</script>

<style lang="scss" scoped></style>