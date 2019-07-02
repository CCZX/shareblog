<template>
  <div>
    <el-table :data="articleList" border style="width: 100%">
      <el-table-column label="作者" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.author.nickname }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column label="发表时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="summary" label="描述"></el-table-column>
      <el-table-column prop="commentCounts" label="评论数" width="180"></el-table-column>
      <el-table-column prop="viewCounts" label="阅读数" width="180"></el-table-column>
      <el-table-column prop="tags" label="标签" width="180">
        <template slot-scope="scope">
          <el-tag style="margin:3px" size="medium" v-for="(item, index) in scope.row.tags" :key="index">
            {{ item.tagname }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handle(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handle(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getArticles } from "./../api/article";
export default {
  data() {
    return {
      articleList: []
    };
  },
  methods: {
    async getArticles() {
      let { data } = await getArticles();
      console.log(data);
      this.articleList = data.data;
    },
    handle(a,b) {
      this.$message({
        message: "功能开发中！",
        type: "warning"
      });
      console.log(a,b)
    }
  },
  created() {
    this.getArticles();
  }
};
</script>
<style scoped>
</style>
