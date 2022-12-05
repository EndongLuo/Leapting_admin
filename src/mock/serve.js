//通过mockjs模块实现模拟数据

import Mock from 'mockjs';
//模拟的数据需要引入进来
import banner from './banner.json';
// import floor from './floor.json';

//通过Mock对象模拟出虚拟数据
//路径当中出现/api 真实接口    /mock 模拟数据
Mock.mock("/mock/banner",{code:200,data:banner});
// Mock.mock('/mock/floor',{code:200,data:floor});


