<template>
    <div>
        <h1>{{ count }}</h1>
        <h1>{{ str }}</h1>
        <button @click="chan">바꾸기</button>
    </div>
</template>

<script>
import { reactive,toRef,toRefs } from 'vue'
export default{
    setup(){
        const myValue = reactive({ count:0, str:"Message"});

        // const count = toRef(myValue,"count");
        // const str = toRef(myValue,"str");
        const {count,str} = toRefs (myValue);

        const chan = ()=>{
            count.value++;
            str.value = str.value+"!";
        }

        return {
            myValue,
            count,
            str,
            chan
        }
    }
}

</script>

<style lang="scss" scoped>


</style>