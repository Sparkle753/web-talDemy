<template>
  <div class="home">
   <HomeDescription/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeDescription from '@/components/HomeDescription.vue'
export default {
  name: 'HomeView',
  components: {
    HomeDescription
  }
}
</script>
