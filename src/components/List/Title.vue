<template>
  <div class="title">
    <span class="name">{{ name }}</span>
    <span class="length">({{ length }})</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    name: {
      type: String,
    },
    length: {
      type: Number,
    },
  },
};
</script>

<style lang="css" scoped>
.name {
  margin-right: 5px;
}
</style>
