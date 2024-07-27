<template>
  <div class="container">
    <div class="top"></div>
    <div class="center">
      <h1>智能简历润色</h1>
      <div
        class="upload"
        @click="handleClick"
        @dragover="handleDragOver"
        @drop="handleDrop"
      >
        <input
          type="file"
          @change="handleFileChange"
          style="display: none"
          id="fileInput"
        />
        <div>
          <svg
            v-if="!selectedFile"
            t="1721721898460"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3222"
            width="200"
            height="200"
          >
            <path
              d="M954.5 632.7c-10.5-82-84.4-141.4-167.1-141.4h-42.8V451c0-124.1-93.4-232.6-217.2-240.9-135.8-9.1-249.2 98.8-249.2 232.7v48.5h-42.8c-82.7 0-156.5 59.3-167.1 141.4-12.8 99.3 64.5 184.2 161.3 184.2h563.5c96.8 0 174.1-84.9 161.4-184.2z m-324-68.7l-5.7 5.7c-11.3 11.3-29.6 11.3-40.8 0l-39.2-39.2v165.3c0 18.3-14.8 33.2-33.2 33.2h-0.5c-18.3 0-33.2-14.8-33.2-33.2V530.5l-39.2 39.2c-11.3 11.3-29.6 11.3-40.8 0l-5.7-5.7c-11.3-11.3-11.3-29.6 0-40.8l97.5-97.5c5.9-5.9 13.8-8.8 21.6-8.4 7.8-0.3 15.7 2.5 21.6 8.4l97.5 97.5c11.4 11.2 11.4 29.5 0.1 40.8z"
              fill="#7B85E8"
              p-id="3223"
              data-spm-anchor-id="a313x.search_index.0.i1.ed4b3a810xiHns"
              class="selected"
            ></path>
          </svg>

            <!-- 新的 SVG 路径 -->

            <svg
            v-if="selectedFile"
              t="1721730490575"
              class="new-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="20994"
              width="200"
              height="200"
            >
              <path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="20995"></path>
              <path
                d="M859.008 980.608H164.992a34.56 34.56 0 0 1-34.56-34.56V77.952a34.56 34.56 0 0 1 34.56-34.56H614.4a34.304 34.304 0 0 1 23.808 9.472L883.2 285.696a34.432 34.432 0 0 1 10.752 25.6v634.752a34.56 34.56 0 0 1-34.944 34.56zM199.552 911.36h624.896V325.632L600.32 112.64H199.552z"
                fill="#7B85E8"
                p-id="20996"
                data-spm-anchor-id="a313x.search_index.0.i31.22ad3a81FVkBFu"
                class=""
              ></path>
              <path
                d="M277.376 380.288h469.12v69.248H277.376zM277.376 512h469.12v69.248H277.376zM277.376 648.32h469.12v69.248H277.376zM594.688 778.624h151.936v69.248H594.688zM272.384 220.032h234.624v69.248H272.384z"
                fill="#a9aff2"
                p-id="20997"
                data-spm-anchor-id="a313x.search_index.0.i33.22ad3a81FVkBFu"
                class=""
              ></path>
              <path
                d="M851.968 345.6H614.4a34.304 34.304 0 0 1-24.576-10.24 34.688 34.688 0 0 1-10.112-24.576l1.408-233.088a34.56 34.56 0 0 1 58.88-24.32l236.288 232.704a34.688 34.688 0 0 1-24.32 59.52zM648.96 276.096H768l-117.76-115.968z"
                fill="#7B85E8"
                p-id="20998"
                data-spm-anchor-id="a313x.search_index.0.i32.22ad3a81FVkBFu"
                class=""
              ></path>
            </svg>

        </div>
        <p v-if="!selectedFile" class="p1">点击&nbsp;或&nbsp;拖拽</p>
        <p v-if="!selectedFile" class="p2">即可上传简历文件</p>
        <p v-if="selectedFile" class="file-name">{{ selectedFile.name }}</p>
      </div>
    </div>

    <div class="bottom">
      <button class="common-button common-button-disabled">开始润色</button>

      <p></p>

      <button class="common-button common-button-disabled" @mouseenter="hoverHandler" @click="showFormHandler">填写简历</button>
    </div>
  </div>
  <div class="dark-overlay" v-if="showForm" @click="showForm = false"></div>
  <div class="form-popup" v-if="showForm">
    <!-- 这里添加您的表单内容 -->
    <h2>填写简历表单</h2>
    <input type="text" placeholder="姓名" />
    <input type="email" placeholder="邮箱" />
    <!-- 其他表单字段 -->
    <button class="keep">保存</button>
    <button @click="showForm = false"class="close"  >关闭</button>
    
  </div>
</template>

<script setup>
import  "../../assets/main.css";
import { ref } from "vue";

const selectedFile = ref(null);

function handleClick() {
  document.getElementById("fileInput").click();
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  selectedFile.value = file;
}

function handleFileChange(e) {
  const file = e.target.files[0];
  selectedFile.value = file;

  // 替换 p 标签的文字
  const p1 = document.querySelector(".p1");
  const p2 = document.querySelector(".p2");

  if (p1 && p2) {
    p1.textContent = file.name;
    p2.textContent = file.name;
  }
}

const showForm = ref(false);

function showFormHandler() {
  showForm.value = true;
}

function hoverHandler() {
  // 实现动一下效果
  const button = event.target;
  button.style.transform = "translateX(5px)";
  setTimeout(() => {
    button.style.transform = "translateX(0)";
  }, 200);
}
</script>

<style scoped>
.form-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  z-index: 999;

  /* 自定义表单样式 */
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.dark-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: none;
}

.dark-overlay.show {
  display: block;
}

.file-name {
  color: #32325d;
}

.container {
  height: 100vh;
  width: 100vm;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
}

.top {
  background-size: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 67%;
  background-image: url(../../assets/img/background.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.bottom {
  width: 100%;
  height: 170px;

  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.center {
  margin-top: 120px;
  position: absolute;
  width: 47%;
  height: 65%;
  z-index: 2;
  background-color: #ffffff;
  display: grid;
  justify-items: center;
}

.upload {
  width: 660px;
  height: 420px;
  background-color: #c1d6f9;
  text-align: center;
  background: #f9f9fe;
  border: 2px dashed #bbbaba;
  border-radius: 20px;
  cursor: pointer;
  transition: border-color 0.3s;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #32325d;
  font-weight: 800;
  line-height: 50px;
  font-size: 50px;
}

svg {
  margin-top: 55px;
}

.p1 {
  margin-top: 10px;
  font-weight: 600;
  font-size: 30px;
  color: #32325d;
}

.p2 {
  color: #32325d;
  font-size: 25px;
  margin-top: 10px;
}

button {
  border: none;
}

.keep {
  margin-right: 40px;
}

.close,
.keep {
  margin-top: 40px;
  white-space: nowrap;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #6772e5;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  color: #fff;
  background: #6772e5;
  
}
  
.common-button {
  margin-top: 40px;
  white-space: nowrap;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #6772e5;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  color: #fff;
  background: #6772e5;
}

p {
  height: 50px;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
}

</style>