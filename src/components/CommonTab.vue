<template>
  <div class="tabs_wrap">
    <el-tag
      :key="tag.label"
      v-for="tag in tags"
      :closable="tag.label != '首页'"
      :effect="tag.path === $route.path ? 'dark' : 'light'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="tabClick(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      tags: (state) => state.Tab.tabList,
    }),
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      close: 'closeTab',
    }),
    handleClose(tag) {
      this.close(tag)
    },
    tabClick(tag) {
      this.$router.push({ path: tag.path })
      this.$store.commit('selectMenu', tag)
    },
  },
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang="scss">
.tabs_wrap {
  padding: 20px;
}
.el-tag {
  margin-right: 20px;
}
</style>
