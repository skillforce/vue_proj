<template>
  <div class="post">
    <div><strong>Name:</strong> {{ post.name }}</div>
    <div><strong>Description:</strong> {{ post.desc }}</div>
    <custom-button :btn-type="'deleteBtn'" @click="$emit('deletePost', post.id)">X</custom-button>
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
</style>
