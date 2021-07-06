<template>
  <div class="error" v-show="errorMessage">
    <div class="error__content">
      <h3 class="error__header">Error notification!</h3>
      <div class="error__body">
        Oooops! <br />
        Looks like there is an error! <br />
        {{ errorMessage }}
      </div>
      <button class="error__close" @click="dismiss">Dismiss</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_ERROR } from "../store/mutations.type";
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    dismiss() {
      this.$store.commit(SET_ERROR, "");
    },
  },
  computed: {
    ...mapGetters(["errorMessage"]),
  },
};
</script>

<style>
.error {
  position: fixed;
  width: 300px;
  top: 20vh;
  left: calc(50% - 150px);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: rgb(252, 213, 208);
  padding-bottom: 10px;
}
.error__header {
  padding: 10px;
  background-color: red;
  color: whitesmoke;
}
.error__body {
  font-size: 20px;
  padding: 10px;
}
.error__close {
  background-color: red;
  border: none;
  color: whitesmoke;
  padding: 5px 10px;
  border-radius: 4px;
  display: block;
  margin-left: auto;
  cursor: pointer;
  margin-right: 10px;
}
</style>
