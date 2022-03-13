<template>
  <div class="posts">
    <div class="emptyPostList" v-if="posts.length === 0">No one post was created</div>
    <single-post v-for="post in posts" :key="post.id" :post="post" @deletePost="deletePost" />
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
</style>
