<template>
    <div class="container">
        <div>
            <h1 class="red">CardComponent</h1>
            <button class="btn btn-primary m-3" @click="myColor == 'red' ? myColor = 'blue' : myColor = 'red'">
                글자색바꾸기
            </button>
        </div>
        <div class="border p-4 m-3">
            <h1>data만들기</h1>
            <CreateCard @create-card="createCard" />
        </div>
        <div class="row border p-2">
            <div class="col" v-for="data in datas" :key="data.id">
                <TheCard :type="data.type" :isLike="data.isLike" :content="data.content"
                    @toggleLike="data.isLike = !data.isLike">
                </TheCard>
                <button class="btn btn-danger" @click="data.content = '바꾸기'">내용바꾸기</button>
            </div>
        </div>
    </div>
    <hr>
    <CreateLabel v-model:myLabel="myLabel"></CreateLabel>
</template>
<script>
import TheCard from './TheCard.vue';
import CreateCard from './CreateCard.vue';
import CreateLabel from './CreateLabel.vue';
import { reactive, ref } from 'vue';

export default {
    components: {
        TheCard,
        CreateCard,
        CreateLabel
    },
    setup() {
        const myColor = ref('red');
        const myLabel = ref('qwerqwerwqer');
        const datas = reactive([
            { id: 1, type: "news", isLike: true, content: "CardAAAAAA" },
            { id: 2, type: "notice", isLike: false, content: "CardBBBBB" },
            { id: 3, type: "news", isLike: true, content: "CardCCCCC" },
            { id: 4, type: "news", isLike: true, content: "CardDDDDD" },
        ]);
        const createCard = (type, content) => {
            console.log('parent call', type, content);
            datas.push({
                id: datas.length + 1,
                type,
                content,
                isLike: false
            })
        }
        return {
            datas, myColor, createCard, myLabel
        }
    }
}
</script>

<style scoped>
.red {
    color: v-bind(myColor);
}
</style>