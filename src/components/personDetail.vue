<template>
  <div class="">
    <div>{{this.personInfo.name}}</div>
    <div>{{this.personInfo.height}}</div>
  </div>
</template>

<script>

export default {
  name: 'peopleDetail',

  data() {
    return {
      personNumber: parseInt(this.$route.query.id),
      personInfo: [],
    }
  },

  methods: {
    getPersonInfo(personNumber) {
      const baseURL = `https://swapi.dev/api/people/${personNumber}`;
      this.$http.get(baseURL).then((response) => {
        this.personInfo = response.data;
      })
    }
  },

  created() {
    this.getPersonInfo(this.personNumber);
  }
}
</script>

<style scoped>
</style>
