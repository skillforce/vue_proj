<template>
  <div class="post">
    <div><strong>Name:</strong> {{ post.title }}</div>
    <div><strong>Description:</strong> {{ post.body }}</div>
    <div class="singlePostBtnBlock">
      <custom-button :btn-type="'deleteBtn'" @click="$emit('deletePost', post.id)">X</custom-button>
      <custom-button :btn-type="'createBtn'" @click="$router.push(`/posts/${post.id}`)"
        >OPEN</custom-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  emits: {
    deletePost: (id) => typeof id === "number",
  },
};
</script>

<style scoped>
.post {
  position: relative;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 5px;
  width: 500px;
}
.singlePostBtnBlock {
  display: flex;
}
</style>
