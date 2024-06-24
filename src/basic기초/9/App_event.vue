<template>
    <div>
        <button @click="printInfo('hello',$event)">printInfo</button>
        <input type="text" @keyup="keyInfo">
    </div>
</template>

<script setup>
const printInfo = (msg,e)=>{
    console.log(msg);
    console.log(e.target);
    console.log(e.target.tagName);
}
const keyInfo = (event)=>{
    console.log(event);
    console.log(event.key);
}
</script>

<style lang="scss" scoped>


</style>