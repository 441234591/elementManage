<template>
  <el-form :inline="inline" :model="form" class="demo-form-inline">
    <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
      <el-input :label="item.label" :value="form[item.model]" :placeholder="'请输入' + item.label" v-if="!item.type"></el-input>
      <el-select :value="form[item.model]" placeholder="地市" v-if="item.type == 'select'">
        <el-option v-for="it in item.opts" :label="it" :value="it" :key="it"></el-option>
      </el-select>
      <el-date-picker type="date" placeholder="选择日期" :value="form[item.model]" v-if="item.type == 'date'"></el-date-picker>
      <el-radio-group :value="form[item.model]" v-if="item.type == 'radio'">
        <el-radio :label="it" v-for="it in item.opts" :key="it"></el-radio>
      </el-radio-group>
      <el-checkbox-group :value="form[item.model]" v-if="item.type == 'checkbox'">
        <el-checkbox :label="it" :name="item.model" v-for="it in item.opts" :key="it"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formSubmit: this.form,
    }
  },
  props: {
    form: Object,
    formLabel: Array,
    inline: Boolean,
  },
  mounted() {
    console.log(this.form)
    console.log(this.formLabel)
  },
}
</script>

<style></style>
