import request, {Method} from '@/plugins/request.js';

/**
 * 账号密码登录
 */
export function LoginByPassWD(params) {
  params.bussData.identiType="PASSWD";
  return request({
    url: '/userLogin.do',
    method:'POST',
    data:params
  });
}
/**
 * 用户注册-原生注册
 */
export function userRegOrigin(params) {
  return request({
    url: '/applyRegister.do',
    method:'POST',
    data:params
  });
}

export function authTokenSet(params){
  return request({
    url: '/setAutoration.do',
    method:'POST',
    data:params
  });

}


