<template>
  <div class="Other-Training">
      <div class="title-content">
        <p class="title">其他训练</p>
        <div class="more-text">
            <p>更多</p>
            <img src="../../../../assets/icons/down.svg" class="pointer">
        </div>
      </div>
      <ul class="training-content">
          <li v-for="item in other_training" :key="item.name" class="training-single">
              <img src="../../../../assets/icons/bot.svg" class="training-image">
              <p class="training-name">{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Other-Training",
    data(){
        return{
            other_training:[
                {name:"项目1"},
                {name:"橡木2"},
                {name:"香木3"}
            ]
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.Other-Training{
    width:25%;
    height:30%;
}
.title-content{
    display:flex;
    justify-content: space-between;
}
.title{
    font-size:3.2vh;
    font-weight:bold;
    color:#2A2A2A;
}
.more-text{
    display:flex;
    width:20%;
    display:flex;
    align-items: center;
    cursor: pointer;
}
.pointer{
    transform: rotate(-90deg);
    width:20%;
    margin-left:2%;
}
.training-content{
    width:100%;
    height:90%;
    display:flex;
    justify-content: space-evenly;
    flex-direction: column;
}
.training-image{
    width:5vh;
    margin-left:5%;
    padding:.8vh;
    background:#FFFFFF;
    border-radius: 50%;
}
.training-single{
    display:flex;
    align-items: center;
    height: 30%;
}
.training-name{
    margin-left:5%;
    font-size:2.3vh;
    color:#2A2A2A;
}
</style>