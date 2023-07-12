import request, {Method} from '@/plugins/request.js';

/**
 * 账号密码登录
 */
export function Login(params) {
  return request({
    url: '/userLogin.do',
    method:'POST',
    data:params
  });
}


