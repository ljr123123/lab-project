<template>
  <div class="parameter-configuration">
      <div class="parameter-configuration-title-content">
        <p class="parameter-configuration-title">参数配置</p>
        <QuestionMark :description="'这是一些介绍'"/>
      </div>
      <div class="parameter-configuration-content">
          <div class="parameter-setting-buttons-box">
              <button @click="is_button=1"
              :class="is_button?'parameter-setting-button-yes':'parameter-setting-button-no'">使用默认参数</button>
              <button @click="is_button=0"
              :class="!is_button?'parameter-setting-button-yes':'parameter-setting-button-no'">查看更多参数设置</button>
          </div>
          <ul class="parameter-setting-options">
              <li v-for="(item,index) in parameter_setting_options_2" :key="item.name"  class="parameter-setting">
                  <p class="setting-title">{{item.name}}</p>
                  <select v-model="item.value" class="parameter-setting-select" v-if="item.name=='是否使用GPU'" 
                  @change="limit_with_store(item.value,index)">
                      <option value=0>否</option>
                      <option value=1>是</option>
                  </select>
                  <select v-model="item.value" class="parameter-setting-select" v-if="item.name=='数据集/环境'" 
                  @change="limit_with_store(item.value,index)">
                      <option value=0>未选择</option>
                      <option value="Ant-random-v2">Ant-random-v2</option>
                      <option value="Ant-medium-v2">Ant-medium-v2</option>
                      <option value="Ant-medium-replay-v2">Ant-medium-replay-v2</option>
                      <option value="Ant-full-replay-v2">Ant-full-replay-v2</option>
                      <option value="Ant-medium-expert-v2">Ant-medium-expert-v2</option>
                      <option value="Ant-expert-v2">Ant-expert-v2</option>
                  </select>
              </li>
               <li v-for="(item,index) in parameter_setting_options_1" :key="item.name" class="parameter-setting">
                  <p class="setting-title">{{item.name}}</p>
                  <input v-model="item.number" type="number" class="parameter-setting-number"
                  @change="limit_with_store(item.number,index+2)">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import QuestionMark from '../../../../components-public/Question-Mark.vue'
export default {
    name:"parameter-configuration",
    components:{
        QuestionMark
    },
    data(){
        return{
            parameter_setting_options_1:[
                {name:"随机种子",number:0},
                {name:"训练总步数",number:0},
                {name:"每回合步数",number:0},
                {name:"数据集",number:0}
            ],
            parameter_setting_options_2:[
                {name:"数据集/环境",value:0},
                {name:"是否使用GPU",value:0}
            ],
            is_button:1
        }
    },
    methods:{
        limit_with_store(data,index){
            this.$store.state.training_setting.parameters[index]=data;
            console.log(this.$store.state.training_setting.parameters);
        }
    }
}
</script>

<style scoped>
.parameter-configuration{
    margin-top:2%;
    width:95%;
    height:60%;
    display:flex;
    flex-direction:column;
}
.parameter-configuration-title-content{
   display:flex;
   align-items: center;
}
.parameter-configuration-title{
    font-size:2.5vh;
    font-weight:bold;
    color:#2A2A2A;
    margin-right:.5%;
}
.parameter-configuration-content{
    width:100%;
    height:90%;
    background:#FFFFFF;
    margin-top:2%;
    border-radius:2vh;
    display:flex;
    flex-direction:column;
}
.parameter-setting-buttons-box{
    display:flex;
    height:15%;
    margin-left:2%;
    margin-top:2%;
}
.parameter-setting-button-yes{
    border:none;
    background:#E8F0FF;
    height:100%;
    width:14%;
    margin-right:2%;
    color:#567EE3;
    border-radius:1vh;
    font-size:2vh;
    cursor: pointer;
    transition: all .15s;
}
.parameter-setting-button-no{
    border:none;
    background:#FFFFFF;
    height:100%;
    width:14%;
    margin-right:2%;
    color:#567EE3;
    border-radius:1vh;
    font-size:2vh;
    cursor: pointer;
    transition:.15s all;
}
.parameter-setting-options{
    margin-left:2%;
    width:96%;
    margin-top:1%;
}
.parameter-setting{
    display:flex;
    margin-top:.8%;
    height:16%;
}
.setting-title{
    color:#2A2A2A;
    font-size:2.3vh;
    font-weight: bold;
    width:15%;
}
.parameter-setting-number{
    width:75%;
    font-size:2vh;
    font-weight: bold;
    border-radius:1vh;
    border:1.5px solid #E5E5E5;
}
.parameter-setting-select{
    width:10%;
    text-align: center;
    font-size:2vh;
    font-weight:bold;
    border:1.5px solid #2A2A2A;
    border-radius:1vh;
    opacity: .2;
}
</style>