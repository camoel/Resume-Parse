<template>
  <div>
    <div class="container" style="text-align:center;">
      {{ data }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from '../../api/request';
import { ElMessage } from 'element-plus';

const data = ref('');

const getData = async () => {
  try {
    const response = await axios.post('/resumes/talentBigData');
    data.value = response;  // 正确地赋值给 `data.value`
    console.log(response);
    ElMessage({
      showClose: true,
      message: '数据获取成功！',
      type: 'success'
    });
  } catch (error) {
    console.error(error);
    ElMessage({
      showClose: true,
      message: '数据获取失败！',
      type: 'error'
    });
  }
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  background-color: #9fd0e4;
}
</style>
