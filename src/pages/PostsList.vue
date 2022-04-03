<template>
  <div class="postBlock">
    <div class="manageListPanel">
      <div>
        <custom-button :btnType="'createBtn'" @click="isPopUpShow = true">
          Create new post
        </custom-button>
        <custom-select @change-selected-options="changeSortType" :options="sortedOptions" />
      </div>
      <div class="searchByNameBlock">
        <input placeholder="Search by name..." v-model="searchByNameQuery" type="text" />
      </div>
      <div class="paginationBlock"></div>
    </div>
    <pop-up v-model:show="isPopUpShow">
      <template #footer>
        <create-post-form @closePopUp="closePopUp" @createNewPost="newPost" />
      </template>
    </pop-up>
    <post-list v-if="isPostsLoading" @deletePost="deletePost" :posts="searchByNameList" />
    <div v-else>LOADING...</div>
  </div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import PostList from "@/components/PostList/PostList.vue";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";

export default {
  name: "PostsList",
  components: { CustomSelect, CreatePostForm, PostList },
  data() {
    return {
      posts: [],
      isPopUpShow: false,
      modifyValue: "",
      isPostsLoading: false,
      searchByNameQuery: "",
      sortType: "",
      sortedOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By description" },
      ],
      totalPostsPage: 0,
      postsLimit: 10,
      postsPage: 1,
    };
  },
  mounted() {
    this.fetchUsers();

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.postsPage <= this.totalPostsPage) {
        this.postsPage += 1;
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPostList() {
      return this.posts.sort((post1, post2) => {
        return post1[this.sortType]?.localeCompare(post2[this.sortType]);
      });
    },
    searchByNameList() {
      return this.sortedPostList.filter((post) =>
        post.title.toLowerCase().includes(this.searchByNameQuery.toLowerCase())
      );
    },
  },
  watch: {
    postsPage() {
      this.fetchUsers();
    },
  },
  methods: {
    changeSortType(newType) {
      this.sortType = newType;
    },
    newPost(newPostDesc, newPostName) {
      this.posts.unshift({ id: Date.now(), title: newPostName, body: newPostDesc });
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
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.postsLimit}&_page=${this.postsPage}`
        );
        const headersTotalCount = res.headers.get("x-total-count");
        const newPosts = await res.json();
        this.totalPostsPage = Math.ceil(headersTotalCount / this.postsLimit);

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
.manageListPanel {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.searchByNameBlock {
  margin-top: 20px;
}
.paginationBlock {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.observer {
  height: 30px;
}
</style>
