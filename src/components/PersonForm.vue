<template>
  <div class="form">
   <form @submit.prevent="submitForm" @reset="handleReset" class="form-container">
    <h2>基本信息</h2>
    
    <div class="form-group">
      <div class="form-row">
        <label for="name">姓名:</label>
        <input v-model="formData.个人信息.姓名" id="name" type="text" class="form-control" />
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="gender">性别:</label>
        <select v-model="formData.个人信息.性别" id="gender" class="form-control">
          <option value="">请选择性别</option>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="phone">电话:</label>
        <input v-model="formData.个人信息.电话" id="phone" type="text" class="form-control" />
      </div>
      <span v-if="errors.telephone" class="error-message">{{ errors.telephone }}</span>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="email">电子邮件:</label>
        <input v-model="formData.个人信息.电子邮件" id="email" type="email" class="form-control" />
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="address">地址:</label>
        <input v-model="formData.个人信息.地址" id="address" type="text" class="form-control" />
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="birthday">生日:</label>
        <input v-model="formData.个人信息.生日" id="birthday" type="date" class="form-control" />
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="age">年龄:</label>
        <input v-model="formData.个人信息.年龄" id="age" type="number" class="form-control" />
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="education">学历:</label>
        <input v-model="formData.个人信息.学历" id="education" type="text" class="form-control" />
      </div>
    </div>
    
    <div v-for="(link, index) in formData.个人信息.社交媒体链接" :key="index" class="form-group">
      <div class="form-row">
        <label for="social-link">社交媒体:</label>
        <input v-model="link.url" id="social-link" type="text" class="form-control" />
        <button type="button" @click="addSocialLink" class="btn btn-primary">添加社交媒体链接</button>
        <button type="button" @click="removeSocialLink(index)" class="btn btn-danger">删除</button>
      </div>
    </div>
    
    <h2>求职意向</h2>
    
    <div v-for="(city, index) in formData.求职意向.意向城市" :key="index" class="form-group">
      <div class="form-row">
        <label for="intention-city">意向城市:</label>
        <input v-model="formData.求职意向.意向城市[index]" id="intention-city" type="text" class="form-control" />
        <button type="button" @click="addIntentionCity" class="btn btn-primary">添加意向城市</button>
        <button type="button" @click="removeIntentionCity(index)" class="btn btn-danger">删除</button>
      </div>
    </div>
    
    <div v-for="(position, index) in formData.求职意向.意向岗位" :key="index" class="form-group">
      <div class="form-row">
        <label for="intention-position">意向岗位:</label>
        <input v-model="formData.求职意向.意向岗位[index]" id="intention-position" type="text" class="form-control" />
        <button type="button" @click="addIntentionPosition" class="btn btn-primary">添加意向岗位</button>
        <button type="button" @click="removeIntentionPosition(index)" class="btn btn-danger">删除</button>
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="intention-salary">意向薪资:</label>
        <input v-model="formData.求职意向.意向薪资" id="intention-salary" type="text" class="form-control" />
      </div>
    </div>
    
    <div class="form-group">
      <div class="form-row">
        <label for="other-intentions">其他意向:</label>
        <input v-model="formData.求职意向.其他意向" id="other-intentions" type="text" class="form-control" />
      </div>
    </div>
    
    <h2>教育背景</h2>
    
    <div v-for="(education, index) in formData.教育背景" :key="index" class="form-group">
      <div class="form-row">
        <label for="education-level">教育层次:</label>
        <input v-model="formData.教育背景[index].教育层次" id="education-level" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="school">学校:</label>
        <input v-model="formData.教育背景[index].学校" id="school" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="major">专业:</label>
        <input v-model="formData.教育背景[index].专业" id="major" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="degree">学位:</label>
        <input v-model="formData.教育背景[index].学位" id="degree" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="education-time">时间:</label>
        <input v-model="formData.教育背景[index].时间" id="education-time" type="date" class="form-control" />
      </div>
      <button type="button" @click="addEducation" class="btn btn-primary">添加教育背景</button>
      <button type="button" @click="removeEducation(index)" class="btn btn-danger">删除</button>
    </div>
    
    <h2>技能优势</h2>
    
    <div v-for="(skill, index) in formData.技能优势" :key="index" class="form-group">
      <div class="form-row">
        <label for="skill">技能:</label>
        <input v-model="formData.技能优势[index]" id="skill" type="text" class="form-control" />
        <button type="button" @click="addSkill" class="btn btn-primary">添加技能</button>
        <button type="button" @click="removeSkill(index)" class="btn btn-danger">删除</button>
      </div>
    </div>
    
    <h2>语言</h2>
    
    <div v-for="(language, index) in formData.语言" :key="index" class="form-group">
      <div class="form-row">
        <label for="language">语言:</label>
        <input v-model="formData.语言[index].语言" id="language" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="proficiency">熟练程度:</label>
        <input v-model="formData.语言[index].熟练程度" id="proficiency" type="text" class="form-control" />
      </div>
      <button type="button" @click="addLanguage" class="btn btn-primary">添加语言</button>
      <button type="button" @click="removeLanguage(index)" class="btn btn-danger">删除</button>
    </div>
    
    <h2>荣誉奖项</h2>
    
    <div v-for="(honor, index) in formData.荣誉奖项" :key="index" class="form-group">
      <div class="form-row">
        <label for="honor-time">时间:</label>
        <input v-model="formData.荣誉奖项[index].时间" id="honor-time" type="date" class="form-control" />
      </div>
      <div class="form-row">
        <label for="honor-award">奖项:</label>
        <input v-model="formData.荣誉奖项[index].奖项" id="honor-award" type="text" class="form-control" />
      </div>
      <button type="button" @click="addHonor" class="btn btn-primary">添加奖项</button>
      <button type="button" @click="removeHonor(index)" class="btn btn-danger">删除</button>
    </div>
    
    <h2>学术成果</h2>
    
    <div v-for="(achievement, index) in formData.学术成果" :key="index" class="form-group">
      <div class="form-row">
        <label for="achievement-time">时间:</label>
        <input v-model="formData.学术成果[index].时间" id="achievement-time" type="date" class="form-control" />
      </div>
      <div class="form-row">
        <label for="achievement-name">名称:</label>
        <input v-model="formData.学术成果[index].名称" id="achievement-name" type="text" class="form-control" />
      </div>
      <button type="button" @click="addAchievement" class="btn btn-primary">添加学术成果</button>
      <button type="button" @click="removeAchievement(index)" class="btn btn-danger">删除</button>
    </div>
    
    <h2>证书</h2>
    
    <div v-for="(certificate, index) in formData.证书" :key="index" class="form-group">
      <div class="form-row">
        <label for="certificate-name">证书名称:</label>
        <input v-model="formData.证书[index]" id="certificate-name" type="text" class="form-control" />
        <button type="button" @click="addCertificate" class="btn btn-primary">添加证书</button>
        <button type="button" @click="removeCertificate(index)" class="btn btn-danger">删除</button>
      </div>
    </div>
    
    <h2>项目经历</h2>
    
    <div v-for="(project, index) in formData.项目经历" :key="index" class="form-group">
      <div class="form-row">
        <label for="project-name">项目名称:</label>
        <input v-model="formData.项目经历[index].项目名称" id="project-name" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="project-time">时间:</label>
        <input v-model="formData.项目经历[index].时间" id="project-time" type="date" class="form-control" />
      </div>
      <div class="form-row">
        <label for="project-role">参与角色:</label>
        <input v-model="formData.项目经历[index].参与角色" id="project-role" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="project-address">项目地址:</label>
        <input v-model="formData.项目经历[index].项目地址" id="project-address" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="tech-stack">技术栈:</label>
        <input v-model="formData.项目经历[index].技术栈" id="tech-stack" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="project-content">项目内容:</label>
        <input v-model="formData.项目经历[index].项目内容" id="project-content" type="text" class="form-control" />
      </div>
      <button type="button" @click="addProject" class="btn btn-primary">添加项目经历</button>
      <button type="button" @click="removeProject(index)" class="btn btn-danger">删除</button>
    </div>
    
    <h2>工作经历</h2>
    
    <div v-for="(job, index) in formData.工作经历" :key="index" class="form-group">
      <div class="form-row">
        <label for="company">单位:</label>
        <input v-model="formData.工作经历[index].单位" id="company" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="work-time">时间:</label>
        <input v-model="formData.工作经历[index].时间" id="work-time" type="date" class="form-control" />
      </div>
      <div class="form-row">
        <label for="job-position">岗位:</label>
        <input v-model="formData.工作经历[index].岗位" id="job-position" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="work-address">地址:</label>
        <input v-model="formData.工作经历[index].地址" id="work-address" type="text" class="form-control" />
      </div>
      <div class="form-row">
        <label for="work-content">工作内容:</label>
        <input v-model="formData.工作经历[index].主要工作内容" id="work-content" type="text" class="form-control" />
      </div>
      <button type="button" @click="addJob" class="btn btn-primary">添加工作经历</button>
      <button type="button" @click="removeJob(index)" class="btn btn-danger">删除工作经历</button>
    </div>
    
    <h2>自我评价</h2>
    
    <div v-for="(evaluation, index) in formData.自我评价" :key="index" class="form-group">
      <div class="form-row">
        <label for="self-evaluation">自我评价:</label>
        <input v-model="formData.自我评价[index]" id="self-evaluation" type="text" class="form-control" />
      </div>
      <button type="button" @click="addEvaluation" class="btn btn-primary">添加自我评价</button>
      <button type="button" @click="removeEvaluation(index)" class="btn btn-danger">删除</button>
    </div>
    
    <h2>其他内容</h2>
    
    <div class="form-group">
      <div class="form-row">
        <label for="other-content">其他内容:</label>
        <input v-model="formData.其他内容" id="other-content" type="text" class="form-control" />
      </div>
    </div>
    
    <button type="submit" class="btn btn-success" >保存</button>
    <button type="reset" class="btn btn-secondary">重置</button>
  </form>
  </div>
 
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import axios from '../api/request';

export default defineComponent({
  name: 'ResumeForm',
  setup() {
    const formData = reactive({
      个人信息: {
        姓名: '',
        性别: '',
        电话: '',
        电子邮件: '',
        地址: '',
        生日: '',
        年龄: '',
        学历: '',
        社交媒体链接: [{ url: '' }]
      },
      求职意向: {
        意向城市: [] as string[],
        意向岗位: [] as string[],
        意向薪资: '',
        其他意向: ''
      },
      教育背景: [
        {
          教育层次: '',
          学校: '',
          专业: '',
          学位: '',
          时间: ''
        }
      ],
      技能优势: [''],
      语言: [
        {
          语言: '',
          熟练程度: ''
        }
      ],
      荣誉奖项: [
        {
          时间: '',
          奖项: ''
        }
      ],
      学术成果: [
        {
          时间: '',
          名称: ''
        }
      ],
     证书: [''], // 初始化为一个空字符串数组
      项目经历: [
        {
          项目名称: '',
          时间: '',
          参与角色: '',
          项目地址: '',
          技术栈: '',
          项目内容: ''
        }
      ],
      工作经历: [
        {
          单位: '',
          时间: '',
          岗位: '',
          地址: '',
          主要工作内容: ''
        }
      ],
      自我评价: [''],
      其他内容: ''
    });

    const addSocialLink = () => {
      formData.个人信息.社交媒体链接.push({ url: '' });
    };

    const removeSocialLink = (index: number) => {
      formData.个人信息.社交媒体链接.splice(index, 1);
    };

    const addIntentionCity = () => {
      formData.求职意向.意向城市.push('');
    };

    const removeIntentionCity = (index: number) => {
      formData.求职意向.意向城市.splice(index, 1);
    };

    const addIntentionPosition = () => {
      formData.求职意向.意向岗位.push('');
    };

    const removeIntentionPosition = (index: number) => {
      formData.求职意向.意向岗位.splice(index, 1);
    };

    const addEducation = () => {
      formData.教育背景.push({
        教育层次: '',
        学校: '',
        专业: '',
        学位: '',
        时间: ''
      });
    };

    const removeEducation = (index: number) => {
      formData.教育背景.splice(index, 1);
    };

    const addSkill = () => {
      formData.技能优势.push('');
    };

    const removeSkill = (index: number) => {
      formData.技能优势.splice(index, 1);
    };

    const addLanguage = () => {
      formData.语言.push({
        语言: '',
        熟练程度: ''
      });
    };

    const removeLanguage = (index: number) => {
      formData.语言.splice(index, 1);
    };

    const addHonor = () => {
      formData.荣誉奖项.push({
        时间: '',
        奖项: ''
      });
    };

    const removeHonor = (index: number) => {
      formData.荣誉奖项.splice(index, 1);
    };

    const addAchievement = () => {
      formData.学术成果.push({
        时间: '',
        名称: ''
      });
    };

    const removeAchievement = (index: number) => {
      formData.学术成果.splice(index, 1);
    };


    const addCertificate = () => {
      formData.证书.push(''); // 添加一个空字符串作为新证书项
    };

    const removeCertificate = (index: number) => {
      formData.证书.splice(index, 1); // 删除指定索引的证书项
    };

    const addProject = () => {
      formData.项目经历.push({
        项目名称: '',
        时间: '',
        参与角色: '',
        项目地址: '',
        技术栈: '',
        项目内容: ''
      });
    };

    const removeProject = (index: number) => {
      formData.项目经历.splice(index, 1);
    };

    const addJob = () => {
      formData.工作经历.push({
        单位: '',
        时间: '',
        岗位: '',
        地址: '',
        主要工作内容: '',
      });
    };

    const removeJob = (index: number) => {
      formData.工作经历.splice(index, 1);
    };

    const addEvaluation = () => {
      formData.自我评价.push('');
    };

    const removeEvaluation = (index: number) => {
      formData.自我评价.splice(index, 1);
    };


 const errors = reactive({
  telephone: ''
});

const validateForm = () => {
  errors.telephone = ''; // 清除之前的错误信息
  const phone = formData.个人信息.电话;
  if (phone.length !== 11 || !/^\d{11}$/.test(phone)) {
    errors.telephone = '电话必须是 11 位数字';
    return false;
  }
  return true;
};

  const submitForm = async () => {
  if (!validateForm()) {
    return; // 验证失败则阻止表单提交
  }

  try {
    console.log('Submitting form:', formData); // 调试：检查要提交的数据
    const response = await axios.post('/resumes/formResume', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // 处理响应数据
    console.log('Response:', response.data); // 调试：检查响应数据
    ElMessage({
      message: '提交成功',
      type: 'success',
    });
  } catch (error) {
    console.error('Submission error:', error); // 调试：检查错误信息
    ElMessage.error('提交失败');
  }
};

      const handleReset = (event: Event) => {
      // 额外的重置操作，例如：
      // - 显示提示消息
      // - 重置特定的状态
      ElMessage({
    message: '重置成功',
    type: 'success',
  });
    };


    return {
      formData,
      addSocialLink,
      removeSocialLink,
      addIntentionCity,
      removeIntentionCity,
      addIntentionPosition,
      removeIntentionPosition,
      addEducation,
      removeEducation,
      addSkill,
      removeSkill,
      addLanguage,
      removeLanguage,
      addHonor,
      removeHonor,
      addAchievement,
      removeAchievement,
      addProject,
      removeProject,
      addJob,
      removeJob,
      addEvaluation,
      removeEvaluation,
      submitForm,
      addCertificate,
      removeCertificate,
      handleReset,
      errors,
      
    };
  }
});
</script>

<style scoped>
.form{
   background-image: url('../assets/img/background.png'),url('../assets/img/blue.png');
  background-position: top center, bottom center; /* 设置背景图片的位置 */
  background-size: contain, contain; /* 设置背景图片的大小 */
  background-repeat: no-repeat, no-repeat; /* 设置背景图片是否重复 */
}
.form-control {
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 8px;
}

.form-control:focus {
  border-color: #80bdff;
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
}

.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-row label {
  width: 80px;
  padding-left:10px;
  margin-right: 10px;
  font-weight: bold;
}

.form-row input,
.form-row select {
  flex: 1;

}

.form-container {
  max-width: 720px;
  margin: 0 auto;
  margin-top:80px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 
  
}

h2 {
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #32325d;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group select {
  font-size:14px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* Ensure padding and border are included in the total width */
  transition: border-color 0.3s ease;
}

/* input[type="date"]::-webkit-datetime-edit {
  color: transparent; //对 WebKit 浏览器隐藏占位符 
} */

.form-group input:focus,
.form-group select:focus {
  border-color: #8892eb; /* Change border color on focus */
  outline: none; /* Remove default outline */
}


.btn {
  font-size:14px;
  display: inline-block;
  padding: 10px 20px;
  margin: 15px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.btn-primary {
  margin-right: 50px;
  background-color: #6772E5;
  border:none;
}

.btn-danger {
  background-color: #8D8D8D;
    border:none;

}

.btn-success {
  background-color: #6772E5;
  margin-right: 50px;
  border:none;

}
.btn-secondary{
  background-color: #6772E5;
  border:none;

}
.btn-primary:hover, .btn-danger:hover, .btn-success:hover, .btn-secondary:hover {
  background-color: darken(10%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
button:hover {
  background:  #7795f8;
}

</style>
