<!--  -->
<template>
  <div class="index">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="line">供应商管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sou">
      <el-input class="inp1 inp" v-model="input" placeholder="供应商名称"></el-input>
      <el-input class="inp2 inp" v-model="input" placeholder="联系人"></el-input>
      <el-input class="inp3 inp" v-model="input" placeholder="联系电话"></el-input>
      <el-row>
        <el-button class="botton" type="primary">查询</el-button>
        <el-button class="botton" type="primary">新增</el-button>
        <el-button class="botton">重置</el-button>
      </el-row>
    </div>
    <div class="footer">
      <el-table :data="list" height="250" border style="width: 100%">
        <el-table-column prop="id" label="序号" width="180"></el-table-column>
        <el-table-column prop="name" label="供应商名称" width="180"></el-table-column>
        <el-table-column prop="linkman" label="联系人" width="180"></el-table-column>
        <el-table-column prop="mobile" label="联系电话"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column prop="address" label="操作">
          <el-row>
            <el-button>编辑</el-button>
            <el-button type="danger" @click="rem">删除</el-button>
          </el-row>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Supplier from "../../api/supplier";

export default {
  components: {},
  data() {
    return {
      list: [],
      input:"",
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    hello() {
      Supplier
        .getSupplierList()
        .then(res => {
          console.log(res);
          this.list = res.data.data.rows;
          console.log(this.list);
        })
        .catch(error => {
          console.log(error);
        });
    },
    rem(){
      this.list.slice(-1); 
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
.index {
  padding: 10px;
}
.el-breadcrumb {
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.line {
  border-left: 3px solid #31c17b;
  padding-left: 10px;
}
.sou {
  display: flex;
  .inp1 {
    width: 16%;
  }
  .inp2 {
    width: 14%;
  }
  .inp3 {
    width: 14%;
  }
  .inp {
    padding: 10px 8px;
  }
  .botton {
    margin-top: 10px;
  }
}
</style>