<template>
<body>
    <div class = "homeDescription">
        <div class = "ProphetBox">         
            <h1 id="Prophet">Prophet: description</h1>          
            <img :src = logoProphet :width=" sizeImage" :height="sizeImage">       
        </div> 
        <div class = "GuidanceBox">
            <h1 id="Guidance">Guidance: description</h1>
            <img :src = logoGuidance :width=" sizeImage" :height="sizeImage">
        </div>
        <div class = "AcademicBox">
            <h1 id="Academic">Academic: description</h1>
        </div>
        <div class = "TrustBox">
            <h1 id="Trust">Trust: description</h1>
        </div>
        <div class = "KachingBox">
            <h1 id="Kaching">Kaching: description</h1>
        </div>
    </div>     
</body>    
</template>

<script>
export default {
  name: 'HomeDescription',
  data(){
      return {
        logoProphet: require('@/assets/prediction.png'),
        logoGuidance: require('@/assets/connection.png'),
        sizeImage : 500,  
      } 
    }

}
</script>

<style>
   body{
    background-color: #ffffff;
    
    /*background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);*/
    /*
    background-color: #d5fefd;
    background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);*/
    }
    .homeDescription h1{
        margin: 0 0 1vh 4vw;
        text-align: left;
        padding-bottom: 50vh;
        font-size: 50px;
        /*border-style: dashed;*/   
    }

    .ProphetBox{
        display: flex;
        justify-content: space-between;
        padding-top: 80px;
        padding-left: 10vw;
        background-image: url('../assets/wave.svg');
        background-repeat: no-repeat;  

        /*
        background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        border-radius: 15px 200px;
        gap: 60px
        */
    }
    .ProphetBox h1{
        padding-right: 300px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 6px 0px, rgba(0, 0, 0, 0.1) 0px 8px 8px 0px, rgba(0, 0, 0, 0.1) 0px 16px 16px 0px, rgba(0, 0, 0, 0.15) 8px 32px 32px 0px, rgba(0, 0, 0, 0.15) 8px 64px 64px 0px;
        background: #ffffff;

    }
    .GuidanceBox{
        display: flex;
        justify-content: space-between;
        margin-top: 30vh;
    }

</style>
