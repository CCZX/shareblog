<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
        @select="handleSelect"
      >
        <el-menu-item index="1" route="/main/article">文章管理</el-menu-item>
        <el-menu-item index="2" route="/main/user">用户管理</el-menu-item>
        <el-menu-item index="3" route="/main/tag">标签管理</el-menu-item>
        <el-menu-item index="4" route="/main/category">分类管理</el-menu-item>
        <el-submenu index="5">
          <template slot="title">管理</template>
          <el-menu-item index="5-1" route="/main/grade">管理</el-menu-item>
          <el-menu-item index="5-2" route="/main/statistics">统计</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {}
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
