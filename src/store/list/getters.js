export default {
  TITLES_ARRAY(state) {
    return state.titles;
  },
  GET_ITEMS_BY_TITLE: (state) => (titleChar) => {
    // const searchebleData = getters.GET_SEARCHEBLE_DATA;
    const items = state.data.filter((item) => item.title[0] === titleChar);

    const maped = items.map((el, i) => {
      return { index: i, value: el.title.toLowerCase() };
    });

    if (state.sortType === "asc") {
      maped.sort(function (a, b) {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
      });
    }
    if (state.sortType === "desc") {
      maped.sort(function (a, b) {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
      });
    }

    const sortedItems = maped.map((el) => items[el.index]);
    return sortedItems;
  },
  fromListCompSearchValue(state, getters) {
    const searchString = getters.GET_SEARCH_VALUE;
    const regexp = new RegExp(searchString, "i");
    const searchbleItems = state.data.filter((el) => regexp.test(el.title));
    return searchbleItems;
  },
};
