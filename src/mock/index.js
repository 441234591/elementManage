import Mock from 'mockjs'
import homeApi from '@/mock/home'
import userApi from '@/mock/user'
Mock.setup({
  timeout: '200-2000',
})

//var data = Mock.mock('api/home', 'get', homeApi.getHomeData())
Mock.mock('cockpit/index/qualifiedSupplier/getbysdate', 'get', homeApi.getHomeData())
Mock.mock('cockpit/index/getsixblockdata', 'get', homeApi.getSixBlockData())
Mock.mock('cockpit/index/getUserList', 'get', userApi.getUserList())
