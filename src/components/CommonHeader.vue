<template>
  <header>
    <div class="l_header">
      <el-button @click="asideClick()" type="primary" icon="el-icon-menu" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current" :to="current.path">{{ current.label }}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item v-for="tab in this.$store.state.Tab.menu" :to="tab.path" :key="tab.path">{{ tab.label }}</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="r_header">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"> <img :src="userImg" class="userImg" /> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: (state) => state.Tab.currentMenu,
    }),
  },
  data() {
    return {
      userImg: require('../assets/image/xiongmao.jpg'),
    }
  },
  methods: {
    ...mapMutations({
      changeAside: 'changeAside',
    }),
    asideClick: function () {
      this.changeAside()
    },
  },
  mounted: function () {
    console.log(this.$store.state.Tab.menu)
  },
}
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.r_header {
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l_header {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: white;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner a {
  color: white;
}
.el-breadcrumb__inner.is-link {
  color: #666;
}
</style>
