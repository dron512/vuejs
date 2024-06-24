<template>
    <div>
        <div style="border: 1px solid black; padding: 1rem; margin: 1rem;">
            <h1>myarr</h1>
            <template v-for="(item) in myArr" :key="item.id">
                <template v-if="item.id % 2 == 1">
                    <h1>{{ item.id }} - {{ item.msg }}</h1>
                </template>
            </template>
        </div>
        <div style="border: 1px solid black; padding: 1rem; margin: 1rem;">
            <h1>evenMyArr</h1>
            <template v-for="(item) in evenMyArr" :key="item.id">
                <h1>{{ item.id }} - {{ item.msg }}</h1>
            </template>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
const myArr = reactive([{
    id: "1", msg: "1번입니다"
}, {
    id: "2", msg: "2번입니다."
}, {
    id: "3", msg: "3번입니다."
}])

const evenMyArr = computed(() => {
    return myArr.filter(item => item.id % 2 == 0)
})
</script>

<style lang="scss" scoped></style>