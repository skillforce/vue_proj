<template>
  <select v-model="selectValue" @change="changeOptions">
    <option disabled value="">Select option...</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectValue: "",
    };
  },
  methods: {
    changeOptions() {
      this.$emit("change-selected-options", this.selectValue);
    },
  },
};
</script>

<style scoped></style>
