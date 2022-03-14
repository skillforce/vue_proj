<template>
  <div class="postBlock">
    <pop-up v-model:show="isPopUpShow">
      <template #footer>
        <create-post-form @closePopUp="closePopUp" @createNewPost="newPost" />
      </template>
    </pop-up>
    <post-list @deletePost="deletePost" :posts="posts" />
    <custom-button :btnType="'createBtn'" @click="isPopUpShow = true"
      >Create new post</custom-button
    >
  </div>
</template>

<script>
import PostList from "@/components/PostList/PostList.vue";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm.vue";

export default {
  name: "App",
  components: { CreatePostForm, PostList },
  data() {
    return {
      posts: [],
      isPopUpShow: false,
    };
  },
  methods: {
    newPost(newPostDesc, newPostName) {
      this.posts.push({ id: Date.now(), name: newPostName, desc: newPostDesc });
      this.isPopUpShow = false;
    },
    deletePost(id) {
      this.posts = this.posts.filter((t) => t.id !== id);
    },
    closePopUp() {
      this.isPopUpShow = false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.postBlock {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
</style>
