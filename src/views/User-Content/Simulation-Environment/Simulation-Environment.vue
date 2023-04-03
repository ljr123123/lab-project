<template>
  <div class="MainContent">
    <p class="choosing-title">仿真环境</p>
    <div class="preset-environment">
      <li class="preset-title">预设想定</li>
      <ul class="preset-content">
        <li v-for="(item, index) in preset_environments" :key="item.name"
          :class="[item.is_choose ? 'preset-setting-box-yes' : 'preset-setting-box-no']"
          @click="setEnvironment(item.name, item.type, index)">
          <img :src="item.img_src" class="setting-icons">
          <div>
            <p class="preset-setting-type">{{ item.type }}</p>
            <p class="preset-setting-name">{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="selfSetting-environment">
      <li class="preset-title">自定义想定</li>
      <input type="file" class="upload-file-input">
      <div class="upload-box">
        <img src="../../../assets/icons/upload.svg" class="upload-image">
        <p class="upload-text">上传想定配置文件</p>
      </div>
    </div>
    <button class="step-choose-next" @click="createProject(title, environment)">下一步</button>
  </div>
</template>

<script>
import fetchDataLocation from '../../../App.vue'
export default {
  name: "Simulation-Environment",
  data() {
    return {
      preset_environments: [
        { name: "多形态机器人", type: "环境", img_src: require("../../../assets/icons/bot.svg"), is_choose: 0 },
        { name: "智能物流", type: "陆战", img_src: require("../../../assets/icons/tank.svg"), is_choose: 0 },
        { name: "智能营销", type: "空战", img_src: require("../../../assets/icons/aircraft.svg"), is_choose: 0 },
        { name: "军事智能", type: "海战", img_src: require("../../../assets/icons/ship.svg"), is_choose: 0 },
        { name: "无人机作战", type: "环境", img_src: require("../../../assets/icons/noManFlying.svg"), is_choose: 0 },
        { name: "多域联合", type: "环境", img_src: require("../../../assets/icons/space.svg"), is_choose: 0 },
      ],
      environment: undefined,
      title: undefined
    }
  },
  methods: {
    setEnvironment(name, type, index) {
      for (let a = 0; a < this.preset_environments.length; ++a) {
        if (this.preset_environments[a].is_choose) {
          this.preset_environments[a].is_choose = 0;
          break;
        }
      }
      this.title = name;
      this.environment = type;
      this.preset_environments[index].is_choose = 1;
    },
    createProject(title, environment) {
      if (title) {
        fetch(fetchDataLocation+"/users/" + localStorage.getItem("user_id") + "/projects/", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify({
            title: title,
            description: environment,
            project_type: "offlinerl",
          }),
        })
          .then((res) => res.json())
          .then((res) => { 
            if(res.id){
              localStorage.setItem("project_id",res.id);
              localStorage.setItem("environment",environment);
              this.$router.push({path:"/"+this.$route.params.email+'/Algorithm-Setting'});
            }
            else{
              alert("请重新登录!");
              this.$router.push({path:'/'});
            }
          });
      }
      else{
        alert("请选择仿真环境!（＞ε＜）");
      }
    }
  }
}
</script>

<style scoped>
.choosing-title {
  font-size: 3.2vh;
  font-weight: bold;
  color: #2A2A2A;
  width: 94%;
  margin-top: 1.5%;
}
.preset-environment {
  width: 94%;
  height: 35%;
  margin-top: 1%;
}
.preset-title {
  list-style-type: disc;
  color: #567EE3;
  font-size: 2.8vh;
}
.preset-content {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 1%;

}
.preset-setting-box-yes {
  transform: scale(1.05, 1.05);
  width: 14%;
  height: 100%;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2vh;
  cursor: pointer;
  transition: all .15s;
}
.preset-setting-box-no {
  width: 14%;
  height: 100%;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2vh;
  cursor: pointer;
  transition: all .15s;
}
.preset-setting-box-no:hover {
  transform: scale(1.05, 1.05);
  transition: all .15s;
}
.setting-icons {
  width: 5vh;
  padding: .8vh;
  background: #EEF2FC;
  border-radius: 50%;
  margin-top: 8%;
  margin-left: 8%;
}
.preset-setting-name {
  margin-left: 8%;
  font-size: 2.8vh;
  color: #2A2A2A;
  font-weight: bold;
  margin-bottom: 2%;
}
.preset-setting-type {
  margin-left: 8%;
  margin-bottom: 5%;
  font-size: 2.2vh;
  color: #2A2A2A;
}
.selfSetting-environment {
  width: 94%;
  height: 40%;
  margin-top: 1%;
}
.upload-file-input {
  width: 94%;
  height: 35%;
  background: blue;
  margin-top: 1%;
  opacity: 0;
  position: absolute;
  cursor: pointer;
}
.upload-box {
  width: 100%;
  height: 88%;
  background: red;
  margin-top: 1%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2vh;
  transition: all .15s;
}
.step-choose-next {
  margin-top: 2%;
  width: 12%;
  height: 6%;
  border-radius: 2vh;
  border: 0;
  font-size: 2.2vh;
  font-weight: bold;
  cursor: pointer;
  background: #567EE3;
  color: #FFFFFF;
  transition: all .15s;
}
.step-choose-next:hover {
  background: #FFFFFF;
  color: #000000;
  transition: all .15s;
}
</style>