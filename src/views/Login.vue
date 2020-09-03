<!--  -->
<template>
  <div class="login">
    <div class="form">
      <h2>积云会员管理系统</h2>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="password('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApi from "../api/test";
export default {
  components: {},
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "3-6密码", trigger: "blur" }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    password(from) {
      this.$refs[from].validate(valid => {
        console.log(valid);
        if (valid) {
            //调用登录接口
          loginApi.login(this.form.name, this.form.pass)
            .then(res => {
                //在接口里获取code的值200
              const code = res.data.data.code;
              if (code == 200) {
                  //获取token
                const token = res.data.data.data.token;
                //把获取的token存储在本地
                localStorage.setItem("ht_token", token);
                //获取用户信息
                loginApi.getUserInfo().then(res => {
                    //获取用户信息code值200  resp.code
                  const resp = res.data.data;
                //   console.log(resp)
                  if (resp.code == 200) {
                      //把获取到的用户信息保存到本地
                    localStorage.setItem("ht_info", JSON.stringify(resp.data));
                    //  在push到主页面   跳转到主页面
                    this.$router.push("/layout");
                  } else {
                    this.$message({
                      message: "登录失败",
                      type: "warning"
                    });
                  }
                });
              } else {
                this.$message({
                  message: "登录失败",
                  type: "warning"
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
* {
  margin: 0;
  padding: 0;
}
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(https://wimg.588ku.com/gif620/20/02/03/1100f791e3bfc483063fc1b1889520fb.gif);
  background-size: 100% 100%;
}
.form {
  padding: 30px;
  width: 30%;
  height: 33%;
  position: absolute;
  left: 35%;
  top: 30%;
  background: rgba(255, 255, 255, 0.4);
  //   border: 1px solid #000;
  h3 {
    text-align: center;
    padding-bottom: 15px;
  }
}
// https://wimg.588ku.com/gif620/20/02/03/1100f791e3bfc483063fc1b1889520fb.gif
</style>