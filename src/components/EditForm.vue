<template>
  <div class="demo-dynamic">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="200px">
      <h2>个人信息</h2>
      <el-form-item label="姓名">
        <el-input v-model="dynamicValidateForm['个人信息'].姓名" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="dynamicValidateForm['个人信息'].电话" />
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="dynamicValidateForm['个人信息'].电子邮件" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="dynamicValidateForm['个人信息'].地址" />
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="dynamicValidateForm['个人信息'].生日" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="dynamicValidateForm['个人信息'].年龄" />
      </el-form-item>
      <el-form-item label="学历">
        <el-input v-model="dynamicValidateForm['个人信息'].学历" />
      </el-form-item>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['个人信息'].社交媒体链接, { key: Date.now(), value: '', label: '社交媒体链接' })">
          新增社交媒体链接
        </el-button>
        <div v-for="(link, index) in dynamicValidateForm['个人信息'].社交媒体链接" :key="link.key">
          <el-form-item :label="'社交媒体链接 ' + (index + 1)">
            <el-input v-model="link.value" />
          </el-form-item>
          <el-button @click="removeItem(link, dynamicValidateForm['个人信息'].社交媒体链接)">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>求职意向</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['求职意向'].意向城市, { key: Date.now(), value: '' })">
          新增意向城市
        </el-button>
        <div v-for="(city, index) in dynamicValidateForm['求职意向'].意向城市" :key="city.key">
          <el-form-item :label="'意向城市 ' + (index + 1)">
            <el-input v-model="city.value" />
          </el-form-item>
          <el-button @click="removeItem(city, dynamicValidateForm['求职意向'].意向城市)">删除</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['求职意向'].意向岗位, { key: Date.now(), value: '' })">
          新增意向岗位
        </el-button>
        <div v-for="(job, index) in dynamicValidateForm['求职意向'].意向岗位" :key="job.key">
          <el-form-item :label="'意向岗位 ' + (index + 1)">
            <el-input v-model="job.value" />
          </el-form-item>
          <el-button @click="removeItem(job, dynamicValidateForm['求职意向'].意向岗位)">删除</el-button>
        </div>
      </el-form-item>
      <el-form-item label="意向薪资">
        <el-input v-model="dynamicValidateForm['求职意向'].意向薪资" />
      </el-form-item>
      <el-form-item label="其他意向">
        <el-input v-model="dynamicValidateForm['求职意向'].其他意向" />
      </el-form-item>
      <el-divider />
      <h2>教育背景</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['教育背景'], { key: Date.now(), 教育层次: '', 学校: '', 专业: '', 学位: '', 时间: '', 主修课程: [], 成绩: '' })">
          新增教育背景
        </el-button>
        <div v-for="(education, index) in dynamicValidateForm['教育背景']" :key="education.key">
          <el-form-item :label="'教育层次 ' + (index + 1)">
            <el-input v-model="education.教育层次" />
          </el-form-item>
          <el-form-item :label="'学校 ' + (index + 1)">
            <el-input v-model="education.学校" />
          </el-form-item>
          <el-form-item :label="'专业 ' + (index + 1)">
            <el-input v-model="education.专业" />
          </el-form-item>
          <el-form-item :label="'学位 ' + (index + 1)">
            <el-input v-model="education.学位" />
          </el-form-item>
          <el-form-item :label="'时间 ' + (index + 1)">
            <el-input v-model="education.时间" />
          </el-form-item>
          <el-form-item>
            <el-button @click="addItem(education.主修课程, { key: Date.now(), value: '' })">
              新增主修课程
            </el-button>
            <div v-for="(course, courseIndex) in education.主修课程" :key="course.key">
              <el-form-item :label="'主修课程 ' + (courseIndex + 1)">
                <el-input v-model="course.value" />
              </el-form-item>
              <el-button @click="removeItem(course, education.主修课程)">删除</el-button>
            </div>
          </el-form-item>
          <el-form-item :label="'成绩 ' + (index + 1)">
            <el-input v-model="education.成绩" />
          </el-form-item>
          <el-button @click="removeItem(education, dynamicValidateForm['教育背景'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>技能优势</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['技能优势'], { key: Date.now(), value: '' })">
          新增技能优势
        </el-button>
        <div v-for="(skill, index) in dynamicValidateForm['技能优势']" :key="skill.key">
          <el-form-item :label="'技能优势 ' + (index + 1)">
            <el-input v-model="skill.value" />
          </el-form-item>
          <el-button @click="removeItem(skill, dynamicValidateForm['技能优势'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>语言</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['语言'], { key: Date.now(), 语言: '', 熟练程度: '' })">
          新增语言
        </el-button>
        <div v-for="(language, index) in dynamicValidateForm['语言']" :key="language.key">
          <el-form-item :label="'语言 ' + (index + 1)">
            <el-input v-model="language.语言" />
          </el-form-item>
          <el-form-item :label="'熟练程度 ' + (index + 1)">
            <el-input v-model="language.熟练程度" />
          </el-form-item>
          <el-button @click="removeItem(language, dynamicValidateForm['语言'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>荣誉奖项</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['荣誉奖项'], { key: Date.now(), 时间: '', 奖项: '' })">
          新增荣誉奖项
        </el-button>
        <div v-for="(honor, index) in dynamicValidateForm['荣誉奖项']" :key="honor.key">
          <el-form-item :label="'时间 ' + (index + 1)">
            <el-input v-model="honor.时间" />
          </el-form-item>
          <el-form-item :label="'奖项 ' + (index + 1)">
            <el-input v-model="honor.奖项" />
          </el-form-item>
          <el-button @click="removeItem(honor, dynamicValidateForm['荣誉奖项'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>学术成果</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['学术成果'], { key: Date.now(), 时间: '', 名称: '' })">
          新增学术成果
        </el-button>
        <div v-for="(achievement, index) in dynamicValidateForm['学术成果']" :key="achievement.key">
          <el-form-item :label="'时间 ' + (index + 1)">
            <el-input v-model="achievement.时间" />
          </el-form-item>
          <el-form-item :label="'名称 ' + (index + 1)">
            <el-input v-model="achievement.名称" />
          </el-form-item>
          <el-button @click="removeItem(achievement, dynamicValidateForm['学术成果'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>证书</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['证书'], { key: Date.now(), 时间: '', 名称: '' })">
          新增证书
        </el-button>
        <div v-for="(certificate, index) in dynamicValidateForm['证书']" :key="certificate.key">
          <el-form-item :label="'时间 ' + (index + 1)">
            <el-input v-model="certificate.时间" />
          </el-form-item>
          <el-form-item :label="'名称 ' + (index + 1)">
            <el-input v-model="certificate.名称" />
          </el-form-item>
          <el-button @click="removeItem(certificate, dynamicValidateForm['证书'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>项目经历</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['项目经历'], { key: Date.now(), 项目名称: '', 时间: '', 参与角色: '', 项目地址: '', 技术栈: '', 项目内容: '' })">
          新增项目经历
        </el-button>
        <div v-for="(project, index) in dynamicValidateForm['项目经历']" :key="project.key">
          <el-form-item :label="'项目名称 ' + (index + 1)">
            <el-input v-model="project.项目名称" />
          </el-form-item>
          <el-form-item :label="'时间 ' + (index + 1)">
            <el-input v-model="project.时间" />
          </el-form-item>
          <el-form-item :label="'参与角色 ' + (index + 1)">
            <el-input v-model="project.参与角色" />
          </el-form-item>
          <el-form-item :label="'项目地址 ' + (index + 1)">
            <el-input v-model="project.项目地址" />
          </el-form-item>
          <el-form-item :label="'技术栈 ' + (index + 1)">
            <el-input v-model="project.技术栈" />
          </el-form-item>
          <el-form-item :label="'项目内容 ' + (index + 1)">
            <el-input v-model="project.项目内容" />
          </el-form-item>
          <el-button @click="removeItem(project, dynamicValidateForm['项目经历'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>工作经历</h2>
      <el-form-item>
        <el-button @click="addItem(dynamicValidateForm['工作经历'], { key: Date.now(), 单位: '', 时间: '', 岗位: '', 地址: '', 主要工作内容: '' })">
          新增工作经历
        </el-button>
        <div v-for="(work, index) in dynamicValidateForm['工作经历']" :key="work.key">
          <el-form-item :label="'单位 ' + (index + 1)">
            <el-input v-model="work.单位" />
          </el-form-item>
          <el-form-item :label="'时间 ' + (index + 1)">
            <el-input v-model="work.时间" />
          </el-form-item>
          <el-form-item :label="'岗位 ' + (index + 1)">
            <el-input v-model="work.岗位" />
          </el-form-item>
          <el-form-item :label="'地址 ' + (index + 1)">
            <el-input v-model="work.地址" />
          </el-form-item>
          <el-form-item :label="'主要工作内容 ' + (index + 1)">
            <el-input v-model="work.主要工作内容" />
          </el-form-item>
          <el-button @click="removeItem(work, dynamicValidateForm['工作经历'])">删除</el-button>
        </div>
      </el-form-item>
      <el-divider />
      <h2>自我评价</h2>
      <el-form-item label="自我评价">
        <el-input v-model="dynamicValidateForm['自我评价'].评价" />
      </el-form-item>
      <el-divider />
      <h2>其他内容</h2>
      <el-form-item label="其他内容">
        <el-input v-model="dynamicValidateForm['其他内容'].内容" />
      </el-form-item>
      <el-divider />
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElDivider } from 'element-plus';

export default defineComponent({
  name: 'DynamicForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDivider,
  },
  setup() {
    const dynamicValidateForm = reactive({
      '个人信息': {
        姓名: '',
        电话: '',
        电子邮件: '',
        地址: '',
        生日: '',
        年龄: '',
        学历: '',
        社交媒体链接: [] as { key: number, value: string }[],
      },
      '求职意向': {
        意向城市: [] as { key: number, value: string }[],
        意向岗位: [] as { key: number, value: string }[],
        意向薪资: '',
        其他意向: '',
      },
      '教育背景': [] as { key: number, 教育层次: string, 学校: string, 专业: string, 学位: string, 时间: string, 主修课程: { key: number, value: string }[], 成绩: string }[],
      '技能优势': [] as { key: number, value: string }[],
      '语言': [] as { key: number, 语言: string, 熟练程度: string }[],
      '荣誉奖项': [] as { key: number, 时间: string, 奖项: string }[],
      '学术成果': [] as { key: number, 时间: string, 名称: string }[],
      '证书': [] as { key: number, 时间: string, 名称: string }[],
      '项目经历': [] as { key: number, 项目名称: string, 时间: string, 参与角色: string, 项目地址: string, 技术栈: string, 项目内容: string }[],
      '工作经历': [] as { key: number, 单位: string, 时间: string, 岗位: string, 地址: string, 主要工作内容: string }[],
      '自我评价': {
        评价: '',
      },
      '其他内容': {
        内容: '',
      },
    });

    const addItem = (list: any[], item: any) => {
      list.push(item);
    };

    const removeItem = (item: any, list: any[]) => {
      const index = list.indexOf(item);
      if (index !== -1) {
        list.splice(index, 1);
      }
    };

    const submitForm = (formName: string) => {
      console.log(dynamicValidateForm);
      alert('提交成功');
    };

    const resetForm = (formName: string) => {
      Object.assign(dynamicValidateForm, {
        '个人信息': {
          姓名: '',
          电话: '',
          电子邮件: '',
          地址: '',
          生日: '',
          年龄: '',
          学历: '',
          社交媒体链接: [],
        },
        '求职意向': {
          意向城市: [],
          意向岗位: [],
          意向薪资: '',
          其他意向: '',
        },
        '教育背景': [],
        '技能优势': [],
        '语言': [],
        '荣誉奖项': [],
        '学术成果': [],
        '证书': [],
        '项目经历': [],
        '工作经历': [],
        '自我评价': {
          评价: '',
        },
        '其他内容': {
          内容: '',
        },
      });
    };

    return {
      dynamicValidateForm,
      addItem,
      removeItem,
      submitForm,
      resetForm,
    };
  },
});
</script>

<style scoped>
.demo-dynamic {
  padding: 20px;
 
}
el-form{
  height: 100vh;
  width: 40vm;
  margin-top: 160px 
}
</style>
