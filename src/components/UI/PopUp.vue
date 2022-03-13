<template>
  <div
    ref="popUp"
    class="popUp"
    v-if="show"
    @click="closePopUpHandler"
    @keydown.esc="closePopUpHandler"
  >
    <div @click.stop class="popUp__content">
      <slot :closePopUp="closePopUpHandler"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "popUp",
  props: {
    show: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.closePopUpHandler();
      }
    });
  },
  methods: {
    closePopUpHandler() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.popUp {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.popUp__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  padding: 20px;
}
</style>
