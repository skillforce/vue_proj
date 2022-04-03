<template>
  <NavBar></NavBar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/UI/NavBar";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
