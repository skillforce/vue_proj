<template>
  <button :class="specificBtnClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    btnType: {
      type: String,
      required: true,
      default() {
        return "createBtn";
      },
    },
  },
  computed: {
    specificBtnClass() {
      switch (this.btnType) {
        case "createBtn":
          return "createBtn";
        case "deleteBtn":
          return "deleteBtn";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.createBtn {
  margin: 10px 10px 0 10px;
  padding: 7px;
  background-color: greenyellow;
  border-radius: 8px;
}
.createBtn:disabled {
  background-color: darkgray;
}
.deleteBtn {
  position: absolute;
  left: 475px;
  top: 0;
  padding: 5px;
  border-radius: 13px;
  background-color: red;
}
</style>
