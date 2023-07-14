import request, { Method } from "@/plugins/request.js";

// queryModelInfoForMainView.do
export function queryModelInfoForMainView(params) {
  return request({
    url: '/queryModelInfoForMainView.do',
    method: 'POST',
    data: params,
  })
}

//queryModelDetailInfo.do 查询模型详情
export function queryModelDetailInfo(params) {
  return request({
    url: '/queryModelDetailInfo.do',
    method: 'POST',
    data: params,
  })
}
