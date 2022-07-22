<template>
<body>
    <div class = "homeDescription">
        <h1 id="Prophet">Prophet: description</h1>
        <h1 id="Guidance">Guidance: description</h1>
        <h1 id="Academic">Academic: description</h1>
        <h1 id="Trust">Trust: description</h1>
        <h1 id="Kaching">Kaching: description</h1>
    </div>     
</body>    
</template>

<script>
export default {
  name: 'HomeDescription',
  data(){
      return {} 
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
    .homeDescription > h1{
        margin: 3vw 0 3vh 5vw;
        text-align: left;
        padding-bottom: 50vh;
        font-size: 100px;
        /*border-style: dashed;*/   
    }

</style>
