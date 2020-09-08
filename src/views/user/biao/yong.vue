<!--  -->
<template>
  <div class="box">
    <div class="header">
      <el-breadcrumb class="mbx" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <el-table :data="list" style="width: 100%;">
        <el-table-column type="index" label="#" width="180"></el-table-column>
        <el-table-column prop="registe_time" label="注册日期" width="180"></el-table-column>
        <el-table-column prop="username" label="注册姓名" width="180"></el-table-column>
        <el-table-column prop="city" label="注册地址"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      @current-change="handleCurrentPage"
      :page-size="pageSize"
      :current-page="currentPage"
      background
      layout="total, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import UserApi from "../../../api/user";
export default {
  components: {},
  data() {
    return {
      list: [],
      pageSize: 10,
      currentPage: 1,
      offset: 0,
      total: 0
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    hello() {
      UserApi.getUserList(this.offset, this.pageSize)
        .then(res => {
          console.log(res)
          this.list = res.data;
        })
        .catch(error => {
          console.log(error);
        });
      UserApi.getCount().then(res => {
        console.log(res.data.count);
        this.total = res.data.count;
      });
    },
    handleCurrentPage(data) {
      console.log(data);
      this.offset = (data - 1) * this.pageSize;
      this.hello();
    }
  },
  created() {
    this.hello();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;

  .header {
    width: 100%;
    height: 50px;
    background: #808080;

    .mbx {
      padding-left: 28px;
      line-height: 50px;
    }
  }
}
</style>