<template>
  <div class="home">
    <peopleSearcher/>
  </div>
</template>

<script>
import peopleSearcher from '@/components/peopleSearcher.vue'

export default {
  name: 'PersonView',
  components: {
    peopleSearcher
  }
}
</script>
