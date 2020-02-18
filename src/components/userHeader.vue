<template>
  <div class="navBox">
    <div class="leftNav">
      <h4>用户管理系统</h4>
      <router-link to="/" exact>主页</router-link>
      <router-link to="/aboutUs" exact>关于我们</router-link>
    </div>
    <div class="rightNav">
      <router-link to="/addUser" exact>添加用户</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "userHeader",
  data() {
    return {
    };
  },
  methods: {
    addUser() {
      // 跳转到添加用户的界面
      // this.pStyle = 'pActive';
      this.$router.push({ path: "/addUser" });
    }
  }
};
</script>
<style scoped>
.navBox {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  padding: 10px 0;
  font-size: 14px;
}
.leftNav {
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
}
.leftNav h4 {
  margin-right: 20px;
}
.rightNav {
  width: 20%;
  text-align: right;
  padding: 0 20px;
}
.rightNav p {
  color: #666;
  cursor: pointer;
}
a {
  text-decoration: none;
  margin: 0 10px;
  color: #666;
}
.router-link-active {
  color: #fff;
}
</style>