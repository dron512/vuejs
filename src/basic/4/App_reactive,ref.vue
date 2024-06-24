<template>
    <div>
        <h1>{{ value }}</h1>
        <h1>{{ test }}</h1>
        <button @click="addValue">바꾸기</button>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
    setup() {
        const value = ref('message');
        const test = reactive({ count: 0, value});

        const addValue = () => {
            test.count++;
            // test.value = ref("바꾸기");
            value.value = value.value + "!";
            console.log(test.value);
        }
        return {
            value,
            test,
            addValue
        }
    }
}

</script>

<style lang="scss" scoped></style>