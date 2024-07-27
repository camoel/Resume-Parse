<template>
  <div class="centered-container">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
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
        <el-form-item label="社交媒体链接">
          <el-button @click="addItem(dynamicValidateForm['个人信息'].社交媒体链接, { value: '', label: '', key: Date.now() })">
            新增链接
          </el-button>
          <div v-for="(link, index) in dynamicValidateForm['个人信息'].社交媒体链接" :key="link.key">
            <el-input v-model="link.label" placeholder="标签" />
            <el-input v-model="link.value" :placeholder="'链接 ' + (index + 1)" />
            <el-button @click="removeItem(link, dynamicValidateForm['个人信息'].社交媒体链接)">删除</el-button>
          </div>
        </el-form-item>
        <el-divider />
        <h2>求职意向</h2>
        <el-form-item label="意向城市">
          <el-button @click="addItem(dynamicValidateForm['求职意向'].意向城市, { key: Date.now(), value: '' })">
            新增城市
          </el-button>
          <div v-for="(city, index) in dynamicValidateForm['求职意向'].意向城市" :key="city.key">
            <el-input v-model="city.value" :placeholder="'城市 ' + (index + 1)" />
            <el-button @click="removeItem(city, dynamicValidateForm['求职意向'].意向城市)">删除</el-button>
          </div>
        </el-form-item>
        <el-form-item label="意向岗位">
          <el-button @click="addItem(dynamicValidateForm['求职意向'].意向岗位, { key: Date.now(), value: '' })">
            新增岗位
          </el-button>
          <div v-for="(job, index) in dynamicValidateForm['求职意向'].意向岗位" :key="job.key">
            <el-input v-model="job.value" :placeholder="'岗位 ' + (index + 1)" />
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
        <el-button
          @click="addItem(dynamicValidateForm['教育背景'], { 教育层次: '', 学校: '', 专业: '', 学位: '', 时间: '', 主修课程: [{ key: Date.now(), value: '' }], 成绩: '', key: Date.now() })">
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
          <el-form-item :label="'主修课程 ' + (index + 1)">
            <el-button @click="addItem(education.主修课程, { key: Date.now(), value: '' })">新增课程</el-button>
            <div v-for="(course, idx) in education.主修课程" :key="course.key">
              <el-input v-model="course.value" :placeholder="'课程 ' + (idx + 1)" />
              <el-button @click="removeItem(course, education.主修课程)">删除</el-button>
            </div>
          </el-form-item>
          <el-form-item :label="'成绩 ' + (index + 1)">
            <el-input v-model="education.成绩" />
          </el-form-item>
          <el-button @click="removeItem(education, dynamicValidateForm['教育背景'])">删除</el-button>
          <el-divider />
        </div>
        <el-divider />
        <h2>技能优势</h2>
        <el-form-item>
          <el-button @click="addItem(dynamicValidateForm['技能优势'], { key: Date.now(), value: '' })">
            新增技能
          </el-button>
          <div v-for="(skill, index) in dynamicValidateForm['技能优势']" :key="skill.key">
            <el-input v-model="skill.value" :placeholder="'技能 ' + (index + 1)" />
            <el-button @click="removeItem(skill, dynamicValidateForm['技能优势'])">删除</el-button>
          </div>
        </el-form-item>
        <el-divider />
        <h2>语言</h2>
        <el-form-item>
          <el-button @click="addItem(dynamicValidateForm['语言'], { 语言: '', 熟练程度: '', key: Date.now() })">
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
          <el-button @click="addItem(dynamicValidateForm['荣誉奖项'], { 时间: '', 奖项: '', key: Date.now() })">
            新增奖项
          </el-button>
          <div v-for="(award, index) in dynamicValidateForm['荣誉奖项']" :key="award.key">
            <el-form-item :label="'时间 ' + (index + 1)">
              <el-input v-model="award.时间" />
            </el-form-item>
            <el-form-item :label="'奖项 ' + (index + 1)">
              <el-input v-model="award.奖项" />
            </el-form-item>
            <el-button @click="removeItem(award, dynamicValidateForm['荣誉奖项'])">删除</el-button>
          </div>
        </el-form-item>
        <el-divider />
        <h2>学术成果</h2>
        <el-form-item>
          <el-button @click="addItem(dynamicValidateForm['学术成果'], { 时间: '', 名称: '', key: Date.now() })">
            新增成果
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
      </el-form>
  </div>
</template>




<script lang="ts">
import { defineComponent, reactive } from 'vue';


interface Link {
  value: string;
  label: string;
  key: number;
}

interface CityOrJob {
  value: string;
  key: number;
}

interface Course {
  value: string;
  key: number;
}

interface Education {
  教育层次: string;
  学校: string;
  专业: string;
  学位: string;
  时间: string;
  主修课程: Course[];
  成绩: string;
  key: number;
}

interface Skill {
  value: string;
  key: number;
}

interface Language {
  语言: string;
  熟练程度: string;
  key: number;
}

interface Award {
  时间: string;
  奖项: string;
  key: number;
}

interface Achievement {
  时间: string;
  名称: string;
  key: number;
}

interface FormModel {
  '个人信息': {
    姓名: string;
    电话: string;
    电子邮件: string;
    地址: string;
    生日: string;
    年龄: string;
    学历: string;
    社交媒体链接: Link[];
  };
  '求职意向': {
    意向城市: CityOrJob[];
    意向岗位: CityOrJob[];
    意向薪资: string;
    其他意向: string;
  };
  '教育背景': Education[];
  '技能优势': Skill[];
  '语言': Language[];
  '荣誉奖项': Award[];
  '学术成果': Achievement[];
}

export default defineComponent({
  name: 'EditForm',
  setup() {
    const dynamicValidateForm = reactive<FormModel>({
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
    });

    const addItem = (list: any[], item: any) => {
      list.push(item);
    };

    const removeItem = (item: any, list: any[]) => {
      const index = list.indexOf(item);
      if (index > -1) {
        list.splice(index, 1);
      }
    };

    return {
      dynamicValidateForm,
      addItem,
      removeItem,
    };
  },
});
</script>

<style scoped>
.centered-container {
width: 300px;
  justify-content: center;
  align-items: center;
  /*height: 100vh; !* 使容器高度充满整个视口高度 *!*/
}

</style>