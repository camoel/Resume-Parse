<template>
  <div class="container">
    <h1>简历表单</h1>
    <div v-if="resumeData" class="section">
      <h2>基本信息</h2>
      <p><strong>姓名：</strong> {{ resumeData.姓名 }}</p>
    </div>
    <div v-if="resumeData" class="section">
      <h2>简历亮点</h2>
      <ul>
        <li v-for="(highlight, index) in resumeData.简历亮点" :key="index">
          {{ highlight }}
        </li>
      </ul>
    </div>
    <div v-if="resumeData" class="section">
      <h2>预测薪资</h2>
      <p>{{ resumeData.预测薪资 }}</p>
    </div>
    <div v-if="resumeData" class="section">
      <h2>短期离职性</h2>
      <p>{{ resumeData.短期离职性 }}</p>
    </div>
    <div v-if="resumeData" class="section">
      <h2>综合能力</h2>
      <div id="echart" style="width: 600px;height:400px;"></div>
    </div>
    <div v-if="resumeData" class="section">
      <h2>候选人标签</h2>
      <div class="tags">
        <span v-for="(tag, index) in resumeData.候选人标签" :key="index" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, RadarComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([RadarChart, TitleComponent, TooltipComponent, LegendComponent, RadarComponent, CanvasRenderer]);

interface ResumeData {
  姓名: string;
  简历亮点: string[];
  预测薪资: string;
  短期离职性: string;
  语言能力: number;
  社会能力: number;
  领导力: number;
  所获荣誉: number;
  教育背景: number;
  工作能力: number;
  候选人标签: string[];
}

export default defineComponent({
  name: 'ResumeForm',
  setup() {
    const resumeData = ref<ResumeData | null>(null);

    const fetchData = async () => {
      const response = await fetch('your-backend-endpoint'); // 替换为你的后端接口
      const data = await response.json();
      resumeData.value = JSON.parse(data.data.jsonResume);
    };

    onMounted(() => {
      fetchData().then(() => {
        if (resumeData.value) {
          const chartDom = document.getElementById('echart')!;
          const myChart = echarts.init(chartDom);
          const option = {
            radar: {
              indicator: [
                { name: '语言能力', max: 100 },
                { name: '社会能力', max: 100 },
                { name: '领导力', max: 100 },
                { name: '所获荣誉', max: 100 },
                { name: '教育背景', max: 100 },
                { name: '工作能力', max: 100 }
              ]
            },
            series: [
              {
                name: '综合能力',
                type: 'radar',
                data: [
                  {
                    value: [
                      resumeData.value.语言能力,
                      resumeData.value.社会能力,
                      resumeData.value.领导力,
                      resumeData.value.所获荣誉,
                      resumeData.value.教育背景,
                      resumeData.value.工作能力
                    ],
                    name: '综合能力'
                  }
                ]
              }
            ]
          };
          myChart.setOption(option);
        }
      });
    });

    return {
      resumeData
    };
  }
});
</script>

<style scoped>
.container {
  width: 60%;
  margin: 0 auto;
}
.section {
  margin-bottom: 20px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
}
.tag {
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px;
}
</style>
