<template>
  <input :value="modelValue" @input="inputChange" class="input" />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
      default() {
        return "";
      },
    },
  },
  methods: {
    inputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  margin-top: 10px;
  padding: 7px;
}
</style>
