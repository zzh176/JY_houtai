<!--  -->
<template>
  <div class="box">
    <div class="head">
      <el-breadcrumb class="centen" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>食品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="m">
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="name" label="食品名称" width="180"></el-table-column>
        <el-table-column prop="name" label="食品介绍" width="180"></el-table-column>
        <el-table-column prop="rating" label="评分"></el-table-column>
        <el-table-column prop="address" label="操作">
          <el-row>
            <el-button>编辑</el-button>
            <el-button type="danger">删除</el-button>
          </el-row>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import shi from "../../../api/shi"
export default {
  components: {},
  data() {
    return {
        list:[],
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
      hello() {
      shi.getShiList()
        .then(res => {
            console.log(res)
          this.list = res.data;
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