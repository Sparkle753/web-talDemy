<template>
  <div class="UserID">
    <UserWait/>
    <UserInputProfile/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserWait from '@/components/UserWait.vue'
import UserInputProfile from '@/components/UserInputProfile.vue'
export default {
  name: 'UserID',
  components: {
    UserWait,
    UserInputProfile
  }
}
</script>
