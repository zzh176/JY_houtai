<!--  -->
<template>
  <div class="layout">
    <Header />
    <Nav />
    <Main />
  </div>
</template>

<script>
import Header from "@/components/AppMain/header";
import Nav from "@/components/AppMain/nav";
import Main from "@/components/AppMain/main";
export default {
  components: {
    Header,
    Nav,
    Main,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.header {
  width: 100%;
  height: 50px;
  background-color: #2d3a4b;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 50px;
}
.nav {
  width: 20%;
  position: absolute;
  top: 50px;
  bottom: 0;
  // background: red;
  left: 0;
}
.main {
  width: 80%;
  position: absolute;
  right: 0;
  top: 50px;
  bottom: 0;
  // background: chartreuse;
  // border: 1px solid #000;
}
</style>