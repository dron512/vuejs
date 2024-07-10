<template>
  <div class="card">
    <div class="card" @click="$emit('gofindone')">
      <img class="card-img-top" :src="picture" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">
          {{name}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from "vue";

defineEmits(["gofindone"]);
defineProps({
  code: {
    type: Number,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
