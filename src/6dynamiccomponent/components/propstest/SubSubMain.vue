<template>
    <div class="border m-3 p-3">
        <h1>subSubMain</h1>
        <p>subSubMain입니다.</p>
        <h2>aa : {{ AA }}</h2>
        <h2>bb : {{ bb }}</h2>
        <button class="btn btn-primary" @click="changeAA">AAchangeAA</button>
    </div>
</template>

<script>
import { inject } from 'vue';


export default {

    setup() {
        const { AA, changeAA } = inject('aa');
        const bb = inject('bb');

        return {
            AA, bb, changeAA
        }
    }
}

</script>

<style lang="scss" scoped></style>