<template>
    <div>
        <h1 v-if="mybool">안녕하세요true</h1>
        <h1 v-else>안녕하세요 false</h1>
        <button @click="mybool=!mybool">mybool바꾸기</button>
        <template v-if="mybool">
            <h1>mybool</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aliquam repudiandae rem necessitatibus iste. Cumque debitis quod quis sequi placeat odit, sapiente tempora sit, sed perspiciatis esse nesciunt porro temporibus?</p>
        </template>
        <h2 v-if="str=='A'">AA</h2>
        <h2 v-else-if="str=='B'">BB</h2>
        <h2 v-else-if="str=='C'">CC</h2>
        <button @click="str='A'">A</button>
        <button @click="str='B'">B</button>
        <button @click="str='C'">C</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const mybool = ref(true);

const str = ref('A');

</script>

<style lang="scss" scoped>


</style>