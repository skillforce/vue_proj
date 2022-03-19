<template>
  <div class="postBlock">
    <div>
      <custom-button :btnType="'createBtn'" @click="isPopUpShow = true">
        Create new post
      </custom-button>
      <custom-button :btnType="'createBtn'" @click="this.fetchUsers"> GET POSTS</custom-button>
      <custom-select @change-selected-options="changeSortType" :options="sortedOptions" />
    </div>

    <pop-up v-model:show="isPopUpShow">
      <template #footer>
        <create-post-form @closePopUp="closePopUp" @createNewPost="newPost" />
      </template>
    </pop-up>
    <post-list v-if="isPostsLoading" @deletePost="deletePost" :posts="sortedPostList" />
    <div v-else>LOADING...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList/PostList.vue";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";

export default {
  name: "App",
  components: { CustomSelect, CreatePostForm, PostList },
  data() {
    return {
      posts: [],
      isPopUpShow: false,
      modifyValue: "",
      postsLimit: 10,
      isPostsLoading: false,
      sortType: "",
      sortedOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By description" },
      ],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  computed: {
    sortedPostList() {
      return this.posts.sort((post1, post2) => {
        return post1[this.sortType]?.localeCompare(post2[this.sortType]);
      });
    },
  },
  methods: {
    changeSortType(newType) {
      this.sortType = newType;
    },
    newPost(newPostDesc, newPostName) {
      this.posts.push({ id: Date.now(), title: newPostName, body: newPostDesc });
      this.isPopUpShow = false;
    },
    deletePost(id) {
      this.posts = this.posts.filter((t) => t.id !== id);
    },
    closePopUp() {
      this.isPopUpShow = false;
    },
    async fetchUsers() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.postsLimit}`
        );
        const newPosts = await res.json();
        this.posts = [...this.posts, ...newPosts];
      } catch (e) {
        alert("Error");
      } finally {
        this.isPostsLoading = true;
      }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
