<template>
    <div>
        <h1>v-html</h1>
        <p>{{ rawHtml }}</p>
        <p v-html="rawHtml"></p>
        <div v-bind:title="title">마우스 호버 했을때</div>

        <h2>속성</h2>
        <input type="text" v-bind:disabled="dis">
        <button v-on:click="onClickDis">dis</button>
        <input type="text" v-bind="attrs">
    </div>
</template>

<script>
import { ref } from 'vue';

export default{
    setup(){
        const rawHtml = "<strong>RawHtml</strong>";
        const title = ref("hello i am title");

        const dis = ref(false);
        const onClickDis = ()=>{
            dis.value = !dis.value;
        }
        const attrs = {
            value:"123",
        }
        
        return {
            rawHtml,
            title,
            dis,
            onClickDis,
            attrs,

        }
    }
}

</script>

<style lang="scss" scoped>


</style>