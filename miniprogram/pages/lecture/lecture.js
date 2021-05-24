// pages/lecture/lecture.js
var app = getApp()
Page({

  

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['喂养', '疾病', '绝育','撸~'],
    currentTab: 0
  },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.database().collection('weiyang_article').get().then(res=>{
      console.log(res.data[0].content)
      this.setData({
        weiyang_article:res.data[0]
      })
    }),
    wx.cloud.database().collection('jibing_article').get().then(res=>{
      console.log(res.data[0].content)
      this.setData({
        jibing_article:res.data[0]
      })
    }),
    wx.cloud.database().collection('jueyu_article').get().then(res=>{
      console.log(res.data[0].content)
      this.setData({
        jueyu_article:res.data[0]
      })
    }),
    wx.cloud.database().collection('lu_article').get().then(res=>{
      console.log(res.data[0].content)
      this.setData({
        lu_article:res.data[0]
      })
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})