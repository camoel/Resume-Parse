<template>
  <div class="form">
  <h1>发布招聘信息</h1>
   <div class="form-container">
    <h2>招聘信息填写表单</h2>
    <el-form ref="formRef" :model="form" label-width="120px" class="job-form">
      <el-form-item label="岗位名称：">
        <el-input v-model="form.positionName"></el-input>
      </el-form-item>
      <el-form-item label="岗位描述：">
        <el-input type="textarea" v-model="form.positionDescription"></el-input>
      </el-form-item>
      <el-form-item label="薪资范围：">
      </el-form-item>
      <el-form-item label="最低薪资：">
        <el-input type="number" v-model.number="form.salaryMin"></el-input>
      </el-form-item>
      <el-form-item label="最高薪资：">
        <el-input type="number" v-model.number="form.salaryMax"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button type="secondary" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
 
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import axios from '../../api/request';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'JobForm',
  setup() {
    const form = reactive({
      positionName: '',
      positionDescription: '',
      salaryMin: '',
      salaryMax: '',
    });

    const formRef = ref<HTMLElement | null>(null);

    const submitForm = async () => {
      try {
        const response = await axios.post('/company/position/release', form);
        ElMessage({
          message: '表单提交成功！',
          type: 'success',
          offset: 20,
          duration: 12000, 
        });
        console.log('表单提交成功:', response.data);
      } catch (error) {
        ElMessage({
          message: '表单提交失败，请稍后再试。',
          type: 'error',
          offset: 20,
          duration: 12000, 
        });
        console.error('表单提交失败:', error);
      }
    };

    const resetForm = () => {
      if (formRef.value) {
        (formRef.value as any).resetFields();
        ElMessage({
          message: '表单已重置。',
          type: 'info',
          offset: 20,
          duration: 3000, // Adjust duration if needed
        });
      }
    };

    return {
      form,
      submitForm,
      resetForm,
      formRef,
    };
  },
});
</script>

<style scoped>
.form{
  background-image: url('../assets/img/background.png');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;           /* 使容器占满整个视口高度 */
  margin: 0 auto;
}
.form-container {
  background-color: #f9f9f9;
  width: 600px;
  padding: 20px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 18px;
  top:50%;
  text-align: center;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #32325d;
  font-weight: 800;
  line-height: 50px;
  font-size: 50px;
}

h2 {
  text-align: center;
  margin-bottom: 35px;
  font-size: 30px; /* Adjust heading font size if needed */
}
::v-deep h2{
  color:#32325d;
    padding-top:15px;

}

/* Set global font size to 14px */
body {
  font-size: 18px;
}

.job-form {
  display: flex;
  flex-direction: column;
}

::v-deep .el-form-item {
  padding-right:20px;
}
/* Using ::v-deep to penetrate the scoped style boundary and modify Element Plus styles */
::v-deep .el-form-item__label {
  font-weight: bold; /* Make labels bold */
  color:black;
  font-size:15px;
}

::v-deep .el-input,
::v-deep .el-button,
::v-deep .el-textarea__inner {
  font-size: 15px; /* Adjust form font size */
  margin-bottom:15px;
}

/* Specific styles to adjust sizes if needed */
::v-deep .el-input {
  width: 100%;
  
}

::v-deep .el-button {
  width: auto; /* Adjust button width */
  margin-top:15px;

}
::v-deep .el-button:nth-child(1){
background-color:#6772E5;
margin-right:40px;
}
::v-deep .el-button:nth-child(1):hover{
  background-color: #7795f8;
}

</style>

<style>
/* Custom styling to ensure ElMessage appears in the center top */
.el-message {
  position: fixed !important; /* Ensure the message is fixed to the viewport */
  top: 20px !important; /* Adjust top position if needed */
  left: 50% !important; /* Center horizontally */
  transform: translateX(-50%) !important; /* Center horizontally */
  z-index: 9999; /* Ensure message is on top of other elements */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
  padding: 10px 20px; /* Padding inside the message */
  font-size: 14px; /* Font size */
}

.el-message-success {
  background-color: #f0f9eb; /* Green background for success */
  color: #67c23a; /* Green text color */
}

.el-message-error {
  background-color: #fef0f0; /* Red background for error */
  color: #f56c6c; /* Red text color */
}

.el-message-info {
  background-color: #f5f7fa; /* Blue background for info */
  color: #909399; /* Gray text color */
}
</style>
