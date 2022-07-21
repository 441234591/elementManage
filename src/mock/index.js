import Mock from 'mockjs'
import homeApi from '@/mock/home'
Mock.setup({
  timeout: '200-2000',
})

//var data = Mock.mock('api/home', 'get', homeApi.getHomeData())
Mock.mock('cockpit/index/qualifiedSupplier/getbysdate', 'get', homeApi.getHomeData())
Mock.mock('cockpit/index/getsixblockdata', 'get', homeApi.getSixBlockData())
