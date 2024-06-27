<template>
    <div>
        <h1>CC</h1>
        <p>CC 컴포넌트 입니다.</p>
        <h2>{{ aa }}</h2>
        <button class="btn btn-primary" @click="aapropschange">aaprops 변경하기</button>
    </div>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';
defineProps({aa:String});
const emits = defineEmits(["test"]);

const aapropschange = ()=>{
    emits("test");
}
</script>

<style lang="scss" scoped>


</style>