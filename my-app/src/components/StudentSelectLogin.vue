<template>
  <div class="StudentSelectLogin">
    <form>
      <input type="user" v-model="myInput" placeholder= "Email Address">
      <br>
      <input type="passWord" v-model="myInput" placeholder= "Password">
      <br>
      <button @click="Login">Login</button>
    </form>
    <a href="/UserID">LinkIn</a>
    <GoogleSignIn/> 
    <a href="/UserID">Facebook</a>
  </div>
</template>


<script>
import GoogleSignIn from "@/components/GoogleSignIn.vue"
export default {
    name: 'StudentSelectLogin',
    components: {
    GoogleSignIn
  }
  }

</script>
