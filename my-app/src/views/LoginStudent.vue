<template>
  <div class="LoginStudent">
    <h1>Create Your Free Account</h1>
    <StudentSelectLogin/>
  </div>
</template>


<script>
import StudentSelectLogin from '@/components/StudentSelectLogin.vue'
export default {
  name: 'LoginStudent',
  components: {
    StudentSelectLogin
  } 
}
</script>
