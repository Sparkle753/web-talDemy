<template>
    <div class = "homeManu">
      <img :src = logo :width=" sizeImage" :height="sizeImage">
      <h1> Prophet </h1>
      <h1> Guidance </h1>
      <h1> Academic </h1>
      <h1> Trust</h1>
      <h1> Kaching </h1>
      <h1> Login/Signup as Recruiter </h1>
      <h1> Login/Signup as Student </h1>
    </div>
</template>

<script>

export default {
  name: 'HomeManu',
  data(){
      return {
        logo: require('@/assets/logo/Wordpress Transparent.png'),
        sizeImage : 50
      } 
    }

}
</script>

<style>
  .homeManu{
    display: flex;
  }

  .homeManu > h1{
    margin:  0 auto;
    border: 1px solid black;
    text-align: center;
    flex: 100%;
  }

  

</style>
