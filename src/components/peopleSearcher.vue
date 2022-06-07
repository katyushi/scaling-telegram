<template>
  <div class="">
  </div>
</template>

<script>
export default {
  name: 'peopleSearcher',

  data() {
    return {
      peopleInfo: []
    }
  },

  methods: {
    searchPeople() {
      const baseURL = "https://swapi.dev/api/people/";
      this.$http.get(baseURL).then((response) => {
        this.peopleInfo = response.data;
      })
    }
  },

  created() {
    this.searchPeople()
  }
}
</script>

<style scoped>

</style>
