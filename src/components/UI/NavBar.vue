<template>
  <div class="navBar">
    <div>TEST APP</div>
    <div class="navbar__btns">
      <custom-button @click="$router.push('/posts')">POSTS</custom-button>
      <custom-button @click="$router.push('/test')">TEST PAGE</custom-button>
      <custom-button @click="$router.push('/')">HOME</custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/UI/CustomButton";

export default {
  name: "NavBar",
  components: { CustomButton },
};
</script>

<style>
.navBar {
  height: 100px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 0 40px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
