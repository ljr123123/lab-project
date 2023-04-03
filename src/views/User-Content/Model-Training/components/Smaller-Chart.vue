<template>
<div class="echarts-content" title="点击查看大图">    
    <v-chart :option="option" />
</div>
</template>

<script>
import { TooltipComponent, GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { use } from "echarts/core";
import VChart from "vue-echarts";

use([
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

export default {
  name: "HelloWorld",
  components: {
    VChart,
  },
  data() {
    return {
        number:0,
        xAxisInformation:[],
        cover_screen_style:{
                transform:"scale(1,1)",
                height:"100vh"
            },
      option: {
        tooltip: {
          trigger: "axis",
          formatter: "Round{b}:{c}",
        },
        xAxis: {
          type: "category",
          data: this.xAxisInformation,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data:this.information,
            type: "line",
            smooth: true
          },
        ],
      },
    };
  },
  props:{
      information:Array
  },
  mounted(){
      for(let a=0;a<this.information.length;a++){
          this.xAxisInformation+=a;
      }
  },
  methods:{
      coverScreen(){

      }
  }
};
</script>

<style scoped>
</style>