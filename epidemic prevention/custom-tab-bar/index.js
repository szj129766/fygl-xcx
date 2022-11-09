// comments/tabbar/index.js
Component({

  /**
   * 组件的初始数据
   */
  data: {
    show: true,
    selected: 0,
    color: "#808183",
    selectedColor: "#3B3C3F",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "任务大厅",
      "iconPath": "../img/renwu1.png",
      "selectedIconPath": "../img/renw.png"
      },
      {
        "pagePath": "/pages/newly/index",
        "iconPath": "../img/new.png",
        "selectedIconPath": "../img/new.png",
        "text": ""
      },
      {
        "pagePath": "/pages/mine/index",
        "text": "我的",
        "iconPath": "../img/my1.png",
        "selectedIconPath": "../img/my.png"
      }
    ]
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset     
      const url = data.path     
      wx.switchTab({
        url,
      })
      this.setData({
        selected: data.index
      })
      console.log(this.data.selected)
    }
  }
})
