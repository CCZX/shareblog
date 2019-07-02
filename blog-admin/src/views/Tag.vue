<template>
  <div class="tag-page">
    <el-row>
      <el-col :span="18">
        <el-row :gutter="6">
          <el-col :span="8">
            <el-input clearable placeholder="请输入搜索内容" prefix-icon="el-icon-search"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button>搜索标签</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-table :data="tagList" style="width: 100%">
      <el-table-column label="标签名" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.tagname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图标" width="300">
        <template slot-scope="scope">
          <img width="30" :src="scope.row.avatar" alt="" srcset="">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[2,100, 200, 300, 400]"
        :page-size="page_size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page_total"
      ></el-pagination>
    </div>-->
  </div>
</template>
<script>
import { getAllTags } from "@/api/tag";
export default {
  data() {
    return {
      tagList: []
    };
  },
  methods: {
    async getAllTags() {
      let { data } = await getAllTags();
      this.tagList = data.data;
    },
    handleEdit() {
      this.$message({
        message: "功能开发中！",
        type: "warning"
      });
    },
    handleDelete() {
      this.$message({
        message: "功能开发中！",
        type: "warning"
      });
    }
  },
  created() {
    this.getAllTags();
  }
};
</script>

<style scoped>
.tag-page {
  width: 80%;
  margin: 0 auto;
}
</style>

