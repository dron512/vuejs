<template>
    <div>
        <h1>
            <slot name="header" :test="test"></slot>
        </h1>
        <h1>
            <slot name="body" :bodyStu="bodyStu"></slot>
        </h1>
        <h1>
            <slot name="footer"></slot>
        </h1>
        <div>
            <h1>default......</h1>
            <slot>여기는 기본 입니다.</slot>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const test = ref('test Message');
        const bodyStu = ref('구조분해할당 테스트입니다.');
        return {
            test,bodyStu
        }
    }
}

</script>

<style lang="scss" scoped></style>