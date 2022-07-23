<template>

  <nav :class="{'is-sticky': screenSize >= 0}"> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div class = "homeManu-bar">
            <div class = "homeManu-logo">
              <img :src = logo :width=" sizeImage" :height="sizeImage">
              <p class = "homeManu-logo-text">talDemy</p>   
            </div> 
            <div>
              <router-link to="/home" onclick="javascript:window.location='#Prophet';" class = "homeManu-item">Prophet</router-link>
              <router-link to="/home" onclick="javascript:window.location='#Guidance';" class = "homeManu-item">Guidance</router-link> 
              <router-link to="/home" onclick="javascript:window.location='#Academic';" class = "homeManu-item">Academic</router-link>
              <router-link to="/home" onclick="javascript:window.location='#Trust';" class = "homeManu-item">Trust</router-link>
              <router-link to="/home" onclick="javascript:window.location='#Kaching';" class = "homeManu-item">Kaching</router-link>    
            </div>
            <div class ="homeManu-Login">
              <router-link to="/who-are-you" class = "homeManu-item">Login</router-link>   
            </div>     
            <div class ="homeManu-Signup">
              <router-link to="/who-are-you" class = "homeManu-item">Signup</router-link>        
            </div>
      </div> 
      <router-view/>
  </nav>

</template>

<script>
export default {  
  name: 'App',
  data(){
      return {
        logo: require('@/assets/logo/Wordpress Transparent.png'),
        sizeImage : 40,       
      } 
  },

}



</script>


<style>
  *{
    margin: 0;
    padding: 0;
  
  }
  .homeManu-bar{   
    /*border: 1px solid black;*/
    /*background-color: #e5e4e2;*/
    background-color:#ffffff;
    align-items: center;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    padding-bottom: 5px;
  }

  .homeManu-logo{
    display: flex;
    margin: 1vh auto 1.5vh 5vw;
  }
   .homeManu-logo > p{
    
    padding-left: 5px;
    margin-top: 1.5vh;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;
  }
  
  .homeManu-item{
    font-family: arial;
    font-weight: bold;
    font-size: 18px;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    padding-left: 1vw;
    padding-right: 1vw;
    color: black;

    /*pointer-events: none;*/
    /*cursor: default;*/
    /*border: 1px solid black;*/
    
 }

  .homeManu-Login > .homeManu-item{
  color: rgb(14, 75, 243);
  margin-left: 3vw ;
 }

 .homeManu-Signup > .homeManu-item{
  padding: 15px;
  margin-right: 2vw ;
  color: rgb(255, 255, 255);
  background-color: rgb(14, 75, 243);
  border-radius: 10px ;
 }

</style>