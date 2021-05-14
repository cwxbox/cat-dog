// pages/lecture/lecture.js
var app = getApp()
Page({

  

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['喵星人', '汪星人'],
    currentTab: 0,
    cat_list:[],
    dog_list:[]
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
    wx.cloud.database().collection('cat').get().then(res=>{
      this.setData({
        cat_list:res.data
      })
    }),
    wx.cloud.database().collection('dog').get().then(res=>{
      this.setData({
        dog_list:res.data
      })
    })
  },

  // 跳转页面
  goDetail_cat(e){
    console.log(e.currentTarget.dataset.cat)
    wx.navigateTo({
      url: '/pages/contents_cat/contents_cat?id='+e.currentTarget.dataset.cat,
    })
  },
    // 跳转页面
    goDetail_dog(e){
      console.log(e.currentTarget.dataset.dog)
      wx.navigateTo({
        url: '/pages/contents_dog/contents_dog?id='+e.currentTarget.dataset.dog,
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