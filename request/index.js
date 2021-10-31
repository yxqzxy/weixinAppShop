let request=(parmas)=>{
return new Promise((resolve,reject)=>{
wx.request({
  ...parmas,
  success:(result)=>{
  resolve(result)
  },
  fail:(res)=>{
  reject(res)
  }
})
})
}
module.exports={
  request
}