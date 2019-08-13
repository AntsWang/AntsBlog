const get = (url,successCallback,failCallback)=>{
  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      successCallback(res)
    },
    fail(err){
      failCallback(err)
    }
  })

}

const post = (url,data, successCallback, failCallback) => {
  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    data:data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      successCallback(res)
      console.log(res.data)
    },
    fail(err) {
      failCallback(err)
    }
  })

}
module.exports = {
  get,
  post
}