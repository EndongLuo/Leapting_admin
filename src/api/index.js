import requests from '@/utils/Ajax';
import mockRequests from '@/utils/mockAjax';



// mock轮播图，floor虚拟信息
export const reqBannerList = () => mockRequests.get('/banner');
// export const reqFloorList = () => mockRequests.get('/floor');

// 搜索信息
// export const reqSearchInfo = data => requests.post('/list', data);
// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数
// export const reqCategoryList = () =>
//   requests.get('/product/getBaseCategoryList');