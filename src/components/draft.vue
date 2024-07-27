<template>
 <el-container v-loading="loading">
          <el-header>
            <h1>个人简历</h1>
          </el-header>
          <el-main>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="我的简历" name="resume">
                <el-card v-if="resume === null">
                  <h2>还没有上传简历喔，快去上传吧</h2>
                </el-card>
                <el-card v-if="resume !== null">
                  <el-row>
                    <el-col :span="12">
                      <h2>个人信息</h2>
                      <p>姓名: {{ resume['个人信息'].姓名 }}</p>
                      <p>电话: {{ resume['个人信息'].电话 }}</p>
                      <p>电子邮件: {{ resume['个人信息'].电子邮件 }}</p>
                      <p>地址: {{ resume['个人信息'].地址 }}</p>
                      <p>生日: {{ resume['个人信息'].生日 }}</p>
                      <p>年龄: {{ resume['个人信息'].年龄 }}</p>
                      <p>学历: {{ resume['个人信息'].学历 }}</p>
                      <p>社交媒体链接:</p>
                      <ul>
                        <li v-for="(link, index) in resume['个人信息'].社交媒体链接" :key="index">
                          <a :href="Object.values(link)[0]" target="_blank">{{ Object.keys(link)[0] }}</a>
                        </li>
                      </ul>
                    </el-col>
                  </el-row>
                  <el-divider></el-divider>
                  <h2>求职意向</h2>
                  <p>意向城市: {{ resume['求职意向'].意向城市.join(', ') }}</p>
                  <p>意向岗位: {{ resume['求职意向'].意向岗位.join(', ') }}</p>
                  <p>意向薪资: {{ resume['求职意向'].意向薪资 }}</p>
                  <p>其他意向: {{ resume['求职意向'].其他意向 }}</p>
                  <el-divider></el-divider>
                  <h2>教育背景</h2>
                  <div v-for="(education, index) in resume['教育背景']" :key="index">
                    <p>教育层次: {{ education.教育层次 }}</p>
                    <p>学校: {{ education.学校 }}</p>
                    <p>专业: {{ education.专业 }}</p>
                    <p>学位: {{ education.学位 }}</p>
                    <p>时间: {{ education.时间 }}</p>
                    <p>主修课程: {{ education.主修课程.join(', ') }}</p>
                    <p>成绩: {{ education.成绩 }}</p>
                  </div>
                  <el-divider></el-divider>
                  <h2>技能优势</h2>
                  <ul>
                    <li v-for="(skill, index) in resume['技能优势']" :key="index">{{ skill }}</li>
                  </ul>
                  <el-divider></el-divider>
                  <h2>语言</h2>
                  <div v-for="(language, index) in resume['语言']" :key="index">
                    <p>语言: {{ language.语言 }}</p>
                    <p>熟练程度: {{ language.熟练程度 }}</p>
                  </div>
                  <el-divider></el-divider>
                  <h2>荣誉奖项</h2>
                  <div v-for="(award, index) in resume['荣誉奖项']" :key="index">
                    <p>时间: {{ award.时间 }}</p>
                    <p>奖项: {{ award.奖项 }}</p>
                  </div>
                  <el-divider></el-divider>
                  <h2>学术成果</h2>
                  <div v-for="(achievement, index) in resume['学术成果']" :key="index">
                    <p>时间: {{ achievement.时间 }}</p>
                    <p>名称: {{ achievement.名称 }}</p>
                  </div>
                  <el-divider></el-divider>
                  <h2>证书</h2>
                  <div v-for="(certificate, index) in resume['证书']" :key="index">
                    <p>时间: {{ certificate.时间 }}</p>
                    <p>名称: {{ certificate.名称 }}</p>
                  </div>
                  <el-divider></el-divider>
                  <h2>项目经历</h2>
                  <div v-for="(project, index) in resume['项目经历']" :key="index">
                    <p>项目名称: {{ project.项目名称 }}</p>
                    <p>时间: {{ project.时间 }}</p>
                    <p>参与角色: {{ project.参与角色 }}</p>
                    <p>项目地址: <a :href="project.项目地址" target="_blank">{{ project.项目地址 }}</a></p>
                    <p>技术栈: {{ project.技术栈.join(', ') }}</p>
                    <p>项目内容:</p>
                    <ul>
                      <li v-for="(content, index) in project.项目内容" :key="index">{{ content }}</li>
                    </ul>
                  </div>
                  <el-divider></el-divider>
                  <h2>工作经历</h2>
                  <div v-for="(experience, index) in resume['工作经历']" :key="index">
                    <p>单位: {{ experience.单位 }}</p>
                    <p>时间: {{ experience.时间 }}</p>
                    <p>岗位: {{ experience.岗位 }}</p>
                    <p>地址: {{ experience.地址 }}</p>
                    <p>工作主要内容:</p>
                    <ul>
                      <li v-for="(content, index) in experience.工作主要内容" :key="index">{{ content }}</li>
                    </ul>
                  </div>
                  <el-divider></el-divider>
                  <h2>自我评价</h2>
                  <ul>
                    <li v-for="(comment, index) in resume['自我评价']" :key="index">{{ comment }}</li>
                  </ul>
                  <el-divider></el-divider>
                  <h2>其他内容</h2>
                  <p>{{ resume['其他内容'] }}</p>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="修改简历" name="edit">
                <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px"
                         class="demo-dynamic">
                  <h2>个人信息</h2>
                  <el-form-item label="姓名">
                    <el-input v-model="dynamicValidateForm['个人信息'].姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="电话">
                    <el-input v-model="dynamicValidateForm['个人信息'].电话"></el-input>
                  </el-form-item>
                  <el-form-item label="电子邮件">
                    <el-input v-model="dynamicValidateForm['个人信息'].电子邮件"></el-input>
                  </el-form-item>
                  <el-form-item label="地址">
                    <el-input v-model="dynamicValidateForm['个人信息'].地址"></el-input>
                  </el-form-item>
                  <el-form-item label="生日">
                    <el-input v-model="dynamicValidateForm['个人信息'].生日"></el-input>
                  </el-form-item>
                  <el-form-item label="年龄">
                    <el-input v-model="dynamicValidateForm['个人信息'].年龄"></el-input>
                  </el-form-item>
                  <el-form-item label="学历">
                    <el-input v-model="dynamicValidateForm['个人信息'].学历"></el-input>
                  </el-form-item>
                  <el-form-item label="社交媒体链接">
                    <el-button @click="addItem(dynamicValidateForm['个人信息'].社交媒体链接, {value: '', label: ''})">
                      新增链接
                    </el-button>
                    <div v-for="(link, index) in dynamicValidateForm['个人信息'].社交媒体链接" :key="link.key">
                      <el-input v-model="link.label" placeholder="标签"></el-input>
                      <el-input v-model="link.value" :placeholder="'链接 ' + (index + 1)"></el-input>
                      <el-button @click="removeItem(link, dynamicValidateForm['个人信息'].社交媒体链接)">删除
                      </el-button>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>求职意向</h2>
                  <el-form-item label="意向城市">
                    <el-button @click="addItem(dynamicValidateForm['求职意向'].意向城市, {key: Date.now(), value: ''})">
                      新增城市
                    </el-button>
                    <div v-for="(city, index) in dynamicValidateForm['求职意向'].意向城市" :key="city.key">
                      <el-input v-model="city.value" :placeholder="'城市 ' + (index + 1)"></el-input>
                      <el-button @click="removeItem(city, dynamicValidateForm['求职意向'].意向城市)">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-form-item label="意向岗位">
                    <el-button @click="addItem(dynamicValidateForm['求职意向'].意向岗位, {key: Date.now(), value: ''})">
                      新增岗位
                    </el-button>
                    <div v-for="(job, index) in dynamicValidateForm['求职意向'].意向岗位" :key="job.key">
                      <el-input v-model="job.value" :placeholder="'岗位 ' + (index + 1)"></el-input>
                      <el-button @click="removeItem(job, dynamicValidateForm['求职意向'].意向岗位)">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-form-item label="意向薪资">
                    <el-input v-model="dynamicValidateForm['求职意向'].意向薪资"></el-input>
                  </el-form-item>
                  <el-form-item label="其他意向">
                    <el-input v-model="dynamicValidateForm['求职意向'].其他意向"></el-input>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>教育背景</h2>
                  <el-button
                          @click="addItem(dynamicValidateForm['教育背景'], { 教育层次: '', 学校: '', 专业: '', 学位: '', 时间: '', 主修课程: [{key: Date.now(), value: ''}], 成绩: '', key: Date.now() })">
                    新增教育背景
                  </el-button>
                  <div v-for="(education, index) in dynamicValidateForm['教育背景']" :key="education.key">
                    <el-form-item :label="'教育层次 ' + (index + 1)">
                      <el-input v-model="education.教育层次"></el-input>
                    </el-form-item>
                    <el-form-item :label="'学校 ' + (index + 1)">
                      <el-input v-model="education.学校"></el-input>
                    </el-form-item>
                    <el-form-item :label="'专业 ' + (index + 1)">
                      <el-input v-model="education.专业"></el-input>
                    </el-form-item>
                    <el-form-item :label="'学位 ' + (index + 1)">
                      <el-input v-model="education.学位"></el-input>
                    </el-form-item>
                    <el-form-item :label="'时间 ' + (index + 1)">
                      <el-input v-model="education.时间"></el-input>
                    </el-form-item>
                    <el-form-item :label="'主修课程 ' + (index + 1)">
                      <el-button @click="addItem(education.主修课程, {key: Date.now(), value: ''})">新增课程</el-button>
                      <div v-for="(course, idx) in education.主修课程" :key="course.key">
                        <el-input v-model="course.value" :placeholder="'课程 ' + (idx + 1)"></el-input>
                        <el-button @click="removeItem(course, education.主修课程)">删除</el-button>
                      </div>
                    </el-form-item>
                    <el-form-item :label="'成绩 ' + (index + 1)">
                      <el-input v-model="education.成绩"></el-input>
                    </el-form-item>
                    <el-button @click="removeItem(education, dynamicValidateForm['教育背景'])">删除</el-button>
                    <el-divider></el-divider>
                  </div>
                  <el-divider></el-divider>
                  <h2>技能优势</h2>
                  <el-form-item>
                    <el-button @click="addItem(dynamicValidateForm['技能优势'], {key: Date.now(), value: ''})">
                      新增技能
                    </el-button>
                    <div v-for="(skill, index) in dynamicValidateForm['技能优势']" :key="skill.key">
                      <el-input v-model="skill.value" :placeholder="'技能 ' + (index + 1)"></el-input>
                      <el-button @click="removeItem(skill, dynamicValidateForm['技能优势'])">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>语言</h2>
                  <el-form-item>
                    <el-button
                            @click="addItem(dynamicValidateForm['语言'], { 语言: '', 熟练程度: '', key: Date.now() })">
                      新增语言
                    </el-button>
                    <div v-for="(language, index) in dynamicValidateForm['语言']" :key="language.key">
                      <el-form-item :label="'语言 ' + (index + 1)">
                        <el-input v-model="language.语言"></el-input>
                      </el-form-item>
                      <el-form-item :label="'熟练程度 ' + (index + 1)">
                        <el-input v-model="language.熟练程度"></el-input>
                      </el-form-item>
                      <el-button @click="removeItem(language, dynamicValidateForm['语言'])">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>荣誉奖项</h2>
                  <el-form-item>
                    <el-button
                            @click="addItem(dynamicValidateForm['荣誉奖项'], { 时间: '', 奖项: '', key: Date.now() })">
                      新增奖项
                    </el-button>
                    <div v-for="(award, index) in dynamicValidateForm['荣誉奖项']" :key="award.key">
                      <el-form-item :label="'时间 ' + (index + 1)">
                        <el-input v-model="award.时间"></el-input>
                      </el-form-item>
                      <el-form-item :label="'奖项 ' + (index + 1)">
                        <el-input v-model="award.奖项"></el-input>
                      </el-form-item>
                      <el-button @click="removeItem(award, dynamicValidateForm['荣誉奖项'])">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>学术成果</h2>
                  <el-form-item>
                    <el-button
                            @click="addItem(dynamicValidateForm['学术成果'], { 时间: '', 名称: '', key: Date.now() })">
                      新增成果
                    </el-button>
                    <div v-for="(achievement, index) in dynamicValidateForm['学术成果']" :key="achievement.key">
                      <el-form-item :label="'时间 ' + (index + 1)">
                        <el-input v-model="achievement.时间"></el-input>
                      </el-form-item>
                      <el-form-item :label="'名称 ' + (index + 1)">
                        <el-input v-model="achievement.名称"></el-input>
                      </el-form-item>
                      <el-button @click="removeItem(achievement, dynamicValidateForm['学术成果'])">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>证书</h2>
                  <el-form-item>
                    <el-button @click="addItem(dynamicValidateForm['证书'], { 时间: '', 名称: '', key: Date.now() })">
                      新增证书
                    </el-button>
                    <div v-for="(certificate, index) in dynamicValidateForm['证书']" :key="certificate.key">
                      <el-form-item :label="'时间 ' + (index + 1)">
                        <el-input v-model="certificate.时间"></el-input>
                      </el-form-item>
                      <el-form-item :label="'名称 ' + (index + 1)">
                        <el-input v-model="certificate.名称"></el-input>
                      </el-form-item>
                      <el-button @click="removeItem(certificate, dynamicValidateForm['证书'])">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>项目经历</h2>
                  <el-form-item>
                    <el-button
                            @click="addItem(dynamicValidateForm['项目经历'], { 项目名称: '', 时间: '', 参与角色: '', 项目地址: '', 技术栈: [{key: Date.now(), value: ''}], 项目内容: [{key: Date.now(), value: ''}], key: Date.now() })">
                      新增项目
                    </el-button>
                    <div v-for="(project, index) in dynamicValidateForm['项目经历']" :key="project.key">
                      <el-form-item :label="'项目名称 ' + (index + 1)">
                        <el-input v-model="project.项目名称"></el-input>
                      </el-form-item>
                      <el-form-item :label="'时间 ' + (index + 1)">
                        <el-input v-model="project.时间"></el-input>
                      </el-form-item>
                      <el-form-item :label="'参与角色 ' + (index + 1)">
                        <el-input v-model="project.参与角色"></el-input>
                      </el-form-item>
                      <el-form-item :label="'项目地址 ' + (index + 1)">
                        <el-input v-model="project.项目地址"></el-input>
                      </el-form-item>
                      <el-form-item :label="'技术栈 ' + (index + 1)">
                        <el-button @click="addItem(project.技术栈, {key: Date.now(), value: ''})">新增技术</el-button>
                        <div v-for="(stack, idx) in project.技术栈" :key="stack.key">
                          <el-input v-model="stack.value" :placeholder="'技术 ' + (idx + 1)"></el-input>
                          <el-button @click="removeItem(stack, project.技术栈)">删除</el-button>
                        </div>
                      </el-form-item>
                      <el-form-item :label="'项目内容 ' + (index + 1)">
                        <el-button @click="addItem(project.项目内容, {key: Date.now(), value: ''})">新增内容</el-button>
                        <div v-for="(content, idx) in project.项目内容" :key="content.key">
                          <el-input v-model="content.value" :placeholder="'内容 ' + (idx + 1)"></el-input>
                          <el-button @click="removeItem(content, project.项目内容)">删除</el-button>
                        </div>
                      </el-form-item>
                      <el-button @click="removeItem(project, dynamicValidateForm['项目经历'])">删除</el-button>
                      <el-divider></el-divider>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>工作经历</h2>
                  <el-form-item>
                    <el-button
                            @click="addItem(dynamicValidateForm['工作经历'], { 单位: '', 时间: '', 岗位: '', 地址: '', 工作主要内容: [{key: Date.now(), value: ''}], key: Date.now() })">
                      新增工作
                    </el-button>
                    <div v-for="(experience, index) in dynamicValidateForm['工作经历']" :key="experience.key">
                      <el-form-item :label="'单位 ' + (index + 1)">
                        <el-input v-model="experience.单位"></el-input>
                      </el-form-item>
                      <el-form-item :label="'时间 ' + (index + 1)">
                        <el-input v-model="experience.时间"></el-input>
                      </el-form-item>
                      <el-form-item :label="'岗位 ' + (index + 1)">
                        <el-input v-model="experience.岗位"></el-input>
                      </el-form-item>
                      <el-form-item :label="'地址 ' + (index + 1)">
                        <el-input v-model="experience.地址"></el-input>
                      </el-form-item>
                      <el-form-item :label="'工作主要内容 ' + (index + 1)">
                        <el-button @click="addItem(experience.工作主要内容, {key: Date.now(), value: ''})">新增内容
                        </el-button>
                        <div v-for="(content, idx) in experience.工作主要内容" :key="content.key">
                          <el-input v-model="content.value" :placeholder="'内容 ' + (idx + 1)"></el-input>
                          <el-button @click="removeItem(content, experience.工作主要内容)">删除</el-button>
                        </div>
                      </el-form-item>
                      <el-button @click="removeItem(experience, dynamicValidateForm['工作经历'])">删除</el-button>
                      <el-divider></el-divider>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <h2>自我评价</h2>
                  <el-form-item>
                    <el-button @click="addItem(dynamicValidateForm['自我评价'], {key: Date.now(), value: ''})">
                      新增评价
                    </el-button>
                    <div v-for="(comment, index) in dynamicValidateForm['自我评价']" :key="comment.key">
                      <el-input v-model="comment.value" :placeholder="'评价 ' + (index + 1)"></el-input>
                      <el-button @click="removeItem(comment, dynamicValidateForm['自我评价'])">删除</el-button>
                    </div>
                  </el-form-item>
                  <el-divider></el-divider>
                  <el-form-item label="其他内容">
                    <el-input type="textarea" v-model="dynamicValidateForm['其他内容']"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <!--              <el-tab-pane label="上传简历" name="uploading" 所有内容居中 >-->
              <el-tab-pane label="上传简历" name="uploading">

                <el-upload
                        class="upload-demo"
                        drag
                        action=""
                        :before-upload="handleUpload"
                        :show-file-list="false">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传pdf文件</div>
                  <el-button type="primary">立即上传</el-button>
                </el-upload>
                <!--                上传须知-->
                <h2>请上传PDF格式的简历文件</h2>
                <h3>解析可能会占用1分钟左右时间，请耐心等待</h3>
                <el-button v-if="resume === null" @click="switchTab('edit')">在线填写简历</el-button>
                <el-progress v-if="start_uploading" :percentage="uploadProgress" type="circle" :stroke-width="10"
                             :status="upload_status"></el-progress>
                <h2 v-if="uploading">请稍等，正在智能解析您的简历...</h2>
                <el-button v-if="resume !== null" @click="switchTab('resume')">查看简历</el-button>
                <el-button v-if="resume !== null" type="primary" @click="switchTab('edit')">修改简历</el-button>
                <el-button v-if="resume !== null" type="success" @click="switchTab('analyse')">智能分析简历</el-button>


              </el-tab-pane>
              <el-tab-pane label="智能分析" name="analyse" class="centered-container">

                <h2>智能分析</h2>
                <el-button v-if="!analysis_finished" @click="getAnalysisResult">开始分析</el-button>
                <el-progress v-if="analysis_started" :percentage="analyseProgress" type="circle" :stroke-width="10"
                             :status="analyse_status"></el-progress>
                <h3 v-if="analysis_started && !analysis_finished">智能评估中...</h3>

                <el-card style="width: 90%" v-if="analysis_finished">
                  <h2>简历得分</h2>
                  <el-progress type="circle" :percentage="(analysis.相关性+analysis.清晰度+analysis.精炼度+analysis.成就展示)/4"></el-progress>
                </el-card>
                <el-card style="width: 90%" class="centered-container" v-if="analysis_finished">
                  <h2>各项评分</h2>
                  相关性
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="analysis.相关性"></el-progress>
                  清晰度
                  <el-progress :text-inside="true" :stroke-width="24" :percentage="analysis.清晰度" status="success"></el-progress>
                  精炼度
                  <el-progress :text-inside="true" :stroke-width="22" :percentage="analysis.精炼度" status="warning"></el-progress>
                  成就展示
                  <el-progress :text-inside="true" :stroke-width="20" :percentage="analysis.成就展示" status="exception"></el-progress>

                </el-card>
                <el-card style="width: 90%" class="centered-container" v-if="analysis_finished">
                  <h2>总体评价</h2>
                    <p>{{ analysis.简历评价 }}</p>
                </el-card>
                <el-card style="width: 90%" class="centered-container" v-if="analysis_finished">
                  <h2>修改意见</h2>
                    <p>{{ analysis.修改意见 }}</p>
                </el-card>
                <el-card style="width: 90%" class="centered-container" v-if="analysis_finished">
                  <h2>智能润色</h2>
                    <el-button type="success" @click="getImprovisedResult">开始润色</el-button>
                </el-card>
<!--                <el-button @click="switchTab('resume')">查看简历</el-button>-->
<!--                <el-button type="primary" @click="switchTab('edit')">修改简历</el-button>-->
              </el-tab-pane>
            </el-tabs>
          </el-main>
        </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import axios from 'axios';

interface DynamicValidateForm {
  '个人信息': {
    姓名: string;
    电话: string;
    电子邮件: string;
    地址: string;
    生日: string;
    年龄: string;
    学历: string;
    社交媒体链接: { key: number; value: string; label: string }[];
  };
  '求职意向': {
    意向城市: string[];
    意向岗位: string[];
    意向薪资: string;
    其他意向: string;
  };
  '教育背景': {
    教育层次: string;
    学校: string;
    专业: string;
    学位: string;
    时间: string;
    主修课程: string[];
    成绩: string;
  }[];
  '技能优势': string[];
  '语言': { key: number; 语言: string; 熟练程度: string }[];
  '荣誉奖项': { key: number; 时间: string; 奖项: string }[];
  '学术成果': { key: number; 时间: string; 名称: string }[];
  '证书': { key: number; 时间: string; 名称: string }[];
  '项目经历': {
    项目名称: string;
    时间: string;
    参与角色: string;
    项目地址: string;
    技术栈: string[];
    项目内容: string[];
  }[];
  '工作经历': {
    单位: string;
    时间: string;
    岗位: string;
    地址: string;
    工作主要内容: string[];
  }[];
  '自我评价': string[];
  '其他内容': string;
}

const loading = ref(false);
const analysis_started = ref(false);
const analysis_finished = ref(false);
const analysis = ref<any>(null);
const start_uploading = ref(false);
const uploading = ref(false);
const upload_status = ref<any>(null);
const activeTab = ref('uploading');
const resume = ref<any>(null);
const dynamicValidateForm = reactive<DynamicValidateForm>({
  '个人信息': {
    姓名: '',
    电话: '',
    电子邮件: '',
    地址: '',
    生日: '',
    年龄: '',
    学历: '',
    社交媒体链接: []
  },
  '求职意向': {
    意向城市: [],
    意向岗位: [],
    意向薪资: '',
    其他意向: ''
  },
  '教育背景': [],
  '技能优势': [],
  '语言': [],
  '荣誉奖项': [],
  '学术成果': [],
  '证书': [],
  '项目经历': [],
  '工作经历': [],
  '自我评价': [],
  '其他内容': ''
});
const analyseProgress = ref(0);
const uploadProgress = ref(0);
const uploadInterval = ref<any>(null);
const analyseInterval = ref<any>(null);
const analyse_status = ref<any>(null);

// 加载简历数据
function loadResumeData() {
  // 转换和处理数据的逻辑与之前相同
}

// 提交表单
function submitForm(formName: string) {
  // 表单验证和处理逻辑与之前相同
}

// 重置表单
function resetForm(formName: string) {
  // 重置表单的逻辑
}

// 删除项
function removeItem(item: any, list: any[]) {
  const index = list.indexOf(item);
  if (index!== -1) {
    list.splice(index, 1);
  }
}

// 添加项
function addItem(list: any[], template: any) {
  list.push({...template, key: Date.now() });
}

// 处理文件上传
function handleUpload(file: File) {
  if (file.type!== 'application/pdf') {
    // 错误提示逻辑
    return false;
  }
  startUploadProgress();
  const formData = new FormData();
  formData.append('file', file);
  start_uploading.value = true;
  uploading.value = true;
  axios.post('http://resume.tech-webs.com:8084/api/resumes/file', formData, {
    headers: {
      'Content-Type': 'ultipart/form-data'
    }
  }).then(response => {
    if (response.data.success) {
      // 成功处理逻辑
    } else {
      // 失败处理逻辑
    }
    uploadProgress.value = 100;
    clearInterval(uploadInterval.value);
  }).catch(error => {
    // 错误处理逻辑
  });
  return false;
}

// 获取分析结果
function getAnalysisResult() {
  // 分析处理逻辑与之前相同
}

// 获取润色结果
function getImprovisedResult() {
  // 润色处理逻辑与之前相同
}

// 切换选项卡
function switchTab(tab: string) {
  activeTab.value = tab;
}

// 开始上传进度
function startUploadProgress() {
  uploadProgress.value = 0;
  uploadInterval.value = setInterval(() => {
    if (uploadProgress.value < 99) {
      uploadProgress.value += 1;
    } else {
      clearInterval(uploadInterval.value);
    }
  }, 1000); 
}

// 开始分析进度
function startAnalyseProgress() {
  analyseProgress.value = 0;
  analyseInterval.value = setInterval(() => {
    if (analyseProgress.value < 99) {
      analyseProgress.value += 1;
    } else {
      clearInterval(analyseInterval.value);
    }
  }, 400); 
}
</script>

<style scoped >
 
</style>