import axios from 'axios'
import URI from 'urijs'
import store from './store/index'
import router from './router'
import app from './main'

export default ()=> {
  //设置请求拦截 添加token
  axios.interceptors.request.use(function (config) {
    let uri = new URI(config.url)
    uri.search(function(data) {
      data.token = store.getters.token
      //data.token = 1
    })
    config.url = uri.toString()
    return config
  }, function(error) {
    app.$vux.toast.show({
      type: 'text',
      width: '15em',
      text: '网络异常, 请稍后再试'
    })
    return error
  })

  //拦截接收 判断token是否可用
  axios.interceptors.response.use(function (response) {
    if(response.data === '') {
      app.$vux.toast.show({
        type: 'text',
        width: '15em',
        text: '登录过期，请重新登录'
      })
      store.commit("logout")
      router.push({ path: "/login" })
    }
    return response
  },function(error) {
      app.$vux.toast.show({
        type: 'text',
        width: '15em',
        text: '网络异常, 请稍后再试'
      })
      return error
    }
  )
}