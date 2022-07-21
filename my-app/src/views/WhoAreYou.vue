<template>
  <div class="WhoAreYou">
    <h1>Tell Me who you are</h1>
      <LoginAsStudent/>
      <LoginAsRecruiter/>
  </div>
</template>


<script>
import LoginAsRecruiter from '@/components/LoginAsRecruiter.vue'
import LoginAsStudent from '@/components/LoginAsStudent.vue'
export default {
  name: 'WhoAreYou',
  components: {
    LoginAsStudent,
    LoginAsRecruiter
  }
}
</script>
