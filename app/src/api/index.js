//在此对api进行统一管理
import requests from './request.js'
import mockRequests from './mockAjax.js'
import { method } from 'lodash'
//这是三级联动接口
export const reqCategoryList = () => {
  //发请求
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

//获取banner(来自mock模拟的数据)
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor的数据
export const reqGetFloorList = () => mockRequests.get("/floor")

//获取搜索模块的数据
export const reqGetSearchInfo = (params) => {
  return requests({
    url: "/list",
    method: 'post',
    data: params,
  })
}

//获取产品详情信息的接口
export const reqGoodsInfo = (skuId) => {
  return requests({
    url: `/item/${skuId}`,
    method: 'get'
  })

}

//将产品添加到购物车中（或者更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post"
  })
}

//获取购物车列表的接口
export const reqCartList = () => {
  return requests({
    url: '/cart/cartList',
    method: "get"
  });
}

//删除购物车产品的接口
export const reqDeleteCartById = (skuId) => {
  return requests({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete"
  })
}

//修改商品选中状态的接口
export const reqUpdateCheckedByid = (skuId, isChecked) => {
  return requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get"
  })
}

//获取验证码的接口
export const reqGetCode = (phone) => {
  return requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })
}

//注册的接口
export const reqUserRegister = (data) => {
  return requests({
    url: '/user/passport/register',
    data:data,
    method: 'post'
  })
}

//登录的接口
export const reqUserLogin=(data)=>{
  return requests({
    url:'/user/passport/login',
    data,
    method:'post'
  })
}

//获取用户信息，需要token
export const reqUserInfo=()=>{
  return requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
  })
}

//退出登录的接口
export const reqLogout=()=>{
  return requests({
    url:'/user/passport/logout',
    methods:'get'
  })
}

//获取用户地址信息
export const reqAddressInfo=()=>{
  return requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
  })
}

//获取交易页信息
export const reqOrderInfo=()=>{
  return requests({
    url:'/order/auth/trade',
    method:'get'
  })
}

//提交订单的接口
export const reqSubmitOrder =(tradeNo,data)=>{
  return requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data
  })
}

//获取支付信息
export const reqPayInfo=(orderId)=>{
  return requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
  })
}

//获取支付状态
export const reqPayStatus =(orderId)=>{
  return requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
  })
}

//获取个人中心数据
export const reqMyOrderList=(page,limit)=>{
  return requests({
    url:`/order/auth/${page}/${limit}`,
    method:"get"
  })
}