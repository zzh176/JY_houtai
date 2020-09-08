<!--  -->
<template>
  <div class="nav">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/member">
        <i class="el-icon-s-custom"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-suitcase"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/staff">
        <i class="el-icon-user"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
      <el-submenu index="/user">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/yong">用户列表</el-menu-item>
          <el-menu-item index="/shang">商家列表</el-menu-item>
          <el-menu-item index="/shi">食品列表</el-menu-item>
          <el-menu-item index="ding">订单列表</el-menu-item>
          <el-menu-item index="guan">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.nav {
  background-color: rgb(84, 92, 100);
}
.el-menu {
  border-right: 0;
}
</style>