Page({
  /**
   * 属性列表
   */
  properties: {

  },
  /**
   * 初始数据
   */
  data: {
    navList: [],
    swiperList:[],
    videosList:[]
  },
  /**
   * 方法列表
   */

  // 获取标签
  getnavList(){
    let that = this;
    wx.request({
      url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res){
        res =res.data;
        if(res.code===0){
          that.setData({
            navList:res.data.navList
          })
        }
      }
    });
  },
  //获取轮播图
  getswiperList(){
    let that =this;
    wx.request({
      url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        res=res.data;
        if(res.code===0){
          that.setData({
            swiperList:res.data.swiperList
          })
        }
      }
    });
  },
  //获取视频列表
  getvideosList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        res = res.data;
        if (res.code === 0) {
          that.setData({
            videosList: res.data.videosList
          })
        }
      }
    });
  },
  /**
   * 钩子函数
   */
  onLoad: function () {
    //页面初始化
    this.getnavList();
    this.getswiperList();
    this.getvideosList();
  },
  onShow: function () {
    //页面显示
    console.log('index Show')
  },
  onReady: function () {
    //页面渲染完成
    console.log('index Ready')
  },
  onHide: function () {
    //页面隐藏
    console.log('index Hide')
  },
  onUnload: function () {
    //页面关闭
    console.log('index Unload')
  }
})
