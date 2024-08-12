<template>
  <div class="form">
    <div class="job-form">
      <h2>招聘信息填写表单</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="jobTitle">岗位名称:</label>
          <input
            id="jobTitle"
            v-model="formData.jobTitle"
            required
          />
        </div>

        <div class="form-group">
          <label for="jobDuties">岗位职责:</label>
          <textarea
            id="jobDuties"
            v-model="formData.jobDuties"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label for="educationBackground">教育背景:</label>
          <input
            id="educationBackground"
            v-model="formData.educationBackground"
            required
          />
        </div>

        <div class="form-group">
          <label for="qualifications">职业资格:</label>
          <input
            id="qualifications"
            v-model="formData.qualifications"
            required
          />
        </div>

        <div class="form-group">
          <label for="skills">技能要求:</label>
          <textarea
            id="skills"
            v-model="formData.skills"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label for="salary">年薪范围:</label>
          <input
            id="salary"
            v-model="formData.salary"
            required
          />
        </div>

        <div class="form-group">
          <label for="benefits">其他福利:</label>
          <textarea
            id="benefits"
            v-model="formData.benefits"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label for="tags">岗位标签:</label>
          <textarea
            id="tags"
            v-model="formData.tags"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label for="companyName">公司名称:</label>
          <input
            id="companyName"
            v-model="formData.companyName"
            required
          />
        </div>

        <div class="form-group">
          <label for="location">工作地点:</label>
          <input
            id="location"
            v-model="formData.location"
            required
          />
        </div>

        <div class="form-group">
          <label for="contact">联系方式:</label>
          <input
            id="contact"
            v-model="formData.contact"
            required
          />
        </div>

        <button
          type="submit"
          class="success"
        >
          提交
        </button>
        <button
          type="reset"
          class="btn btn-secondary"
        >
          重置
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'JobForm',
  setup() {
    const formData = ref({
      jobTitle: '',
      jobDuties: '',
      educationBackground: '',
      qualifications: '',
      skills: '',
      salary: '',
      benefits: '',
      tags: '',
      companyName: '',
      location: '',
      contact: '',
    })

    const handleSubmit = async () => {}
    const handleReset = (event: Event) => {
      // 额外的重置操作，例如：
      // - 显示提示消息
      // - 重置特定的状态
      console.log('表单已重置')
    }
    return {
      formData,
      handleSubmit,
      handleReset,
    }
  },
})
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #32325d;
  font-size: 30px;
  font-weight: bold;
}

.job-form {
  max-width: 600px;
  margin: auto;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1em;
}
.form-group input,
.form-group textarea {
  font-family: inherit; /* 确保字体家族一致 */
}
.form-group label {
  font-weight: bold;
  color: #32325d;
  display: block;
  margin-bottom: 0.5em;
}

.form-group input,
.form-group textarea {
  font-size: 0.9em;
  width: 100%;
  padding: 0.7em;
  border: 1px solid #ccc; /* 添加明确的边框 */
  border-radius: 5px;
  outline: none; /* 移除默认的focus outline */
  box-shadow: none; /* 移除默认的阴影 */
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #8892eb; /* 改变focus时的边框颜色 */
  box-shadow: 0 0 5px rgba(136, 146, 235, 0.5); /* 可选：增加自定义的阴影效果 */
}

button {
  font-size: 14px;
  display: inline-block;
  padding: 0.75em 1.5em;
  border: none;
  background-color: #6772e5;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #3a429f;
}

.success {
  margin-right: 80px;
  margin-top: 20px;
}
</style>
