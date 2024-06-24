<template>
    <div>
        <h1>{{ state.count }}</h1>
        <h1>{{ original.count }}</h1>
        <button @click="increment">증가</button>
    </div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
    setup() {
        const state = reactive({ count: 0 })
        const original = readonly({ count: 0 });
        const increment = () => {
            state.count++;
            original.count++;
            console.log(state.count);
            console.log(original.count);
        }
        return {
            state,
            increment,
            original
        }
    }
}
</script>

<style lang="scss" scoped></style>