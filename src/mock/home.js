import Mock from 'mockjs'
export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: '1月',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: '2月',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: '3月',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: '4月',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: '5月',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: '6月',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
      },
    }
  },
  getSixBlockData: () => {
    return {
      code: 20000,
      data: [
        {
          name: '工程类',
          value: Mock.Random.integer(0, 100),
          icon: 'camera',
        },
        {
          name: '注册类',
          value: Mock.Random.integer(0, 100),
          icon: 's-platform',
        },
        {
          name: '建筑类',
          value: Mock.Random.integer(0, 100),
          icon: 'picture',
        },
        {
          name: '学科类',
          value: Mock.Random.integer(0, 100),
          icon: 's-promotion',
        },
        {
          name: '物理类',
          value: Mock.Random.integer(0, 100),
          icon: 's-open',
        },
        {
          name: '化学类',
          value: Mock.Random.integer(0, 100),
          icon: 's-finance',
        },
      ],
    }
  },
}
