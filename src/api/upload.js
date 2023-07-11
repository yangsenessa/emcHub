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
