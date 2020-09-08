<!--  -->
<template>
  <div class="box">
    <div class="head">
      <el-breadcrumb class="centen" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>商家列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="m">
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="name" label="店铺名称" width="180"></el-table-column>
        <el-table-column prop="address" size="medium" label="店铺地址" width="180"></el-table-column>
        <el-table-column prop="category" label="店铺介绍"></el-table-column>
        <el-table-column prop="admin" label="操作" >
          <el-row>
            <el-button size="mini" class="inp">编辑</el-button>
            <el-button size="mini" class="inp">添加食品</el-button>
            <el-button size="mini" class="inp" type="danger">删除</el-button>
          </el-row>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import shang from "../../../api/shang";

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
      shang
        .getShangList()
        .then(res => {
          console.log(res);
          this.list = res.data;
          console.log(this.list);
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
// .m{

//     .inp{
//         width: 20px;
//         font-size: 12px;
//         text-align: center;
//     }
// }
</style>