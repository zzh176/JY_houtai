<!--  -->
<template>
  <div class="box">
    <div class="head">
      <el-breadcrumb class="centen" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="m">
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="create_time" label="日期" width="180"></el-table-column>
        <el-table-column prop="city" label="地址"></el-table-column>
        <el-table-column prop="admin" label="权限"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import guan from "../../../api/guan";
export default {
  components: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    hello() {
      guan.getGuanList()
        .then(res => {
            console.log(res)
          this.list = res.data.data;
          console.log(this.list)
        })
        .catch(error => {
          console.log(error);
        });
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
.head {
  width: 100%;
  height: 50px;
  background: #808080;
  .centen {
    padding-left: 28px;
    line-height: 50px;
  }
}
</style>