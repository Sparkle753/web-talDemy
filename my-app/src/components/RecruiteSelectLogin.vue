<template>
  <div class="RecruiteSelectLogin">
    <form>
      <input type="user" v-model="myInput" placeholder= "Email Address">
      <br>
      <input type="passWord" v-model="myInput" placeholder= "Password">
      <br>
      <button @click="Login">Login</button>
    </form>
    <a href="/UserID">LinkIn</a>
  </div>
</template>


<script>

export default {
  name: 'RecruiteSelectLogin',
  methods: {
				Login: function () {

				}
			}
}
</script>
