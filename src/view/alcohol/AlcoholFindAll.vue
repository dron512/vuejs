<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1 class="m-3">AlcoholFindAll</h1>
      <button 
      class="m-3 btn btn-primary"
      @click="goInsertPage"
      >CARD 만들기</button>
    </div>
    <div class="row g-5">
      <div v-for="card in datas.cards" class="col-3" :key="card.id">
        <BoardCard
          :title="card.title"
          :text="card.text"
          :id="card.id"
          :ahref="card.ahref"
          @click="gofindone(card.id)"
        ></BoardCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { datas } from "@/db/data.js";
import { useRouter } from "vue-router";
import BoardCard from "@/components/BoardCard.vue";

const router = useRouter();

datas.cards.forEach((obj) => {
  console.log(obj);
});
const gofindone = (id) => {
  router.push(`boardfindone/${id}`);
};
const goInsertPage = ()=>{
  router.push('boardinsert')
}
</script>

<style lang="scss" scoped></style>
