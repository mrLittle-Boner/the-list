<template>
  <div class="search-wrapper">
    <form @submit.prevent="" class="search">
      <input
        class="search__input"
        type="text"
        :value="searchValue"
        @input="updateSearch($event.target.value)"
        placeholder="Search..."
      />
      <button class="search__clear" type="button" @click="clearInput">
        <i class="fas fa-times"></i>
      </button>
    </form>
    <button
      class="search__case-sense"
      :class="{ 'search__case-sense--active': caseSensitive }"
      @click="toggleCaseSens"
    >
      Az
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { CHANGE_CASE_SENSITIVE } from "../store/mutations.type";
import { UPDATE_SEARCH_VALUE } from "../store/actions.type";
export default {
  name: "AppSearch",
  methods: {
    clearInput() {
      this.$store.dispatch(UPDATE_SEARCH_VALUE, "");
    },
    toggleCaseSens() {
      this.$store.commit(CHANGE_CASE_SENSITIVE);
    },
    updateSearch(value) {
      this.$store.dispatch(UPDATE_SEARCH_VALUE, value);
    },
  },
  computed: {
    ...mapGetters(["caseSensitive", "searchValue"]),
  },
};
</script>

<style>
.search {
  margin-top: 10px;
  position: relative;
}
.search__input {
  padding: 8px 30px 8px 10px;
  border: none;
  border-radius: 4px;
  width: 100%;
}
.search__clear {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 31px;
  height: 31px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.search__case-sense {
  margin-top: 10px;
  background-color: grey;
  border: none;
  color: whitesmoke;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: inherit;
  cursor: pointer;
}

.search__case-sense--active {
  background-color: #29db30;
}
</style>
