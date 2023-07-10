import request, { Method } from "@/plugins/request.js";

/**
 * 刷新token
 */
export function handleRefreshToken(token) {
  return request({
    url: `/buyer/passport/member/refresh/${token}`,
    method: Method.GET,
    needToken: false,
  });
}
