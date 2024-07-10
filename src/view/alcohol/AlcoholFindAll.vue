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
      <div v-for="alcohol in datas" 
        class="col-3" :key="alcohol.code">
        <AlcoholItem
          :code="alcohol.code"
          :name="alcohol.name"
          :price="alcohol.price"
          :picture="alcohol.picture"
          @click="gofindone(alcohol.code)"
          >
        </AlcoholItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import {findAll} from '@/db/alcohol/alcoholaxios.js';
import { ref, watchEffect } from "vue";
import AlcoholItem from '@/components/AlcoholItem.vue';

const router = useRouter();
const datas = ref([]);

watchEffect(async()=>{
  datas.value = await findAll();
  console.log(datas.value);
});

const gofindone = (code) => {
  router.push(`alcoholfindone/${code}`);
};
const goInsertPage = ()=>{
  router.push('alcoholinsert')
}
</script>

<style lang="scss" scoped></style>
