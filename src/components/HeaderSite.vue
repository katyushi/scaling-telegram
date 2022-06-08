<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderSite',

  data() {
    return {
    }
  },

  methods: {
  },

  created() {
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  padding: 15px 0;
  border-bottom: 2px solid gray;
  margin-bottom: 50px;
}
</style>
