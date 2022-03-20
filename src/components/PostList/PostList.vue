<template>
  <div class="posts">
    <div class="emptyPostList" v-if="posts.length === 0">No one post was created</div>
    <transition-group name="post-list">
      <single-post v-for="post in posts" :key="post.id" :post="post" @deletePost="deletePost" />
    </transition-group>
  </div>
</template>

<script>
import SinglePost from "@/components/PostList/SinglePost/SinglePost.vue";

export default {
  name: "PostList",
  components: { SinglePost },
  props: {
    posts: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  methods: {
    deletePost(id) {
      this.$emit("deletePost", id);
    },
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
}
.emptyPostList {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin: 10% 0 0 30%;
  color: red;
  white-space: nowrap;
}

.post-list {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.4s;
}
</style>
