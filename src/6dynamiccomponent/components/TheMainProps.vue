<template>
    <div class="container">
        <h1>
            {{ aa }}
        </h1>
        <h2>propA : {{ propA }}</h2>
        <h2>propB : {{ propB }}</h2>
        <h3>props.propA: {{ props.propA }}</h3>
        <button 
        class="btn btn-primary m-5"
        @click="$emit('propAChange')">propAChange</button>
        <button 
        class="btn btn-primary m-5"
        @click="$emit('propBChange')">propAChange</button>
        <hr>
        {{ emits }}
        <hr>
        {{ $emit }}
        <h1>{{ msg }}</h1>
    </div>
</template>

<script setup>
import { ref, defineProps ,defineEmits, inject } from 'vue';

const aa = ref('aa msg');
const props = defineProps({
    propA: String,
    propB: String,
});
const emits = defineEmits(["propAChange","propBChange"]);
const msg = inject('msg');
</script>

<style lang="scss" scoped>

</style>