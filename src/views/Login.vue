<template>
  <div class="bigBox">
    <div class="box">
      <div
        class="pre-box"
        ref="preRef"
        :style="preBoxStyle"
      >
        <h1>WELCOME</h1>
        <p>JOIN US!</p>
        <div class="img-box">
          <img
            :src="flag ? imgList[1] : imgList[0]"
            alt=""
          />
        </div>
      </div>
      <div class="register-form">
        <div class="title-box">
          <h1>注册</h1>
        </div>
        <el-form
          ref="RegisterFormRef"
          :model="RegisterForm"
          :rules="rules"
          label-width="5px"
        >
          <el-form-item
            prop="userName"
            label=""
          >
            <el-input
              type="text"
              placeholder="用户名"
              prefix-icon="User"
              v-model="RegisterForm.userName"
            />
          </el-form-item>
          <el-form-item
            prop="password"
            label=""
          >
            <el-input
              type="password"
              show-password
              placeholder="密码"
              prefix-icon="Lock"
              v-model="RegisterForm.password"
            />
          </el-form-item>
          <el-form-item
            prop="role"
            label=""
          >
            <el-select
              placeholder="请选择角色"
              style="width: 100%"
              v-model="RegisterForm.role"
              @change="updateRules"
            >
              <el-option
                label="个人"
                value="personal"
              ></el-option>
              <el-option
                label="企业"
                value="business"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 企业注册时显示的额外表单项 -->
          <template v-if="RegisterForm.role === 'business'">
            <el-form-item
              prop="companyDescription"
              label=""
            >
              <el-input
                type="text"
                placeholder="公司描述"
                v-model="RegisterForm.companyDescription"
              />
            </el-form-item>
          </template>
        </el-form>
        <div class="btn-box">
          <button @click="registerUser">注册</button>
          <p @click="mySwitch">已有账号?去登录</p>
        </div>
      </div>
      <div class="login-form">
        <div class="title-box">
          <h1>登录</h1>
        </div>
        <el-form
          ref="LoginFormRef"
          :model="LoginForm"
          :rules="rules"
          label-width="5px"
        >
          <el-form-item
            prop="userName"
            label=""
          >
            <el-input
              type="text"
              placeholder="用户名"
              prefix-icon="User"
              v-model="LoginForm.userName"
            />
          </el-form-item>
          <el-form-item
            prop="password"
            label=""
          >
            <el-input
              type="password"
              show-password
              placeholder="密码"
              prefix-icon="Lock"
              v-model="LoginForm.password"
            />
          </el-form-item>
          <el-form-item prop="captchaResult">
            <el-input
              v-model="LoginForm.captchaResult"
              type="text"
              style="width: 50%; margin-right: 10px"
              placeholder="验证码"
            />
            <div
              class="captcha"
              style="
                display: inline-block;
                width: 150px;
                height: 50px;
                vertical-align: middle;
              "
            >
              <img
                :src="captchaUrl"
                alt="验证码"
                @click="fetchCaptcha"
                style="cursor: pointer"
              />
            </div>
          </el-form-item>
          <el-form-item
            prop="role"
            label=""
          >
            <el-select
              placeholder="请选择角色"
              style="width: 100%"
              v-model="LoginForm.role"
            >
              <el-option
                label="个人"
                value="personal"
              ></el-option>
              <el-option
                label="企业"
                value="business"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="btn-box">
          <button @click="loginUser">登录</button>
          <p @click="mySwitch">没有账号?去注册</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { preRef, preBoxStyle, mySwitch, imgList, flag } from '../utils/mySwitch'
import { useUserStore, type UserRole } from '@/stores/user'
import { ElForm } from 'element-plus'
import type { FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { getCaptcha, login, register } from '@/api'
import { type ILoginParams, type IRegisterParams } from '@/api/type'
const userStore = useUserStore()

const RegisterFormRef = ref<InstanceType<typeof ElForm> | null>(null)
const LoginFormRef = ref<InstanceType<typeof ElForm> | null>(null)

const LoginForm = reactive<ILoginParams>({
  userName: '',
  password: '',
  captchaResult: '',
  role: 'personal',
})

const RegisterForm = reactive<IRegisterParams>({
  userName: '',
  password: '',
  role: 'personal',
  companyDescription: '',
})

// 表单验证规则
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, message: '长度应大于2', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '长度应为6位及以上', trigger: 'blur' },
  ],
  role: [{ required: true, message: '请选择角色', trigger: 'change' }],
})

const businessRules: FormRules = {
  companyDescription: [
    { required: true, message: '请输入公司描述', trigger: 'blur' },
  ],
}

// 更新验证规则
const updateRules = () => {
  if (RegisterForm.role === 'business') {
    Object.assign(rules, businessRules)
  } else {
    for (const key in businessRules) {
      delete rules[key]
    }
  }
}

// 动态更新表单验证规则
watch(
  () => RegisterForm.role,
  newRole => {
    updateRules()
  }
)

// 注册用户
const registerUser = async () => {
  if (RegisterFormRef.value) {
    await RegisterFormRef.value.validate(async (valid: boolean) => {
      if (valid) {
        try {
          const response = await register(RegisterForm)
          ElMessage({
            message: '注册成功！',
            type: 'success',
          })
          // 保存用户角色
          userStore.setUserRole(RegisterForm.role)
          // 根据角色处理不同的逻辑
          if (RegisterForm.role === 'business') {
            // 企业逻辑
          } else {
            // 个人逻辑
          }
          // 根据需要可以添加跳转或提示
        } catch (error) {
          console.error('注册失败:', error)
          ElMessage.error('注册失败！')
        }
      } else {
        ElMessage.error('表单验证失败！')
        console.log('表单验证失败')
      }
    })
  }
}

const captchaUrl = ref<string>('') // 用于存储验证码图片的 URL

// 获取验证码
const fetchCaptcha = async () => {
  try {
    const data = await getCaptcha()

    console.log('验证码请求成功:', data) // 调试信息

    // 确保 response.data 是 Blob 类型
    if (data instanceof Blob) {
      captchaUrl.value = URL.createObjectURL(data) // 将 blob 数据转换为 URL
    } else {
      throw new Error('响应数据不是 Blob 类型')
    }
  } catch (error) {
    console.error('验证码请求失败:', error)
    ElMessage.error('验证码请求失败！')
  }
}

// 在组件加载时获取验证码
onMounted(() => {
  fetchCaptcha()
})

// 登录用户
const loginUser = async () => {
  if (LoginFormRef.value) {
    await LoginFormRef.value.validate(async (valid: boolean) => {
      if (valid) {
        try {
          // 使用原生的 post 方法
          const data = await login(LoginForm)
          ElMessage({
            message: '登录成功！',
            type: 'success',
          })
          // 保存用户角色
          userStore.setUserRole(LoginForm.role)

          console.log('🚀 ~ data:', data)
          // 先log看下结构再拿token
          const token = data
          // 将 JWT 保存到 localStorage 中
          window.localStorage.setItem('token', String(token))

          // 根据角色处理不同的逻辑
          if (LoginForm.role === 'business') {
            // 企业逻辑
          } else {
            // 个人逻辑
          }
          // 跳转到首页
          router.push('/front')
          // 根据需要可以添加跳转或提示
        } catch (error) {
          console.error('登录失败:', error)
          ElMessage.error('登录失败！')
        }
      } else {
        console.log('表单验证失败')
      }
    })
  }
}
</script>

<style scoped>
/* 输入框 */
input {
  width: 60%;
  height: 40px;
  margin-bottom: 20px;
  text-indent: 10px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 120px;
  /* 增加磨砂质感 */
  backdrop-filter: blur(10px);
}

select:focus {
  color: #000000;
}

input:focus::placeholder {
  opacity: 0;
}

select {
  padding-left: 10px;
}
* {
  /* 去除浏览器默认内外边距 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 去除input的轮廓 */
input {
  outline: none;
  padding-left: 15px;
}

/* .bigBox {
    width: 100%;
    height: 100%;
    overflow: hidden;
} */

.bigBox {
  height: 100vh;
  width: 100vw;
  /* 溢出隐藏 */
  overflow: hidden;
  display: flex;
  /* 渐变方向从左到右 */
  background: linear-gradient(to right, rgb(247, 209, 215), rgb(191, 227, 241));
}

span {
  position: absolute;
  z-index: 0;
  bottom: 0;
  border-radius: 50%;
  /* 径向渐变 */
  background: radial-gradient(
    circle at 72% 28%,
    #fff 3px,
    #ff7edf 8%,
    #5b5b5b,
    #aad7f9 100%
  );
  /* 泡泡内阴影 */
  box-shadow: inset 0 0 6px #fff, inset 3px 0 6px #eaf5fc,
    inset 2px -2px 10px #efcde6, inset 0 0 60px #f9f6de, 0 0 20px #fff;
  /* 动画 */
  animation: myMove 4s linear infinite;
}

@keyframes myMove {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }

  50% {
    transform: translate(10%, -1000%);
  }

  75% {
    transform: translate(-20%, -1200%);
  }

  99% {
    opacity: 0.9;
  }

  100% {
    transform: translateY(-1800%) scale(1.5);
    opacity: 0;
  }
}

/* 最外层的大盒子 */
.box {
  width: 1050px;
  height: 600px;
  display: flex;
  /* 相对定位 */
  position: relative;
  z-index: 2;
  margin: auto;
  /* 设置圆角 */
  border-radius: 8px;
  /* 设置边框 */
  border: 1px solid rgba(255, 255, 255, 0.6);
  /* 设置盒子阴影 */
  box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
}

/* 滑动的盒子 */
.pre-box {
  /* 宽度为大盒子的一半 */
  width: 50%;
  /* width: var(--width); */
  height: 100%;
  /* 绝对定位 */
  position: absolute;
  /* 距离大盒子左侧为0 */
  left: 0;
  /* 距离大盒子顶部为0 */
  top: 0;
  z-index: 99;
  border-radius: 4px;
  background-color: #edd4dc;
  box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
  /* 动画过渡，先加速再减速 */
  transition: 0.5s ease-in-out;
}

/* 滑动盒子的标题 */
.pre-box h1 {
  margin-top: 150px;
  text-align: center;
  /* 文字间距 */
  letter-spacing: 5px;
  color: white;
  /* 禁止选中 */
  user-select: none;
  /* 文字阴影 */
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 滑动盒子的文字 */
.pre-box p {
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 20px 0;
  /* 禁止选中 */
  user-select: none;
  font-weight: bold;
  color: white;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 图片盒子 */
.img-box {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  /* 设置为圆形 */
  border-radius: 50%;
  /* 设置用户禁止选中 */
  user-select: none;
  overflow: hidden;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 图片 */
.img-box img {
  width: 100%;
  transition: 0.5s;
}

/* 登录和注册盒子 */
.login-form,
.register-form {
  flex: 1;
  height: 100%;
}

/* 标题盒子 */
.title-box {
  height: 220px;
  line-height: 500px;
  position: relative; /* 确保子元素使用相对父元素定位 */
}

/* 标题 */
.title-box h1 {
  position: absolute;
  top: 60%; /* 距离顶部三分之一处 */
  left: 50%; /* 距离左侧50% */
  transform: translate(-50%, -50%); /* 横向居中，并保持纵向位置 */
  text-align: center;
  color: white;
  /* 禁止选中 */
  user-select: none;
  letter-spacing: 5px;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 输入框盒子 */
.el-form {
  display: flex;
  /* 纵向布局 */
  flex-direction: column;
  /* 水平居中 */
  align-items: center;
}
.el-form-item {
  width: 65%;
  margin-bottom: 20px;
}

input:focus {
  /* 光标颜色 */
  color: #292929;
}

/* 聚焦时隐藏文字 */
input:focus::placeholder {
  opacity: 0;
}

/* 按钮盒子 */
.btn-box {
  display: flex;
  justify-content: center;
}

/* 按钮 */
button {
  width: 100px;
  height: 30px;
  margin: 0 7px;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #6772e5;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #7795f8;
}

/* 按钮下面的文字 */
.btn-box p {
  line-height: 30px;
  cursor: pointer;
  color: white;
}
/* 按钮盒子 */
.btn-box {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.btn-box p:hover {
  color: #3588df;
}
</style>
