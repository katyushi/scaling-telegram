<template>
  <div class="home">
    <peopleSearcher/>
  </div>
</template>

<script>
// @ is an alias to /src
import peopleSearcher from '@/components/peopleSearcher.vue'

export default {
  name: 'HomeView',
  components: {
    peopleSearcher
  }
}
</script>
