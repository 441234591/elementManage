<template>
  <div>
    <el-dialog :title="digConfig.title" :visible.sync="isDialogShow">
      <CommonForm :formLabel="digConfig.dlg_labels" :form="digData"></CommonForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="dlgcomfirm">确 定</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" stripe border height="500" style="width: 100%" v-loading="pageConfig.isloading">
      <el-table-column fixed prop="index" label="序号" width="50">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ (pageConfig.page - 1) * pageConfig.pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableLabel"
        :sortable="item.sortable"
        :fixed="item.fixed"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :key="item.prop"
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page_Config.page"
      :page-sizes="[10, 50, 100, 200]"
      :page-size="page_Config.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page_Config.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import CommonForm from './CommonForm.vue'
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    pageConfig: Object,
    digConfig: Object,
    digData: Object,
  },
  data() {
    return {
      table_Data: this.tableData,
      page_Config: this.pageConfig,
      isDialogShow: false,
    }
  },
  methods: {
    dlgcomfirm: function () {
      this.$http.post('/index/addUser', this.digData).then((res) => {
        console.log(res)
        this.isDialogShow = false
        this.$message(res.data.msg)
      })
    },
    handleDelete: function (row) {
      console.log(row)
      this.isDialogShow = true
    },
    handleEdit: function (row) {
      console.log(row)
    },
    handleSizeChange: function (s) {
      console.log('pagesize:' + s)
      this.$emit('pageChange', { searchName: '', page: this.page_Config.page, pageSize: s })
    },
    handleCurrentChange: function (p) {
      console.log('page:', p)
      this.$emit('pageChange', { searchName: '', page: p, pageSize: this.page_Config.pageSize })
    },
  },
  mounted() {
    this.table_Data = this.tableData
  },
  components: { CommonForm },
}
</script>

<style>
.el-pagination {
  position: absolute;
  right: 20px;
}
</style>
