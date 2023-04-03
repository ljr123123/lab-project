<template>
  <div class="page-title"> 
      <img src="../assets/logo.png" class="page-title-image">
      <p class="page-title-text">AI Optimizer</p>
      <div class="page-title-user">
          <p class="exit-login" @click="this.$router.push({path:'/'})">退出</p>
          <div class="user-heading"></div>
          <p class="user-email">{{this.$route.params.email}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:"Page-Title"
}
</script>

<style scoped>
.page-title{
    position:absolute;
    left:17.5%;
    height:10%;
    width:82.5%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-bottom:1px #E5E5E5 solid;
    background:white;
}
.page-title-image{
    height:40%;
    margin-left:5%;
}
.page-title-text{
    width:62%;
    font-size:4vh;
    font-weight:bold;
}
.page-title-user{
    width:20%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-right:5%;
}
.user-heading{
    margin-left:10%;
    width:5vh;
    height:5vh;
    background:#E5E5E5;
    border-radius:50%;
}
.user-email{
    font-size:2vh;
}
.exit-login{
    color:#567EE3;
    cursor: pointer;
}
.exit-login:hover{
    text-shadow: 0px 0px .5px  #567EE3;
}
</style>