<template>
  <div class="navigation-box">
      <li v-for="item in navigation_routers" :key="item.name">
          <img :src="item.background_src" class="background-image"
           :class="this.$route.fullPath==item.router?'background-image-yes':'background-image-no'">
      </li>
      <header class="heading-box">
          <div class="heading-image-box">
              <img src="" class="heading-image">
          </div>
          <p class="user-name">{{this.$route.params.email}}</p>
          <p class="user-important-information">{{user_important_information}}</p>
          <ul class="heading-buttons-box">
              <li v-for="item in heading_buttons" :key="item.name" class="heading-button-box"  @click="to(item.router)">
                  <img :src="item.src" class="heading-buttons-images" :title="item.title">
              </li>
          </ul>
      </header>
      <ul class="navigation-router-box">
          <li v-for="(item,index) in navigation_routers" :key="item.name" 
          :class="this.$route.fullPath==item.router?'navigation-router-yes':'navigation-router-no'"
          @click="to(item.router)">
              <p :class="this.$route.fullPath==item.router?'router-number-yes':'router-number-no'">{{index+1}}</p>
              <p :class="this.$route.fullPath==item.router?'router-name-yes':'router-name-no'">{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"NavigationComponent",
    data(){
        return{
            heading_buttons:[
                {src:require('../assets/icons/homepage.svg'),title:"主页",router:"/"},
                {src:require('../assets/icons/phone.svg'),title:"联系方式"},
                {src:require('../assets/icons/start.svg'),title:"???"},
                {src:require('../assets/icons/alert.svg'),title:"???"}
            ],
            navigation_routers:[
                {name:"仿真环境",router:"/"+this.$route.params.email+'/Simulation-Environment',background_src:require('../assets/navigation-backgrounds/tank.png')},
                {name:"算法配置",router:"/"+this.$route.params.email+'/Algorithm-Setting',background_src:require('../assets/navigation-backgrounds/ship.png')},
                {name:"模型训练",router:"/"+this.$route.params.email+'/Model-Training',background_src:require('../assets/navigation-backgrounds/aircraft.png')}
            ],
            user_important_information:"重要信息"
        }
    },
    methods:{
        to(router){
            this.$router.push({path:router});
            console.log(this.$route);
        }
    }
}
</script>

<style scoped>
.navigation-box{
    position:absolute;
    left:0;
    width:17.5%;
    height:100%;
    border-right:1px rgba(0, 0, 0, 0.1) solid;
    display:flex;
    flex-direction:column;
    align-items: center;
    background:none;
}
.background-image-yes{
    position: absolute;
    z-index:-1;
    height:100%;
    left:-3%;
    opacity: .1;
    transition: all .15s;
}
.background-image-no{
    position: absolute;
    z-index:-1;
    height:100%;
    left:-3%;
    opacity: 0;
    transition: all .15s;
}
.heading-box{
    width:90%;
    height:30%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-end;
    border-bottom:1px rgba(0, 0, 0, 0.1) solid;
}
.heading-image-box{
    width:10vh;
    height:10vh;
    border:.6vh #567EE3 solid;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
}
.heading-image{
    width:90%;
    background:#60a9f850;
    border-radius:50%;
}
.user-name{
    font-size:2.5vh;
    color:#2A2A2A;
}
.user-important-information{
    font-size:1vh;
    color:#C4C4C4;
    margin-bottom:2%;
}
.heading-buttons-box{
    display:flex;
    width:100%;
    height:22.5%;
    justify-content: space-evenly;
    align-items:center;
    margin-bottom:2%;
}
.heading-button-box{
    display:flex;
    width:5vh;
    height:5vh;
    border:1px solid #567EE3;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:1vh;
}
.heading-buttons-images{
    width:3vh;
    height:3vh;
    padding:.5vh;
    background:#567ee310;
    border-radius:50%;
    opacity: .5;
    transition: .15s all;
}
.heading-buttons-images:hover{
    opacity: 1;
    transition: .15s all;
    cursor: pointer;
}
.navigation-router-box{
    display:flex;
    flex-direction:column;
    width:100%;
    height:25%;
    align-items:center;
    justify-content: space-evenly;
}
.navigation-router-yes{
    display:flex;
    width:80%;
    height:6vh;
    background:#567EE3;
    border-radius:2vh;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    transition: all .15s;
}
.navigation-router-no{
    display:flex;
    width:80%;
    height:6vh;
    border-radius:2vh;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    transition: all .15s;
}
.navigation-router-no:hover{
    transition: all .15s;
    background:#E8F0FF;
}
.router-number-yes{
    width:3.5vh;
    height: 3.5vh;
    margin-left:5%;
    margin-right:5%;
    background:white;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items:center;
    font-weight:bold;
    color:#567EE3;
}
.router-number-no{
    width:3.5vh;
    height: 3.5vh;
    margin-left:5%;
    margin-right:5%;
    background:white;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items:center;
    font-weight:bold;
    color:#2A2A2A;
}
.router-name-yes{
    margin-left:10%;
    margin-right:15%;
    color:#FFFFFF;
    font-size:2.5vh;
}
.router-name-no{
    margin-left:10%;
    margin-right:15%;
    color:#2A2A2A;
    font-size:2.5vh;
}
</style>