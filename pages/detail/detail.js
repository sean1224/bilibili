// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoDetail:{},
    othersList:[],
    commentData:{}
  }, 
  bindprogress:function (e){ 
  },
  /**
   *  获取后台数据
   */

  //获取视频详情
  getvideoDetail(options) {
    let that = this;
    if(options.id){
      wx.request({
        url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+options.id,
        success(res) {
          res = res.data;
          if (res.code === 0) {
            that.setData({
              videoDetail: res.data.videoInfo
            })
          }
        }
      });      
    }

  },
  //获取推荐视频
  getothersList(options) {
    let that = this;
    if(options.id){
      wx.request({
        url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + options.id,
        success(res) {
          res = res.data;
          if (res.code === 0) {
            that.setData({
              othersList: res.data.othersList
            })
          }
        }
      });      
    }

  },
  //获取评论内容
  getcommentData(options) {
    let that = this;
    if(options.id){
      wx.request({
        url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + options.id,
        success(res) {
          res = res.data;
          if (res.code === 0) {
            that.setData({
              commentData: res.data.commentData
            })
          }
        }
      });      
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getvideoDetail(options);
    this.getothersList(options);
    this.getcommentData(options);
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