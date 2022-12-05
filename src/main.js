import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';

//引入先关的mock数据的文件【需要代码执行一次】
import '@/mock/serve';


//引入全部的请求函数
import * as API from '@/api';
//按需引入相应使用的组件【按需引入注册组件的第一种方式】
import { Button } from 'element-ui';
//注册为全局组件---注册组件方式之一
Vue.component(Button.name, Button);


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount('#app');
