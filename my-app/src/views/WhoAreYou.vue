<template>
  <div class="WhoAreYou">
    <div class="LoginChose">
      <h1>Tell Me who you are</h1>
    </div>
      <div>
          <LoginAsStudent/>
          <LoginAsRecruiter/>
      </div>
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


<style>
  .WhoAreYou > .LoginChose{
    text-align: center;
    margin: 3vw 0 3vh 5vw;
    font-size: 30px;
  }
   .WhoAreYou >div{
    display: flex;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    gap: 60px
   }


</style>