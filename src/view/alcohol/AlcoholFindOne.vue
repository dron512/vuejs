<template>
  <div class="container">
    <h1>AlcoholFindOne</h1>
    <div class="row">
      <p>
      param = {{ $route.params }}<br/>
      query = {{ $route.query }}<br/>
      hash = {{ $route.hash }}
      </p>
    </div>
    <div class="row">
      <div class="col-5">
        <h1>Card</h1>
        <div class="card w-50">
          <div class="card-body">
            <img src="@/assets/image/image.png" class="card-img-top" alt="image" />
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">
              {{ card.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-5">
        <button type="button" 
        class="btn btn-outline-primary me-3"
        @click="goListPage">목록</button>
        <button type="button" 
        class="btn btn-outline-primary me-3"
        @click="goEditPage">수정</button>
        <button type="button" 
        class="btn btn-outline-primary"
        @click="goInsertPage">삽입</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { findOne } from "@/db/api.js";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
// console.log(findOne);
const card = findOne(route.params.id);

const goListPage = ()=>{
  router.push('/boardfindall');
}
const goEditPage = ()=>{
  router.push(`/boardupdate/${route.params.id}`);
}

const goInsertPage = ()=>{
  router.push(`/boardinsert`);
}
</script>

<style lang="scss" scoped></style>
