import Vue from "vue";
import Router from "vue-router";
import Index from "@/pages/Index";
const Login = (resolve) => require(["@/pages/Login"], resolve);
const SignUp = (resolve) => require(["@/pages/SignUp"], resolve);
const ForgetPassword = (resolve) =>
  require(["@/pages/ForgetPassword"], resolve);
const GoodsList = (resolve) => require(["@/pages/GoodsList"], resolve);
const GoodsDetail = (resolve) => require(["@/pages/GoodsDetail"], resolve);
const PointGoodsDetail = (resolve) =>
  require(["@/pages/promotion/PointGoodsDetail"], resolve);
const Create = (resolve) => require(["@/pages/create"], resolve);
const CreateDetail = (resolve) => require(["@/pages/create/CreateDetail"], resolve);
const Coupon = (resolve) => require(["@/pages/CouponCenter"], resolve);
const seckill = (resolve) => require(["@/pages/promotion/seckill"], resolve);
const nodeSee = (resolve) => require(["@/pages/nodeSee/index"], resolve);
const PayDone = (resolve) => require(["@/pages/payment/PayDone"], resolve);
const Merchant = (resolve) => require(["@/pages/Merchant"], resolve);
const ShopEntry = (resolve) =>
  require(["@/pages/shopEntry/ShopEntry"], resolve);

Vue.use(Router);
/**
 * 解决重复点击菜单会控制台报错bug
 */
 const routerPush = Router.prototype.push
 Router.prototype.push = function push(location) {
   return routerPush.call(this, location).catch(error=> error)
 }

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/", // 首页
      name: "Index",
      component: Index,
    },
    {
      path: "/login", // 登陆
      name: "login",
      component: Login,
      meta: {
        title: "登录",
      },
    },
    {
      path: "/SignUp", // 注册
      name: "SignUp",
      component: SignUp,
      meta: {
        title: "注册",
      },
    },
    {
      path: "/forgetPassword", // 忘记密码
      name: "forgetPassword",
      component: ForgetPassword,
      meta: {
        title: "忘记密码",
      },
    },
    {
      path: "/modelDetail",
      name: "modelDetail",
      component: GoodsList,
    },
    {
      path: "/goodsDetail", // 商品详情
      name: "GoodsDetail",
      component: GoodsDetail,
      meta: { title: "商品详情" },
    },
    {
      path: "/pointGoodsDetail", // 商品详情
      name: "PointGoodsDetail",
      component: PointGoodsDetail,
      meta: { title: "积分商品" },
    },
    {
      path: "/Create",
      name: "Create",
      component: Create,
      meta: { title: "create" },
    },
    {
      path: "/CreateDetail",
      name: " CreateDetail",
      component:  CreateDetail,
      meta: { title: 'create-detail' },
    },
    {
      path: "/payDone",
      name: "PayDone",
      component: PayDone,
    },
    {
      path: "/nodeSee",
      name: "nodeSee",
      component: nodeSee,
      meta: {
        title: "节点视图",
      },
    },
    {
      path: "/shopEntry",
      name: "shopEntry",
      component: ShopEntry,
      meta: {
        title: "emc-上传",
      },
    },
    {
      path: "/coupon",
      name: "coupon",
      component: Coupon,
      meta: {
        title: "领券中心",
      },
    },
    {
      path: "/merchant",
      name: "Merchant",
      component: Merchant,
      meta: { title: "专题页" },
    },
  ],
});
