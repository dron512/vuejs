<template>
    <div>
        <h1 :class="{'my-font':isFont}">class style 바인딩</h1>
        <button @click="fontchange">fontchange</button>
        <button @click="change">isActive</button>
        <div class="" :class="{ active: isActive}"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);
const isFont = ref(false);
const change = () => {
    isActive.value = !isActive.value;
}
const fontchange = ()=>{
    isFont.value = !isFont.value;
}

</script>

<style scoped>
.my-font{
    color: red;
}
.active {
    margin: 1rem;
    width: 100px;
    height: 100px;
    background-color: red;
}

.active:hover {
    transform: rotate(360deg);
    transition: 2s;
    animation: resize 2s ;
        /* animation: resize 2s infinite; */
}

@keyframes resize {
    0% {
        width: 120px;
        height: 120px;
    }
    50% {
        width: 100px;
        height: 100px;
    }
    100% {
        width: 120px;
        height: 120px;
    }
}
</style>