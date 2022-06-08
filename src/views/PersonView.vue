<template>
  <div class="home">
    <personDetail/>
  </div>
</template>

<script>
import personDetail from '@/components/personDetail.vue'

export default {
  name: 'PersonView',
  components: {
    personDetail
  }
}
</script>
