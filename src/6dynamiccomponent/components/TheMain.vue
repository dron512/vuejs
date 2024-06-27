<template>
    <div class="container">
        <div>
            <CustomSlot class="border p-3 m-3">
                <template v-slot:header>안녕하세요 v-slot:header 입니다.</template>
                <template v-slot:body>안녕하세요 v-slot:body 입니다.</template>
                <template v-slot:footer>안녕하세요 v-slot:footer 입니다.</template>
            </CustomSlot>
            <CustomSlot class="border p-3 m-3">
                <template #header>안녕하세요 v-slot:header 입니다.</template>
                <template #body>안녕하세요 v-slot:body 입니다.</template>
                <template #footer>안녕하세요 v-slot:footer 입니다.</template>
                <template #default>기본적으로 나오는 공간입니다.</template>
            </CustomSlot>
            <CustomSlot class="border p-3 m-3">
                <template #header="obj">
                    안녕하세요 v-slot:header 입니다.<br>
                    {{ obj }}<br>
                    {{ obj.test }}
                </template>
                <template #body="{bodyStu}">
                    안녕하세요 v-slot:body 입니다.<br/>
                    {{ bodyStu }}
                </template>
                <template #footer>안녕하세요 v-slot:footer 입니다.</template>
                <template #default>기본적으로 나오는 공간입니다.</template>
            </CustomSlot>
            <CustomSlot class="border p-3 m-3">
                <template #default>
                    <h1>없으면 안나올수 있도록 v-if='slots.header' v-if='slots.body' v-if='slots.footer'</h1>
                </template>
            </CustomSlot>
        </div>
        <div class="border p-3 m-3">
            <SlotButton>슬롯버튼</SlotButton>
            <SlotButton></SlotButton>
        </div>
        <MainButton class="border p-3 m-3" style="background-color: #ccc;" @click="mainButton">
        </MainButton>
        <hr>
        <div class="p-3 m-3">
            <h1 class="red">CardComponent</h1>
            <button class="btn btn-primary m-3" @click="myColor == 'red' ? myColor = 'blue' : myColor = 'red'">
                글자색바꾸기
            </button>
        </div>
        <hr>
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
import MainButton from './MainButton.vue';
import SlotButton from './SlotButton.vue';
import CustomSlot from './CustomSlot.vue';
import { reactive, ref } from 'vue';

export default {
    components: {
        TheCard,
        CreateCard,
        CreateLabel,
        MainButton,
        SlotButton,
        CustomSlot
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
        const mainButton = ()=>{
            alert('mainButton');
        }
        return {
            datas, myColor, createCard, myLabel,mainButton
        }
    }
}
</script>

<style scoped>
.red {
    color: v-bind(myColor);
}
</style>