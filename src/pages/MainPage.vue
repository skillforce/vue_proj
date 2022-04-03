<template>
  <h1>Welcome</h1>
  <div class="linksBlock">
    <router-link to="/posts">Move to posts page</router-link>
    <router-link to="/test">Test page</router-link>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.linksBlock {
  display: flex;
  align-items: center;
}
.linksBlock a {
  margin-right: 40px;
}
</style>
