<template>
  <div class="algorithm-choosing">
      <p class="algorithm-choosing-title">算法选择</p>
      <div class="algorithm-choosing-content">
          <img src="../../../../assets/icons/space.svg" class="algorithm-choosing-image">
          <div class="algorithm-choosing-description">
              <p class="algorithm-name">{{algorithm_name}}</p>
              <p class="algorithm-adjustment">AI Optimizer已为您匹配最优算法</p>
          </div>
          <button class="change-model" @click="this.$store.state.mask_layer=true;">更改模板</button>
          <div :class="[this.$store.state.mask_layer==true?'change-model-table-show':'change-model-table-disappear']">
              <li class="change-model-title">更改模板</li>
              <li v-for="item in algorithm_data" :key="item.name" class="change-model-box">
                <p class="change-model-content" 
                @click="chooseAlgorithm(item.name)">{{item.name}}</p>
                <p class="check-information">查看详情</p>
              </li>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Algorithm-Choosing",
    data(){
        return{
            algorithm_name:"未知",
            algorithm_data:[
                {name:"CQL"},{name:"BCQ"},{name:"TD3"},{name:"SAC"},{name:"COMBO"},{name:"BEAR"}
            ]
        }
    },
    methods:{
        chooseAlgorithm(name){
            this.algorithm_name=name;
            this.$store.state.mask_layer=false;
            this.$store.state.training_setting.algorithm_name=name;
        }
    }
}
</script>

<style scoped>
.algorithm-choosing{
    margin-top:2%;
    width:95%;
    height:20%;
    display:flex;
    flex-direction:column;
}
.algorithm-choosing-title{
    font-size:2.5vh;
    font-weight:bold;
    color:#2A2A2A;
}
.algorithm-choosing-content{
    width:100%;
    height:80%;
    background:#FFFFFF;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:1%;
    border-radius: 2vh;
}
.algorithm-choosing-image{
    width:5vh;
    background:#EEF2FC;
    padding:1vh;
    border-radius:50%;
}
.algorithm-choosing-description{
    width:70%;
    height:55%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.algorithm-name{
    font-size:3.5vh;
    font-weight:bold;
    color:#567EE3;
}
.algorithm-adjustment{
    font-size:2vh;
    color:#C4C4C4;
}
.change-model{
    margin-right:5%;
    width:10%;
    height:40%;
    border-radius:1.5vh;
    border:none;
    background: #E8F0FF;
    color:#567EE3;
    font-size:2vh;
    font-weight: bold;
    cursor: pointer;
    transition: .15s all;
}
.change-model:hover{
    background:#567EE3;
    color:#E8F0FF;
    transition: .15s all;
}
.change-model-table-show{
    position: fixed;
    z-index:2;
    background:white;
    width:30%;
    height:40%;
    top:28%;
    left:35%;
    border-radius:2vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    transition: all .15s;
}
.change-model-table-disappear{
    opacity: 0;
    transition: all .15s;
    position: fixed;
    z-index:-2;
    background:white;
    width:30%;
    height:40%;
    top:28%;
    left:35%;
    border-radius:2vh;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.change-model-title{
    margin-top:2%;
    width:90%;
    color:#567EE3;
    font-size:2.5vh;
    list-style-type: disc;
}
.change-model-box{
    width:90%;
    display:flex;
    height:14.5%;
    align-items:center;
    justify-content: space-between;
    border-bottom:#E5E5E5 0.5px solid;
}
.change-model-content{
    color:#2A2A2A;
    cursor: pointer;
}
.check-information{
    color:#567EE3;
    font-size:2vh;
    cursor: pointer;
    transition: .15s all;
}
.check-information:hover{
    color:#2a60e8;
    transition: .15s all;
}
</style>