//在此对api进行统一管理
import requests from './request.js'
import mockRequests from './mockAjax.js'
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
export const reqDeleteCartById=(skuId)=>{
  return requests({
    url:`/cart/deleteCart/${skuId}`,
    method:"delete"
  })
} 

//修改商品选中状态的接口
export const reqUpdateCheckedByid=(skuId,isChecked)=>{
  return requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})
}