
let {
  getallList
} = require("../../api/index.js")
Page({
  data: {
   id:"",
   userType:"",
   taskType:"",
   address:"",
   stateTime:"",
   endTime:"",
   fbrName:"",
   list:[],
  },
 async onLoad(options) {
let data={
  id:this.data.id,
  userType:this.data.userType,
  taskType:this.data.taskType,
  address:this.data.address,
  stateTime:this.data.stateTime,
  endTime:this.data.endTime,
  fbrName:this.data.fbrName,
}
   let res=await getallList(data)
   console.log(res);
  
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
})