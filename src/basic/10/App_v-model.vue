<template>
    <div>
        <input type="text" @keyup="event => myValue = event.target.value">
        <h1>{{ myValue }}</h1>
        <textarea name="" id="" v-model="myText"></textarea>
        <h1>{{ myText }}</h1>

        <input type="checkbox" value="html" v-model="lanarr">html
        <input type="checkbox" value="css" v-model="lanarr">css
        <input type="checkbox" value="javascript" v-model="lanarr">javascript
        <input type="checkbox" value="nodejs" v-model="lanarr">nodejs

        <h1>{{ lanarr }}</h1>

        <select name="" id="" v-model="lang">
            <option value="java" selected>java</option>
            <option value="c">c</option>
            <option value="python">python</option>
        </select>
        <h1>{{ lang }}</h1>

        <input type="radio" name="gender" id="" v-model="gender" value="남자"> 남자
        <input type="radio" name="gender" id="" v-model="gender" value="여자"> 여자
        <h1>{{ gender }}</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const myValue = ref('text');
const myText = ref("value");
const lanarr = ref([]);
const lang = ref("java");

const gender = ref("남자")
</script>

<style scoped></style>