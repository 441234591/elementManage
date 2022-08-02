import Mock from 'mockjs'

let list = []
const count = 200

for (var i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      birthdate: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1),
      province: Mock.mock('@province'),
      'age|18-60': 1,
      'love|1': ['足球', '篮球', '乒乓球'],
      addr: Mock.mock('@county(true)'),
      'school|1': ['湖南科技大学', '长沙理工大学', '清华大学', '北京大学'],
      'degree|1': ['本科', '专科', '博士', '硕士'],
      isworking: Mock.Random.integer(0, 1),
      'organization|1': ['腾讯', '阿里', '金峰', '百度'],
    })
  )
}

export default {
  getUserList: (config) => {
    console.log(config)
    return {
      code: 20000,
      total: list.length,
      data: list,
    }
  },
  addUser: (config) => {
    let obj = JSON.parse(config.body)
    console.log(obj)
    return {
      code: 20000,
      data: {
        msg: '添加成功',
        statu: 0,
      },
    }
  },
}
