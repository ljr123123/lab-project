<template>
  <div class="User-Box">
      <navigation-component></navigation-component>
      <PageTitle></PageTitle>
      <router-view></router-view>
  </div>
</template>

<script>
import NavigationComponent from '../../components-public/Navigation-Component.vue'
import PageTitle from '../../components-public/Page-Title.vue'
export default {
    name:"UserBox",
    components:{
        NavigationComponent,
        PageTitle
    }
}
</script>

<style>
.User-Box{
    width:100%;
    height:100%;
}
</style>