<template>
  <form @submit.prevent class="newPostForm">
    <div>CREATE NEW POST</div>
    <custom-input
      v-model.trim="newPostName"
      type="text"
      aria-label="newPostName"
      placeholder="newPostName"
    />
    <custom-input
      v-model.trim="newPostDesc"
      type="text"
      aria-label="newPostDesc"
      placeholder="newPostDesc"
    />
    <custom-button :btn-type="'createBtn'" :disabled="!isDisabled" @click="createPost"
      >POST</custom-button
    >
    <custom-button @click="$emit('closePopUp')" :btn-type="'createBtn'">CLOSE</custom-button>
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
  padding: 30px;
  border: 3px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}
</style>
