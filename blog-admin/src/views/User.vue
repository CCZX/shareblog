<template>
  <div>
    <el-table :data="dataList" border style="width: 100%">
      <el-table-column label="用户名" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.account }}</span>
        </template>
      </el-table-column>
      <el-table-column label="昵称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.nickname }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="tags" label="头像" width="180">
        <template slot-scope="scope">
          <img width="50" :src="scope.row.avatar" alt="" srcset="">
        </template>
      </el-table-column>
      <el-table-column prop="tags" label="邮箱" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.email | emailFilter }}</span>          
        </template>
      </el-table-column>
      <el-table-column prop="tags" label="状态" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.status | statusFilter }}</span>          
        </template>
      </el-table-column>
      <el-table-column prop="tags" label="黑名单" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deleted | deleteFilter }}</span>          
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
import {getAllUsers} from '@/api/user'
export default {
  data() {
    return {
      dataList: ''
    };
  },
  methods: {
    async getAllUsers() {
      let {data} = await getAllUsers()
      console.log(data)
      this.dataList = data.data
    },
    handle() {
      this.$message({
        message: "功能开发中！",
        type: "warning"
      });
    }
  },
  filters: {
    emailFilter(val) {
      return val == '' ? "暂无" : val
    },
    statusFilter(val) {
      return val == 'normal' ? "正常" : '异常'
    },
    deleteFilter(val) {
      return val == false ? "否" : '是'
    }
  },
  created() {
    this.getAllUsers()
  },
};
</script>
