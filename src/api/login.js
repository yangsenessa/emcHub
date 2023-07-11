import request, {Method} from '@/plugins/request.js';

/**
 * 注册
 */
export function regist(params) {
  return request({
    url: '/applyRegister.do',
    method: "POST",
    needToken: false,
    data: params
  });
}

/**
 * 账号密码登录
 */
export function Login(params) {
  return request({
    url: '/userLogin.do',
    method: Method.POST,
    data:params,
    headers: {
      // 'Content-Type' :'application/json'
    }
  });
}


/**
 * 获取用户信息
 */
export function getMemberMsg(params) {
  return request({
    url: '/buyer/passport/member',
    method: Method.GET,
    needToken: true,
    params
  });
}

/**
 * 第三方登录 支付宝，微博，qq,微信
 */
export function webLogin(type) {
  window.open(`${buyerUrl}/buyer/passport/connect/connect/login/web/${type}`, 'blank');
}


/**
 * 忘记密码  验证手机验证码
 */
export function validateCode(params) {
  return request({
    url: `/buyer/passport/member/resetByMobile`,
    method: Method.GET,
    needToken: false,
    params
  });
}

/**
 * 忘记密码 重置密码
 */
export function resetPassword(params) {
  return request({
    url: `/buyer/passport/member/resetPassword`,
    method: Method.POST,
    needToken: false,
    params
  });
}

export function getSCLoginCode(params) {
  return request({
    url: `/buyer/passport/member/pc_session`,
    method: Method.POST,
    needToken: false,
    params
  });
}

export function sCLogin(token, params) {
  return request({
    url: `/buyer/passport/member/session_login/` + token,
    method: Method.POST,
    needToken: false,
    params
  });
}
