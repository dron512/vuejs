<template>
    <div class="container">
        <h1>AA</h1>
        <p>안녕하세요 aa 컴포넌트 입니다.</p>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const msg = inject('msg');
</script>

<style lang="scss" scoped>
</style>