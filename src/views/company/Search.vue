<template>
  <div class="container">
    <div class="search">
      <div class="title">
        <img src="../../assets/logo.png" alt="logo" />
        <h1>智能人才搜索</h1>
      </div>
      <input type="text" />
       <div class="suggestion">
      <div class="rolling-div">
        <div class="rolling-text">热门搜索：</div>
        <div class="rolling-suggestion">
            <span v-for="(item, index) in items" :key="index" v-show="currentIndex === index">
              {{ item }}
            </span>
        </div>
      </div>
    </div>
    </div>
   
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
const input = ref("");
const items=[
      '人力资源经理',
      '酒店大堂经理',
      '金融科技分析师',
      '统计学',
      '法律顾问',
      '行政专员',
      '国信证券'
    
];
const currentIndex = ref(0);
    let interval: number;

    const startRolling = () => {
      interval = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % items.length;
      }, 2000);
    };

    onMounted(() => {
      startRolling();
    });

    onUnmounted(() => {
      clearInterval(interval);
    });


</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(#32325d, #000 80%);
  position: relative;
}

.search {
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 400px;
  vertical-align: center;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
h1 {
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-size: 40px;
}
img {
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  margin: 0 20px 0 0;
  height: 38px;
}
input {
  background: #fff;
  display: flex;
  border: 1px solid #dfe1e5;
  outline-style: none;
  box-shadow: none;
  border-radius: 30px;
  z-index: 3;
  height: 54px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 8px;
  color: rgba(0, 0, 0, 0.87);
  width: 480px;
  font-size: 20px;
  font-family: "Microsoft soft";
  -webkit-appearance: none; /* 去除默认样式 */
  appearance: none; /* 去除默认样式 */
  transition: width 0.3s ease; /* 控制过渡效果的持续时间和动画效果 */
  overflow: visible;
}
input:hover {
  width: 600px; /* 鼠标悬停时的宽度 */
}
.suggestion{
  font-weight: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    color: #fff;
}
.rolling-div{
  display:flex;
  align-items: center;
}
.rolling-div .rolling-text {
  
    font-size: 20px;
    text-align: right;
    font-weight:400
}
.rolling-div .rolling-suggestion {
    display: block;
    height: 25px;
    width: 200px;
    position: relative;
    margin: 0 auto;
    overflow: visible;
    
    font-size: 20px;
}
.rolling-suggestion span {
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    letter-spacing: 1px;
    font-size: 20px;
    top: 0;
    left: 50%;
    width: 100%;
    display: block;
    text-align: center;
    transform: translateY(0);
    animation: rollin-txt 20s infinite;
  }

</style>
