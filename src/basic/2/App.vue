<template>
  <div>
    <h1>안녕하세요</h1>
    <h2>카운트: {{ count }}</h2>
    <button @click="count++">카운트 증가</button>

    <div>
      refMessage = {{ refMessage }}<br/>
      noRefMessage = {{ noRefMessage }}<br/>
      <button @click="onRefMessage">refMessage</button>
      <button @click="NoOnRefMessage">refMessage</button>
    </div>
  </div>
</template>

<script>
import { ref,onMounted} from 'vue';

export default {
  setup() {
    const count = ref(0)
    const refMessage = ref('hello i am refMessage');
    let noRefMessage = 'hello i am noRefmessage';

    const onRefMessage = ()=>{ refMessage.value=refMessage.value+'!'}
    const noOnRefMessage = ()=>{ noRefMessage = noRefMessage+'!' }

    onMounted (() => {
      console.log('마운트 됨');
    });

    return { count, onMounted, refMessage,noRefMessage,onRefMessage,noOnRefMessage }
  }
}
</script>

<style lang="scss" scoped></style>