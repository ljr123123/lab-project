<template>
  <div class="Login-View">
    <img src="../../assets/navigation-backgrounds/aircraft.png" class="background-image"/>
    <div class="login-content">
        <p class="login-title">{{title?'登录':'注册'}}</p>
      <div class="input-boxes">
        <p class="input-box-title">邮箱</p>
        <input placeholder="在此输入您的邮箱" v-model="email" class="input"
        @keydown.enter="login(this.email,this.password),logon(this.email,this.password)"/>
      </div>
      <div class="input-boxes">
        <p class="input-box-title">密码</p>
        <input placeholder="在此输入您的密码" v-model="password" class="input" type="password"  
        @keydown.enter="login(this.email,this.password),logon(this.email,this.password)"/>
      </div>
      <div class="other-box">
        <p class="logon" @click="title=!title">{{title?"注册":"登录"}}</p>
        <p class="forget-password">忘记密码?</p>
      </div>
    </div>
  </div>
</template>

<script>
import fetchDataLocation from '../../App.vue'
export default {
  name: "Login-View",
  data() {
    return {
      email: "",
      password: "",
      title:1,
    };
  },
  methods: {
    logon(email, password) {
      if(!this.title){
      var myHeaders = { "Content-Type": "application/json" };
      var raw = JSON.stringify({
        email: email,
        password: password,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(fetchDataLocation+"/users/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if(result.email){
            alert("注册成功! ρ(＾ o ＾)♪");
          }
          else{alert("账号重复啦! ˇωˇ")}
        })}
    },
    login(email, password) {
      if(this.title){
      var myHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "application/json",
      };
      var raw = JSON.stringify({
        VECDX:
          "=x&username=" +
          email +
          "&password=" +
          password +
          "&scope=&client_id=&client_secret=",
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
      fetch("http://39.101.138.137:8000/token", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if(result.access_token){
            localStorage.setItem("user_id",result.user_id);
            localStorage.setItem("access_token",result.access_token);
            this.$router.push({path:'/'+this.email+'/Simulation-Environment'});
          }
          else alert("邮箱或密码错误!");
        });}
    },
  }
};
</script>

<style scoped>
.Login-View{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  z-index:-1;
}
.login-content{
  width:30%;
  height:60%;
  background:white;
  border-radius:2vh;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.login-title{
  margin-top:8%;
  font-size:4.5vh;
  font-weight: bold;
  color:#567EE3;
}
.input-boxes,.other-box{
  width:80%;
  margin-top:8%;
}
.other-box{
  display:flex;
  justify-content: flex-end;
}
.input-box-title{
  font-weight:bold;
  font-size:2.5vh;
}
.input{
  width:100%;
  border:0;
  border-bottom:2px solid #000000;
  margin-top:5%;
  font-size:2vh;
  outline:0;
}
.logon,.forget-password{
  margin-left:2%;
  color:#567EE3;
  cursor: pointer;
}
.logon:hover,.forget-password:hover{
  color:#3567e6
}
.background-image{
  width:100%;
  height:180%;
  position: fixed;
  top:-40%;
  z-index:-100;
  opacity: .1;
}
</style>