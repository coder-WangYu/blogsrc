import axios from 'axios';

export default{
  // 获取作品列表
  getProject() {
    return axios.get('/getProject')
  },
  // 用户注册
  userSign(params) {
    return axios.post('/userSign', params)
  },
  // 用户登录
  userLog(params) {
    return axios.post('/userLog', params)
  },
  // 修改作品浏览量
  alterWatch(params) {
    return axios.get('/alterWatch', params)
  },
}