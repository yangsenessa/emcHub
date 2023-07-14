import request, {
  Method
} from '@/plugins/request.js';

export function modelUpload(params) {
  return request({
    url: '/modelUpload.do',
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
/**
 * 新增模型接口
 */
export function addNewModel(params) {
  return request({
    url: '/addNewModel.do',
    method:'POST',
    data:params
  });
}


//modModelDetailInfo.do 修改模型详情
export function modModelDetailInfo(params) {
  return request({
    url: '/modModelDetailInfo.do',
    method: 'POST',
    data: params
  })
}
