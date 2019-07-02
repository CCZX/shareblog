<template>
  <div>
    <el-table :data="categoryList" style="width: 100%">
      <el-table-column label="标签名" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.categoryname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图标" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt srcset>
        </template>
      </el-table-column>
      <el-table-column label="描述" width="300">
        <template slot-scope="scope">
          <span>{{scope.row.description}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllCategorys } from "@/api/category";
export default {
  data() {
    return {
      categoryList: []
    };
  },
  methods: {
    async getCategoryList() {
      let { data } = await getAllCategorys();
      this.categoryList = data.data;
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
    this.getCategoryList();
  }
};
</script>
