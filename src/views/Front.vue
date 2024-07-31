<template>
  <div class="total">
   <!-- 头部 -->
<div class="header">
    <el-menu
      :default-active="null"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="width: 45px; height: 45px"
          src="../assets/logo.png"
          alt="Element logo"
        />
        <span class="header-title">智能简历</span>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item
        index="1"
        style="font-size: 18px;margin-right: 50px; text-align: center"
        >首页</el-menu-item
      >
      <el-sub-menu index="2" style="font-size: 18px">
        <template #title style="padding-right: 50px">
          <span class="product-title">产品</span>
        </template>
        <el-menu-item class="menu"  index="2-1" >简历解析</el-menu-item>
        <el-menu-item class="menu" index="2-2">简历润色</el-menu-item>
        <el-menu-item class="menu"  index="2-3">岗位推荐</el-menu-item>
        <el-menu-item class="menu" index="2-4">发布招聘信息</el-menu-item>
        <el-menu-item class="menu" index="2-5">候选人画像</el-menu-item>
        <el-menu-item class="menu" index="2-6">人才搜索</el-menu-item>
        <el-menu-item class="menu" index="2-7">简历大数据</el-menu-item>
      </el-sub-menu>

      <el-button index="3" class="btn" @click="$router.push('/login')">登录/注册</el-button>

      <div>
        <el-dropdown>
          <div class="front-header-dropdown">
            <img src="../assets/img/user.png" alt="" class="user-img" />
            <div style="margin-left: 10px">
              <span><!-- {{ user.name }} --></span
              ><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item>
              <div style="text-decoration: none">我的简历</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div style="text-decoration: none" @click="logout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
<!-- 主体 -->
  <div>
    <router-view></router-view>
  </div>
  
  </div>

</template>


  


<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

import { computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { rolesPermissions } from '../utils/rolesPermissions';
const userStore = useUserStore();
const userRole = computed(() => userStore.userRole);



const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  if (key === "3") {
    router.push("/login");
  }
  if (key === "2-1") {
    router.push("/analysis");
  }
  if (key === "1") {
    router.push("/");
  }
  if (key === "2-2") {
    router.push("/polish");
  }
  if (key === "2-4") {
    router.push("/recruitForm");
  }
     if (key === "2-5") {
    router.push("/Portrait");
  }
  if (key === "2-6") {
    router.push("/search");
  }
   if (key === "2-7") {
    router.push("/PersonForm");
  }
  
};
// 退出登录
function logout() {
  localStorage.removeItem("xm-user");
  router.push("/front");
}

const hasPermission = (permission: string) => {
  if (!userRole.value) return false;
  return rolesPermissions[userRole.value].includes(permission);
};
</script>

<style scoped>
.total{
height: 100vh; /* 视口高度 */
background-image: url('../assets/img/pink.png'); 
background-size: cover;
background-position: center;
 background-repeat: no-repeat;
}


.menu {
      transition: color .1s cubic-bezier(.645,.045,.355,1), border-color .1s cubic-bezier(.645,.045,.355,1), background .1s cubic-bezier(.645,.045,.355,1), padding .15s cubic-bezier(.645,.045,.355,1);
    border-top: 2px solid transparent;
    line-height: 60px;
    top: 1px;
    display: flex;
    justify-content: baseline;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    margin: -1px 0 0;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    font-size: 16px;
}

.user-img:focus,
.user-img:hover {
  border: none; /* 确保在悬停或获得焦点时没有边框 */
  outline: none; /* 确保在悬停或获得焦点时没有外边框 */
}

.user-img {
  width: 40px;
  height: 40px;
  margin-left: 60px;
  margin-top: 12px;
  border: none; /* 确保边框为无 */
  outline: none; /* 确保外边框为无 */
}

.el-menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-grow {
  flex-grow: 0.7;
  zoom: 1;
}

.el-menu-demo {
  height: 80px;
}

.el-sub-menu__title {
  font-size: 18px !important; /* 使用 !important 增加规则的优先级 */
}

.header-title {
  outline: none;
  font-size: 22px;
  line-height: 32px;
  color: #2847c3;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-align: center;
  margin-left: 20px;
}

.el-menu-item {
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}
.padding {
  padding-right: 30px;
}
.product-title {
  font-size: 18px; /* 修改这里来调整“产品”的大小 */
}

.btn {
  margin-left: 50px;
  font-size: 18px;
  border: 1px rgb(131, 185, 246) solid;
  border-radius: 8px;
  height: 45px;
}

</style>