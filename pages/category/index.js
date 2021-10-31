// pages/category/index.js
//引入request
import {request} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单数据
    leftMenuList:[],
    // 右侧商品
    rightContent:[],
  },
  cates:[],
  getcates(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/categories",
      timeout:"5000"
    }).then((res)=>{
      this.cates=res.data.message
      console.log(this.cates)
      // 左侧数据
      let leftMenuLists=this.cates.map(v=>{return v.cat_name})
      //右侧数据
      let rightCintents=this.cates[0].children
      this.setData({
       leftMenuList:leftMenuLists,
       rightCintent:rightCintents
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getcates()
  },
})