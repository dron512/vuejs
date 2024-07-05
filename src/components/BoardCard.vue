<template>
  <div class="card w-100">
    <img src="@/assets/image/image.png" class="card-img-top" alt="image" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ text }}
      </p>
      <button @click.prevent="$emit('gofindone')" class="btn btn-primary">
        {{ ahref }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';
defineEmits(["gofindone"]);
defineProps({
    title:{
        type:String
    },
    text:{
        type:String
    },
    id:{
        type:Number
    },
    ahref:{
        type:String
    }
})
</script>

<style lang="scss" scoped></style>
