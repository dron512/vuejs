<template>
  <div>
    <h1>AlcoholInsert</h1>
    <form>
      <div class="form-group">
        <label for="title">title</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          id="title"
        />
        <small class="form-text text-muted"
          >input title</small
        >
      </div>
      <div class="form-group">
        <label for="text">text</label>
        <input
          v-model="text"
          type="text"
          class="form-control"
          id="text"
          placeholder="text"
        />
      </div>
      <button 
        type="button" 
        class="my-3 btn btn-primary"
        @click="insertCard"
        >Submit</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {insertData} from '@/db/api.js';
import { useRouter } from 'vue-router';

const title = ref('');
const text = ref('');
const router = useRouter();

const insertCard = ()=>{
  console.log("title"+title.value);
  console.log("text"+text.value);
  const data = {
    title:title.value,
    text:text.value
  }
  insertData(data);
  router.push('boardfindall');
}
</script>

<style lang="scss" scoped></style>
