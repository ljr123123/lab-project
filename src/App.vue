<template>
  <div 
  :class="this.$store.state.mask_layer?'mask-layer-yes':'mask-layer-no'"
  @click="this.$store.state.mask_layer=false"></div>
  <router-view></router-view>
</template>
<script>
export default{
  data(){
    return{
      fetchDataLocation:"http://39.101.138.137:8000"
    }
  }
}
</script>
<style>
html{width:100%;height:100%;}
body{margin:0;width:100%;height:100%;}
#app{width:100%;height:100%;}
ul{margin:0;padding:0;}
li{margin:0;list-style:none;font-family:PingFang SC;}
p{margin:0;font-family:PingFang SC;}
button{font-family:PingFang SC;}
input{font-family:PingFang SC;}
/*去除了H5标准的网页布局风格*/
.MainContent{
  width:82.5%;
  height:90%;
  position:absolute;
  top:10%;
  left:17.5%;
  display:flex;
  flex-direction:column;
  align-items:center;
  background:#fbfafa;
  flex-wrap: wrap;
}
.mask-layer-yes{
  position: fixed;
  width:100%;
  height:100%;
  z-index:2;
  background:#D3D3D3;
  opacity: .5;
  transition: all .15s;
}
.mask-layer-no{
  position: fixed;
  width:100%;
  height:100%;
  z-index:-1000;
  background:#D3D3D3;
  opacity: 0;
  transition: all .15s;
}
@font-face {
  font-family:PingFang SC;
  src: url(./assets/fonts/苹方黑体-准-简.ttf);
}
</style>