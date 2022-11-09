let api="http://192.168.0.154:8080/fyFyTask";
let sendHttp=(url,method,data)=>{
  return new Promise((reslove,reject)=>{
    wx.request({
      url: `${api}${url}`,
      method:method,
      data:data,
      success(res){
        reslove(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}
module.exports= sendHttp