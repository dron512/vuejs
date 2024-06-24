<template>
    <div class="row">
        <div class="col-2">
            <select v-model="types" class="form-control" name="type" id="">
                <option value="news">뉴스</option>
                <option value="notice">공지사항</option>
            </select>
        </div>
        <div class="col-5">
            <input type="text" class="form-control" v-model="content">
        </div>
        <div class="col-2">
            <button 
             class="btn btn-primary"
             @click="$emit('createCard', types.value, content.value);"
              >추가하기</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    emits: ["createCard"],
    setup(props) {
        const types = ref('news');
        const content = ref('');
        const createCard = () => {
            console.log(props);
            // context.emit('createCard', types.value, content.value);
        }
        return {
            createCard, types, content
        }
    }
}
</script>

<style lang="scss" scoped></style>