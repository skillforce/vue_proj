<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" @deletePost="deletePost" />
    </div>
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
</style>
