import Mock from 'mockjs'
import homeApi from '@/mock/home'
import userApi from '@/mock/user'

function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

Mock.setup({
  timeout: '200-2000',
})

//var data = Mock.mock('api/home', 'get', homeApi.getHomeData())
Mock.mock('cockpit/index/qualifiedSupplier/getbysdate', 'get', homeApi.getHomeData())
Mock.mock('cockpit/index/getsixblockdata', 'get', homeApi.getSixBlockData())
Mock.mock(/\/index\/getUserList/, 'get', (option) => {
  console.log(option.url)
  let obj = param2Obj(option.url)
  let res = userApi.getUserList(option)
  if (obj.searchName != '' && obj.searchName != undefined) {
    res.data = res.data.filter((user) => {
      if (user.name.indexOf(obj.searchName) != -1) {
        return user
      }
    })
  }
  res.data = res.data.filter((user, index) => {
    if (index < obj.page * obj.pageSize && index >= (obj.page - 1) * obj.pageSize) {
      return user
    }
  })
  return res
})
Mock.mock('/index/addUser', 'post', (option) => {
  console.log(option)
  return userApi.addUser(option)
})
