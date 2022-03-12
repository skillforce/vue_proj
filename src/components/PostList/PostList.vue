<template>
  <div class="posts">
    <div v-for="{ name, desc, id } in posts" :key="id" class="post">
      <div><strong>Name:</strong> {{ name }}</div>
      <div><strong>Description:</strong> {{ desc }}</div>
      <button @click="$emit('deletePost', id)" class="btnClose">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
      default() {
        return [];
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

.posts {
  display: flex;
  flex-direction: column;
}
.btnClose {
  position: absolute;
  left: 475px;
  top: 0;
  padding: 5px;
  border-radius: 13px;
  background-color: red;
}
</style>
