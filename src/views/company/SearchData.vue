<template>
  <div class="candidate">
    <div class="candidate-listPage-header">
      <h1 class="title">智能人才搜索</h1>
      <div class="search-bar">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
    <div class="list-page-body">
      <div class="body-div">
        <div class="result">
          <div class="candidate-single">
            <div class="portrait">
              <img src="../../assets/img/girl.png" alt="portrait" height="70" width="70"/>
            </div>
            <div class="info">
              <div class="basic">
                <h1>name</h1>
              </div>
              <h4><span>|</span>job</h4>
              <div class="erp">
                <img src="" alt="company logo" height="18px" width="18px">
                <h4><span>|</span>company</h4>
                <h4><span>|</span>job</h4>
              </div>
              <div class="erp">
                <img src="" alt="school logo" height="18px" width="18px">
                <h4><span>|</span>school</h4>
                <h4><span>|</span>period</h4>
                <h4><span>|</span>major</h4>
              </div>
              <div class="skills">
                <span>
                  <span class="tag"></span>
                  <span style="color:rgb(103,114,229);">...</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup></script>

<style scoped>
.basic{
  display: flex;
    align-items: flex-end;

}
.portrait{
  margin-right: 14px;
}

.candidate-single {
    background: #c47373;
    border-radius: 4px;
    margin: 0 7px 14px;
    border: 1px solid #e8e8e8;
    padding: 10px;
    cursor: pointer;
    display: flex;
}

.result {
  margin-top: 30px;
  height: 100vh;
  width: 60%;
  background-color: #c9cbf5;
  margin-left: 20px;
  margin-bottom: 100px;
}
.body-div {
  margin-top: 30px;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e3f9d2;
}

.list-page-body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #eec3c3;
}

.search-bar {
  margin-bottom: 20px;
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
  width: 780px;
  font-size: 20px;
  font-family: "Microsoft soft";
  -webkit-appearance: none; /* 去除默认样式 */
  appearance: none; /* 去除默认样式 */
  transition: width 0.3s ease; /* 控制过渡效果的持续时间和动画效果 */
  overflow: visible;
  background-color: #f6f9fc !important;
  border-color: #f6f9fc !important;
}

.candidate {
  min-height: 100vh;
}
.candidate-listPage-header {
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(#32325d, #000 80%);
}

.title {
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  text-align: center;
  font-weight: 500;
  font-size: 40px;
  margin: 0 0 40px;
}
</style>
