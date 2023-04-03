<template>
  <div class="Parameter-Setting">
      <div class="title-content">
        <p class="title">参数配置</p>
        <div class="more-text">
            <p>更多</p>
            <img src="../../../../assets/icons/down.svg" class="pointer">
        </div>
      </div>
      <ul class="parameter-setting-content">
          <li v-for="item in parameter_setting_1" :key="item.name" class="setting-single">
              <p class="setting-title">{{item.name}}</p>
              <p class="setting-value">{{item.value}}</p>
          </li>
          <li v-for="item in parameter_setting_2" :key="item.name" class="setting-single">
              <p class="setting-title">{{item.name}}</p>
              <p class="setting-value">{{item.value}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Parameter-Setting",
    props:{
        parameter_setting_1:Array,
        parameter_setting_2:Array
    }
}
</script>

<style scoped>
.Parameter-Setting{
    width:25%;
    height:58%;
    margin-top:2%;
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
.parameter-setting-content{
    width:100%;
    height:90%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.setting-single{
    display:flex;
    height:13%;
    width:100%;
    background:#FFFFFF;
    border-radius: 1vh;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
}
.setting-title{
    display:flex;
    align-items: center;
    margin-left:5%;
}
.setting-value{
    display:flex;
    align-items: center;
    height:100%;
    border-top-right-radius: 1vh;
    border-bottom-right-radius: 1vh;
    justify-content: center;
    color:#567EE3;
    margin-right:5%;
}
</style>