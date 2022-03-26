Vue.component('my-filter', {
  template: `
    <form action="#" class="search-form" @submit.prevent="filterItems">
        <input type="text" class="search-field" v-model="userSearch">
        <button type="submit" class="btn-search">
            <i class="fas fa-search"></i>
        </button>
    </form>
  `,

  data() {
    return {
      userSearch: "",
    }
  },

  methods: {
    filterItems() {
      this.$emit("filter", this.userSearch);
    }
  }
});