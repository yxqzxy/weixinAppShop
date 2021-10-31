// index.js
// 获取应用实例
const app = getApp()
//Page Object
import{request}from "../../request/index.js"
Page({
  data: {
  swiperList:[],
  cateslist:[],
  floorList:[]
  },
  //options(Object)
  onLoad: function (options) {
    // 轮播图
  this.getswiperList()
   //  首页分类
   this.getCatitemsList()
   //  楼层数据
   this.getFloorList()
  },
  //定义获取轮播图数据
  getswiperList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      timeout: 5000,
    }).then((result)=>{
      this.setData({
      swiperList:result.data.message
    })}).catch((res)=>{console.log(res)})
  },
  //定义获取分类数据
  getCatitemsList(){
   request({
     url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
     timeout:'5000',
   }).then((result)=>{
   this.setData({
     cateslist:result.data.message
   })
   })
  },
  //获取楼层数据
  getFloorList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
      timeout:"5000"
    }).then((result)=>{
    this.setData({
      floorList:result.data.message
    })
    })
  }
})
