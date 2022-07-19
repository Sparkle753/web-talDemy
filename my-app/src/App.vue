<template>
 <nav> 
    <div class = "homeManu-bar">
          <div class = "homeManu-logo">
            <img :src = logo :width=" sizeImage" :height="sizeImage">
            <p class = "homeManu-logo-text">talDemy</p>   
          </div> 
          <router-link to="/home" onclick="javascript:window.location='#Prophet';" class = "homeManu-item">Prophet</router-link>
          <router-link to="/home" onclick="javascript:window.location='#Guidance';" class = "homeManu-item">Guidance</router-link> 
          <router-link to="/home" onclick="javascript:window.location='#Academic';" class = "homeManu-item">Academic</router-link>
          <router-link to="/home" onclick="javascript:window.location='#Trust';" class = "homeManu-item">Trust</router-link>
          <router-link to="/home" onclick="javascript:window.location='#Kaching';" class = "homeManu-item">Kaching</router-link>
          <router-link to="/who-are-you" class = "homeManu-item">Login/Signup</router-link>        

    </div>  
      <router-view/>

  </nav>
  
</template>

<script>

export default {
  methods: {
    goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo(0, top);
    }
  },
  name: 'App',
  data(){
      return {
        logo: require('@/assets/logo/Wordpress Transparent.png'),
        sizeImage : 50
      } 
    }
  
}



</script>


<style>
  .homeManu-bar{   
    /*border: 1px solid black;*/
    background-color: #e6e6e6;
    color:black;
    align-items: center;
    font-size: 24px;
    display: flex;
  }

  .homeManu-logo{
    display: flex;
    margin: 0 auto;
  }
   .homeManu-logo > p{
    padding-left: 5px;
  }
  
  .homeManu-item{
    font-family: "Times New Roman", Times, serif;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    padding-left: 1vw;
    padding-right: 1vw;

    /*pointer-events: none;*/
    /*cursor: default;*/
    /*border: 1px solid black;*/
    
 }

</style>
