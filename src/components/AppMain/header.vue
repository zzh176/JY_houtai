<template>
  <div class="header">
    <div class="logo">
      <img src="../../../public/i.png" alt />
      <span class="company">积云会员管理系统</span>
    </div>
    <div class="info">
      <el-dropdown @command="handle">
        <span class="el-dropdown-link">
          {{ name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="checkOut">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: ""
    };
  },
  components: {},
  methods: {
    handle(command) {
      console.log(command);
      switch (command) {
        case "changePass":
          this.changePass();
          break;
        case "checkOut":
          this.checkOut();
          break;
      }
    },
    changePass() {
      console.log("修改密码");
    },
    checkOut() {
      console.log("退出登录");

      localStorage.removeItem("ht_token");

      localStorage.removeItem("ht_info");

      this.$router.push("/login");
      this.$message({
        message: "成功退出",
        center: true,
        background: "red"
      });
    }
  },
  created() {
    const info = JSON.parse(localStorage.getItem("ht_info"));
    this.name = info.name !== "undefined" ? info.name : "";
  }
};
</script>


<style lang="scss" scoped>
.header .logo {
  padding-left: 40px;
  float: left;
  span {
    color: white;
  }
}
.header .logo img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.header .logo .link {
  text-decoration: none;
  color: #fff;
}
.header .logo .company {
  margin-left: 10px;
}
.header .info {
  float: right;
  padding-right: 40px;
}
.header .el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
</style>