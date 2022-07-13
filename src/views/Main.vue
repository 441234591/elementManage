<template>
  <el-container style="height: 100%">
    <el-aside width="200px"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header>
        <common-hearder></common-hearder>
      </el-header>
      <common-tab></common-tab>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>
<script>
import CommonHearder from '../components/CommonHeader'
import CommonAside from '../components/CommonAside.vue'
import CommonTab from '../components/CommonTab.vue'
export default {
  components: {
    CommonHearder,
    CommonAside,
    CommonTab,
  },
}
</script>

<style lang="scss">
.el-header {
  background-color: #000;
}
</style>
