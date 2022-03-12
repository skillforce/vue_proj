<template>
  <form @submit.prevent class="newPostForm">
    <div>CREATE NEW POST</div>
    <input v-model="newPostName" type="text" aria-label="newPostName" placeholder="newPostName" />
    <input v-model="newPostDesc" type="text" aria-label="newPostDesc" placeholder="newPostDesc" />
    <button :disabled="!isDisabled" style="margin-top: 20px" @click="createPost">POST</button>
  </form>
</template>

<script>
export default {
  name: "CreatePostForm",
  data() {
    return {
      newPostName: "",
      newPostDesc: "",
    };
  },
  methods: {
    createPost() {
      this.$emit("createNewPost", this.newPostDesc, this.newPostName);
      this.newPostName = "";
      this.newPostDesc = "";
    },
  },
  computed: {
    isDisabled() {
      return this.newPostName && this.newPostDesc;
    },
  },
};
</script>

<style scoped>
.newPostForm {
  margin: 10% 10% 0 20px;
  padding: 5px;
  border: 3px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border-radius: 10px;
}

.newPostForm input {
  margin-top: 10px;
  padding: 7px;
}

.newPostForm button {
  margin-top: 10px;
  padding: 7px;
  background-color: greenyellow;
  border-radius: 8px;
  align-self: flex-end;
}
.newPostForm button:disabled {
  background-color: darkgray;
}
</style>
