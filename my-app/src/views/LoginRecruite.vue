<template>
  <div class="LoginRecruite">
    <h1>Create Your Free Account</h1>
    <RecruiteSelectLogin/>
  </div>
</template>


<script>
import RecruiteSelectLogin from '@/components/RecruiteSelectLogin.vue'
export default {
  name: 'LoginRecruite',
  components: {
    RecruiteSelectLogin
  } 
}
</script>
