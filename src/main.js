import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';

//引入mock数据的文件
import '@/mock/serve';

// 清除默认样式的css
import '@/assets/css/common.css';
// flexible、fastclick工具包
import '@/utils/flexible';
import '@/utils/fastclick';

//引入全部的请求函数
import * as API from '@/api';
// 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);


// window.createjs = this.createjs; 
// require('createjs-module'); 
// // this.createjs = {}; 
// // ros相关工具包
// import '@/utils/ros/easeljs.js'
// import '@/utils/ros/eventemitter2.js'
// import '@/utils/ros/roslib.js'
// import '@/utils/ros/ros2d.js'


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount('#app');
