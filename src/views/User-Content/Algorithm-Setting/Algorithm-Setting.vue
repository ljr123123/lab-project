<template>
  <div class="MainContent">  
      <AlgorithmChoosing/>
      <ParameterConfiguration/>
      <div class="step-choose-box"> 
          <button class="step-choose-last" @click="to('/Simulation-Environment')">上一步</button>
          <button class="step-choose-next" @click="to('/Model-Training')">下一步</button>
      </div>
  </div>
</template>

<script>
import AlgorithmChoosing from './components/Algorithm-Choosing.vue'
import ParameterConfiguration from './components/Parameter-Configuration.vue'
export default {
    name:"Algorithm-Setting",
    components:{
        AlgorithmChoosing,
        ParameterConfiguration
    },
    methods:{
        to(router){
            this.$router.push({path:router});
        }
    }
}
</script>

<style scoped>
.step-choose-box{
    margin-top:2.5%;
    width:30%;
    display: flex;
    justify-content: space-between;
    height:6%;
}
.step-choose-last,.step-choose-next{
    width:40%;
    height:100%;
    border-radius:2vh;
    border:0;
    font-size:2.2vh;
    font-weight:bold;
    cursor:pointer;
}
.step-choose-last,.step-choose-next:hover{
    background:#FFFFFF;
    color:#000000;
    transition: all .15s;
}
.step-choose-next,.step-choose-last:hover{
    background:#567EE3;
    color:#FFFFFF;
    transition: all .15s;
}
</style>