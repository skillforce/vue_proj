<template>
  <div class="post">
    <div><strong>Name:</strong> {{ post.name }}</div>
    <div><strong>Description:</strong> {{ post.desc }}</div>
    <button @click="$emit('deletePost', post.id)" class="btnDelete">X</button>
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
.btnDelete {
  position: absolute;
  left: 475px;
  top: 0;
  padding: 5px;
  border-radius: 13px;
  background-color: red;
}
.post {
  position: relative;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 5px;
  width: 500px;
}
</style>
