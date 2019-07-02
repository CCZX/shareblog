<template>
  <div v-title :data-title="title">
    <el-container class="me-area">
      <el-main class="me-main">
        <el-steps class="me-log-box" :space="100" direction="vertical">
          <el-step
            title="步骤 1"
            status="finish"
            icon="el-icon-time"
            description="小组讨论，确定题目，分工开始写"
          ></el-step>
          <el-step title="步骤 2" status="finish" description="前端页面样式设计，并开始还原设计图" icon="el-icon-time"></el-step>
          <el-step title="步骤 3" status="finish" icon="el-icon-time" description="数据库设计"></el-step>
          <el-step title="步骤 4" status="finish" icon="el-icon-time" description="接口定义与设计"></el-step>
          <el-step title="步骤 5" status="finish" icon="el-icon-time" description="页面开发、接口开发"></el-step>
          <el-step title="步骤 6" status="finish" icon="el-icon-time" description="详细功能开发"></el-step>
          <el-step title="步骤 7" status="finish" icon="el-icon-time" description="接口对接"></el-step>
          <el-step title="步骤 8" status="process" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Log",
  data() {
    return {};
  },
  computed: {
    title() {
      return "日志";
    }
  }
};
</script>

<style scoped>
.el-container {
  width: 700px;
}

.me-main {
  overflow: hidden;
}

.me-log-box {
  margin-left: 10%;
  margin-top: 20px;
}
</style>
