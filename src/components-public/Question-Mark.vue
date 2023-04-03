<template>
  <div class="question-mark">
      <p class="question" @mouseenter="is_description=1"  @mouseleave="is_description=0">?</p>
      <p class="description" :class="is_description?'description_show':'description_disappear'">{{description}}</p>
  </div>
</template>

<script>
export default {
    name:"Question-Mark",
    props:{
        description:String
    },
    data(){
        return{
            is_description:0
        }
    }
}
</script>

<style scoped>
.question{
    width:1.7vh;
    height:1.7vh;
    padding:.5vh;
    background:#567EE3;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
}
.description_show{
    position: absolute;
    background:#567EE3;
    color:#FFFFFF;
    padding:1vh;
    border-radius: 1vh;
    transition: .15s all;
}
.description_disappear{
    position: absolute;
    background:#567EE3;
    color:#FFFFFF;
    padding:1vh;
    border-radius: 1vh;
    transition: .15s all;
    opacity: 0;
}
</style>