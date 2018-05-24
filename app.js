/**
 * 注册App
 */
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs)

    //登陆
    wx.login({
      success: res =>{
        //发送 res.code 到后台换取openId,sessionKey,unionId
      }
    })
    //获取用户信息
    wx.getSetting({
      success : res => {
        if(res.authSetting['scope.userInfo']){
          //已经授权，可以直接调用getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success : res => {
              //可以将res 发送给后台解码出unionId
              this.globalData.userInfo = res.userInfo;
              //由于getUserInfo 是网络请求，可能会在Page.onLoad 之后才返回
              //所以此处加上 callback 以防止这种情况
              if(this.userInfoReadyCallback){
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })  
  },
  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生脚本错误，或者api调用失败', msg)
  },
  getUserInfo(cb){
    if(this.globalData.userInfo){
      typeof cb ==="function" && cb(this.globalData.userInfo)
    }else{
      //调用登陆接口
      wx.login({
        success : res => {
          wx.getUserInfo({
            success : res => {
              this.globalData.userInfo = res.userInfo;
              typeof cb === "function" && cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
    movieBase: "https://api.adline.com.cn",
    musicBase:"https://api.huxiaowen.vip",
    QQMusicBase:"https://c.y.qq.com",
    doubanBase:"https://douban.uieee.com"
  }
})
