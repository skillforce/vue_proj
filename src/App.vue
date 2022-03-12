<template>
  <div class="postBlock">
    <post-list @deletePost="deletePost" :posts="posts" />
    <create-post-form @createNewPost="newPost" />
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
    };
  },
  methods: {
    newPost(newPostDesc, newPostName) {
      this.posts.push({ id: Date.now(), name: newPostName, desc: newPostDesc });
    },
    deletePost(id) {
      this.posts = this.posts.filter((t) => t.id !== id);
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
