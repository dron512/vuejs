<template>
    <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ content }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ type == 'news' ? '뉴스' : '공지사항' }}</h6>
            <p class="card-text">{{ content }}</p>
            <a href="#" 
            @click="likeAction" 
            :class="like">좋아요</a>
        </div>
    </div>
    <!-- {{ $props }} -->
</template>

<script>
import { computed } from 'vue';


export default {
    // props:['type','isLike','content'],
    props: {
        type: {
            type: String,
            default: ''
        },
        isLike: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        }
    },
    emits:['toggleLike'],
    setup(props,context) {
        const like = computed(()=>{
            return props.isLike ? 'btn btn-primary' : 'btn btn-outline-primary'
        });
            
        const likeAction = () => {
            context.emit('toggleLike');
        }
        return {
            like, likeAction
        }
    }
}
</script>

<style lang="scss" scoped></style>