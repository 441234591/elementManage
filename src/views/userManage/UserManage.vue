<template>
  <div>
    <div class="user_top">
      <el-button type="primary">新增</el-button>
      <common-form :inline="true" :formLabel="formLabel" :form="formData">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <common-table
      :digData="digData"
      :digConfig="digConfig"
      :pageConfig="pageConfig"
      :tableData="tableData"
      :tableLabel="tableLabel"
      @pageChange="pageChange"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
export default {
  components: { CommonForm, CommonTable },
  data() {
    return {
      formLabel: [
        {
          type: 'select',
          model: 'selectCity',
          label: '选择地市',
          opts: ['长沙', '株洲', '湘潭'],
        },
        {
          model: 'searchStr',
          label: '用户名',
        },
      ],
      formData: {
        selectCity: '',
        searchStr: '123456',
      },
      tableLabel: [
        { prop: 'name', label: '姓名', fixed: true, width: 100 },
        { prop: 'birthdate', label: '出生日期', width: 100 },
        { prop: 'sex', label: '性别', width: 50 },
        { prop: 'age', label: '年龄', sortable: true, width: 80 },
        { prop: 'love', label: '爱好', sortable: true, width: 180 },
        { prop: 'school', label: '学校', width: 180 },
        { prop: 'degree', label: '学历', width: 180 },
        { prop: 'isworking', label: '是否在职', width: 180 },
        { prop: 'organization', label: '工作单位', width: 180 },
        { prop: 'province', label: '区县', width: 100 },
        { prop: 'addr', label: '地址', width: 100 },
      ],
      digConfig: {
        title: '新增',
        dlg_labels: [
          // {
          //   type: 'select',
          //   model: 'selectCity',
          //   label: '选择地市',
          //   opts: ['长沙', '株洲', '湘潭'],
          // },
          {
            model: 'name',
            label: '姓名',
          },
          {
            model: 'birthdate',
            label: '出生日期',
            type: 'date',
          },
          {
            model: 'sex',
            label: '性别',
            type: 'radio',
            opts: ['男', '女'],
          },
          {
            model: 'age',
            label: '年龄',
          },
          {
            model: 'love',
            label: '爱好',
            type: 'checkbox',
            opts: ['篮球', '足球', '排球', '乒乓球', '游泳'],
          },
          {
            model: 'school',
            label: '学校',
          },
          {
            model: 'degree',
            label: '学历',
          },
          {
            model: 'isworking',
            label: '是否在职',
            type: 'radio',
            opts: ['是', '否'],
          },
          {
            model: 'organization',
            label: '工作单位',
          },
          {
            model: 'province',
            label: '区县',
          },
          {
            model: 'addr',
            label: '地址',
          },
        ],
      },
      digData: {
        birthdate: '2022-01-25',
        name: '',
        sex: '',
        age: 20,
        love: [],
        school: '',
        degree: '',
        isworking: '',
        organization: '',
        province: '',
        addr: '',
      },
      tableData: [],
      pageConfig: {
        page: 1,
        pageSize: 20,
        total: 100,
        isloading: true,
      },
    }
  },
  methods: {
    pageChange: function (params) {
      console.log(params)
      //console.log(searchName, page, pageSize)
      this.pageConfig.isloading = true
      if (params) {
        console.log(params)
        this.pageConfig.page = params.page
        this.pageConfig.pageSize = params.pageSize
      }
      this.$http
        .get('cockpit/index/getUserList', {
          searchName: params.searchName,
          page: this.pageConfig.page,
          pageSize: this.pageConfig.pageSize,
        })
        .then((res) => {
          console.log(res)
          this.pageConfig.isloading = false
          this.tableData = res.data.map((item) => {
            item.sex = item.sex == 0 ? '男' : '女'
            item.isworking = item.isworking == 0 ? '在职' : '求职中'
            return item
          })
        })
    },
  },
  mounted() {
    this.pageChange('', 1, this.pageConfig.pageSize)
  },
}
</script>

<style lang="scss">
.user_top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
