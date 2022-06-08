<template>
  <nav>
    <router-link to="/" class="nav-buttons">
      <img src="@/assets/logo.svg" alt="logo">
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderSite',
}
</script>

<style scoped>
nav {
  width: 100%;
  padding: 15px 0;
  border-bottom: 2px solid gray;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.nav-buttons,
.nav-buttons img {
  height: 50px;
  width: 50px;
}

@media (max-width: 768px) {
  nav {
    padding: 10px 0;
  }
  .nav-buttons,
  .nav-buttons img {
    height: 40px;
    width: 40px;
  }
}
</style>
