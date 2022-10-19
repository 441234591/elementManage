<template>
  <el-row :gutter="10" :span="24">
    <el-col class="l_content" :span="8">
      <el-card shadow="hover">
        <div class="top">
          <img src="../../assets/image/xiongmao.jpg" />
          <div class="top_left">
            <div class="name">king</div>
            <div>超级管理员</div>
          </div>
        </div>
        <div class="bottom">
          <div class="row"><span>上次登录时间:</span><span>2022-07-15 16:00</span></div>
          <div class="row"><span>上次登录地点:</span><span>长沙</span></div>
        </div>
      </el-card>
      <el-card class="bottom" shadow="hover">
        <el-table :data="tableData" style="width: 100%" height="320">
          <el-table-column fixed prop="date" label="日期" width="100"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
          <el-table-column prop="province" label="省份" width="100"> </el-table-column>
          <el-table-column prop="city" label="市区" width="100"> </el-table-column>
          <el-table-column prop="address" label="地址" width="200"> </el-table-column>
          <el-table-column prop="zip" label="邮编" width="100"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col class="r_content" :span="16">
      <div class="top">
        <div class="sixblockitem" v-for="item in sixBlockdata" :key="item.name">
          <div class="imgIconWrap"><i :class="'el-icon-' + item.icon"></i></div>
          <div class="des_wrap">
            <span class="num">{{ item.value }}</span>
            <span class="des">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="middle" id="echarts3" ref="middle_echart"></div>
      <div class="bottom">
        <div class="bottom_left" ref="bottom_left"></div>
        <div class="bottom_right" ref="bottom_right"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
      sixBlockdata: [],
    }
  },
  created() {
    this.$http.get('cockpit/index/getsixblockdata').then(
      (res) => {
        console.log(res)
        this.sixBlockdata = res.data
        console.log(this.sixBlockdata)
      },
      (err) => {
        console.log(err)
      }
    )
  },
  mounted() {
    this.drawEchartsBar()
    this.drawEchartsPie()
    this.drawEchartsLine()
  },
  methods: {
    drawEchartsBar: function () {
      //var chartDom = document.getElementById('echarts3')
      var myChart = this.$echarts.init(this.$refs.bottom_left)
      var option
      option = {
        grid: {
          top: '20%',
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true,
        },
        color: ['#35ABFD', '#2f4533'],
        legend: {
          data: ['男', '女'],
          textStyle: {
            color: 'black',
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['小于30岁', '30到39岁', '40到49岁', '50岁及以上'],
            axisPointer: {
              type: 'shadow',
            },
            axisLabel: {
              color: 'black',
              textStyle: {
                color: 'black',
                fontSize: 8,
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'black',
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 500,
            interval: 100,
            axisLine: {
              show: false,
            },
            axisLabel: {
              color: 'black',
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(217, 214, 214, .1)',
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '男',
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              color: 'black',
            },
            data: [475, 442, 482, 117],
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#2782EE',
                  },
                  {
                    offset: 0,
                    color: '#37CFFC',
                  },
                ]),
              },
            },
          },
          {
            name: '女',
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              color: 'black',
            },
            data: [197, 183, 164, 3],
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#F0752B',
                  },
                  {
                    offset: 0,
                    color: '#FDB17F',
                  },
                ]),
              },
            },
          },
        ],
      }
      option && myChart.setOption(option)
      window.addEventListener('resize', function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize()
      })
    },
    drawEchartsPie: function () {
      //var chartDom = document.getElementById('echarts3')
      var myChart = this.$echarts.init(this.$refs.bottom_right)
      var option
      option = {
        color: ['#76B8FE', '#B09BFE', '#EFA1C5', '#EFE7A1', '#EFBDA1', '#E5E5E5', '#e7bcf3', '#8378ea'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        toolbox: {
          show: true,
        },
        legend: {
          itemlength: 20,
          itemWidth: 15,
          orient: 'vertical',
          right: 0,
          align: 'left',
          top: 'middle',
          textStyle: {
            color: 'black',
          },
          height: 150,
        },
        series: [
          {
            label: {
              show: false,
            },
            name: '设备停机分布',
            type: 'pie',
            radius: [0, 75],
            center: ['40%', '50%'],
            data: [
              { value: 35, name: '3#' },
              { value: 20, name: '24#' },
              { value: 25, name: '19#' },
              { value: 25, name: '12#' },
              { value: 20, name: '智能工厂' },
              { value: 12, name: '其他' },
            ],
          },
        ],
      }
      option && myChart.setOption(option)
      window.addEventListener('resize', function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize()
      })
    },
    drawEchartsLine: function () {
      //var chartDom = document.getElementById('echarts3')
      var myChart = this.$echarts.init(this.$refs.middle_echart)
      var option
      option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      }
      option && myChart.setOption(option)
      window.addEventListener('resize', function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize()
      })
    },
  },
}
</script>

<style lang="scss">
.l_content {
  .top {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .top_left {
      margin-left: 20px;
    }
    .name {
      margin-bottom: 20px;
    }
  }
  .bottom {
    margin-top: 20px;
    .row {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
}
.r_content {
  .top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .sixblockitem {
      width: 32%;
      height: 50px;
      background-color: wheat;
      margin-bottom: 15px;
      display: flex;
      .imgIconWrap {
        width: 50px;
        height: 50px;
        background-color: coral;
        display: flex;
        justify-content: center;
        margin-right: 20px;
        align-items: center;
        i {
          font-size: 24px;
          color: white;
        }
      }
      .des_wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        .num {
          color: black;
        }
        .des {
          color: #666;
          margin-top: 5px;
        }
      }
    }
  }

  .middle {
    height: 200px;
  }
  .bottom {
    display: flex;
    height: 250px;
    margin-top: 20px;
    justify-content: space-between;
    .bottom_left {
      height: 100%;
      width: 49%;
    }
    .bottom_right {
      height: 100%;
      width: 49%;
    }
  }
}
</style>
