<template>
    <div class="container mb-5">
        <h1>v-model라벨 만들기</h1>
        <input 
        type="text" 
        class="form-control mb-2"
        :value="myLabel"
        @input="$emit('update:myLabel',$event.target.value)"
        >
        <h2>{{ myLabel }}</h2>
    </div>
</template>

<script>
export default{
    props:["myLabel"],
    emits:["update:myLabel"],
    setup(){

    }
}

</script>

<style lang="scss" scoped>


</style>