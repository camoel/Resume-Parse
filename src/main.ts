import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';




import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);

app.use(router)

app.use(ElementPlus);

app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
 