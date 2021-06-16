<template>
  <button @click="$emit('openList')">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "OpenList",
  props: {
    isShort: {
      type: Boolean,
      requared: true,
    },
    handleClick: {
      type: Function,
      requared: true,
    },
  },
  computed: {
    buttonText() {
      return this.isShort ? ">>" : "<<";
    },
  },
};
</script>

<style scoped lang="css">
button {
  background-color: transparent;
  border: none;
  display: inline-flex;
  margin-left: 10px;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
}
</style>
