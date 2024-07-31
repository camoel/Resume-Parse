<template>
  <div class="container">
    <div class="title">智能简历解析系统</div>
    <template v-if="!formShow">
      <div class="upload">
        <el-upload
          class="upload-el"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">点击或拖拽<em>上传</em></div>
          <template #tip>
            <div class="el-upload__tip upload-tip">放点提示的话</div>
          </template>
        </el-upload>
      </div>
      <div class="my-space">
        <el-button> 开始解析 </el-button>
        <el-button @click="showForm"> 填写简历 </el-button>
      </div>
    </template>
    <template v-else> <TestForm /> </template>
  </div>
</template>

<script lang="ts" setup>
import TestForm from '@/components/TestForm.vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElButton } from 'element-plus'
import { ref } from 'vue'
const formShow = ref(false)
function showForm() {
  formShow.value = true
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  /* bg */
  background-color: #ffffff;
  background-image: url(../../assets/img/background.png);
  background-repeat: no-repeat;
  background-size: 100%;
  /* flex */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}
.title {
  margin-top: 80px;
  font-size: 30px;
}
.upload-el {
  width: 300px;
}
.upload-tip {
  text-align: center;
}
.my-space {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
}
</style>