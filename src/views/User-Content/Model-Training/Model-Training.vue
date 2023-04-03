<template>
  <div class="MainContent">
    <ModelTraining :training_information="training_setting"/>
    <TrainingResult/>
    <ParameterSetting :parameter_setting_1="parameter_setting_1" :parameter_setting_2="parameter_setting_2"/>
    <OtherTraining/>
  </div>
</template>

<script>
import ModelTraining from './components/Model-Training-Component.vue'
import OtherTraining from './components/Other-Training.vue'
import ParameterSetting from './components/Parameter-Setting.vue'
import TrainingResult from './components/Training-Result.vue'
export default {
    name:"Model-Training",
    components:{
      ModelTraining,
      ParameterSetting,
      TrainingResult,
      OtherTraining
    },
    data(){
      return{
        training_setting:[
          {name:"环境",value:localStorage.getItem("environment")?localStorage.getItem("environment"):"未知",
          img_src:require('../../../assets/icons/tank.svg')},
          {name:"算法",value:this.$store.state.training_setting.algorithm_name?this.$store.state.training_setting.algorithm_name:"未知"
          ,img_src:require('../../../assets/icons/space.svg')},
          {name:"回合数",value:"1.53",img_src:require('../../../assets/icons/ship.svg')}
        ],
        parameter_setting_1:[
          {name:"数据集/环境",value:this.$store.state.training_setting.parameters[0]?this.$store.state.training_setting.parameters[0]:"未设置"},
          {name:"是否使用GPU",value:this.$store.state.training_setting.parameters[1]?"是":"否"},
        ],
        parameter_setting_2:[
          {name:"随机种子",value:this.$store.state.training_setting.parameters[2]?this.$store.state.training_setting.parameters[2]:"0"},
          {name:"训练总步数",value:this.$store.state.training_setting.parameters[3]?this.$store.state.training_setting.parameters[3]:"0"},
          {name:"每回合步数",value:this.$store.state.training_setting.parameters[4]?this.$store.state.training_setting.parameters[4]:"0"},
          {name:"数据集",value:this.$store.state.training_setting.parameters[5]?this.$store.state.training_setting.parameters[5]:"0"},
        ]
      }
    },
    mounted(){
    },
    methods:{
      getChartsData(){
        fetch()
        .then()
        .then()
        
      }
    }
}
</script>

<style>

</style>