<template>
  <div class="Training-Result">
       <div class="title-content">
        <p class="title">训练结果</p>
        <div class="more-text">
            <p>更多</p>
            <img src="../../../../assets/icons/down.svg" class="pointer">
        </div>
      </div>
      <div class="charts-content">
          <SmallerChart :information="[1,2,3,4,5,101]" class="charts-1" @click="cover_screen_1=!cover_screen_1"/>
          <SmallerChart :information="[1,2,3,101]" class="charts-2" @click="cover_screen_1=!cover_screen_1"/>
          <SmallerChart :information="[1,2,3]" class="charts-3" @click="cover_screen_1=!cover_screen_1"/>
      </div>
      <div>
          <SmallerChart :information="[1,2,3,4,5,101]" class="cover-screen" v-show="cover_screen_1" @click="cover_screen_1=!cover_screen_1"/>
          <SmallerChart :information="[1,2,3,101]" class="cover-screen" v-show="cover_screen_2" @click="cover_screen_2=!cover_screen_2"/>
          <SmallerChart :information="[1,2,3]" class="cover-screen" v-show="cover_screen_3" @click="cover_screen_3=!cover_screen_3"/>
      </div>
  </div> 
</template>

<script>
import SmallerChart from './Smaller-Chart.vue'
export default {
    name:"Training-Result",
    components:{
        SmallerChart
    },
    props:{
        charts1_data:Array,
        charts2_data:Array,
        charts3_data:Array
    },
    data(){
        return{
            cover_screen_1:1,
            cover_screen_2:1,
            cover_screen_3:1
        }
    },
    mounted(){
        this.cover_screen_1=0;
        this.cover_screen_2=0;
        this.cover_screen_3=0;
    }
}
</script>

<style scoped>
.Training-Result{
    height:40%;
    width:55%;
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
    width:10%;
    display:flex;
    align-items: center;
    cursor: pointer;
}
.pointer{
    transform: rotate(-90deg);
    width:10%;
    margin-left:2%;
}
.charts-content{
    height:100%;
    width:100%;
    flex-wrap: wrap;
    display:flex;
    flex-direction:column;
}
.charts-1{
    width:60%;
    height:100%;
}
.charts-2{
    width:40%;
   height:90%;
   position:relative;
   top:-10%;
   left:-2%;
   transform: scale(.8,.8);
}
.charts-3{
    width:40%;
   height:90%;
   transform: scale(.8,.8);
   position:relative;
   top:30%;
   left:-42%;
}
.cover-screen{
    height:100vh;
    width:210vh;
    top:0;
    left:0;
    z-index:100;
    background:white;
    position: fixed;
}
</style>