<template>
  <div class="container">
    <h1>AlcoholFindOne</h1>
    <div class="row">
      <p>param = {{ $route.params }}<br /></p>
    </div>
    <div class="row">
      <div class="col-5">
        <h1>Card</h1>
        <div class="card w-100">
          <div class="card-body">
            <img :src="alcohol.picture" class="card-img-top" alt="image" />
            <h5 class="card-title">{{ alcohol.name }}</h5>
            <p class="card-text">
              {{ alcohol.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-5">
        <button type="button" class="btn btn-outline-primary me-3" @click="goListPage">
          목록
        </button>
        <button type="button" class="btn btn-outline-primary me-3" @click="goEditPage">
          장바구니
        </button>
        <button type="button" class="btn btn-outline-primary" @click="goInsertPage">
          주문
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { findOne,findMarket} from "@/db/alcohol/alcoholaxios.js";
import { ref, watchEffect } from "vue";
// import AlcoholItem from '@/components/AlcoholItem.vue';

// console.log(findOne);
const route = useRoute();

const alcohol = ref({picture:''});
const market = ref({});

watchEffect(() => {
  const getData = async () => {
    const data = await findOne(route.params.code);
    alcohol.value = data[0];
    const temp = await findMarket(route.params.code);
    market.value = temp;
    console.log(market.value);
  };
  getData();
});

// const goListPage = ()=>{
//   router.push('/boardfindall');
// }
// const goEditPage = ()=>{
//   router.push(`/boardupdate/${route.params.id}`);
// }

// const goInsertPage = ()=>{
//   router.push(`/boardinsert`);
// }
</script>

<style lang="scss" scoped></style>
