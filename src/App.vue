<template>
  <div>likes:{{ likes }}</div>
  <button @click="like">inc</button>
  <button @click="dislike">dec</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    like() {
      this.likes += 1;
    },
    dislike() {
      this.likes -= 1;
    },
  },
};
</script>

<style scoped></style>
