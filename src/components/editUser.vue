<template>
  <div class="add-user">
    <alert :alert="alert" v-if="alert"></alert>
    <h3 class="page-title">编辑用户</h3>
    <div class="form-box">
      <form action @submit="addUser">
        <h5>用户信息</h5>
        <div class="form-group">
          <label for>姓名</label>
          <input type="text" placeholder="name" v-model="user.name" />
        </div>
        <div class="form-group">
          <label for>邮箱</label>
          <input type="email" placeholder="email" v-model="user.email" />
        </div>
        <div class="form-group">
          <label for>电话</label>
          <input type="text" placeholder="phone" v-model="user.phone" />
        </div>
        <div class="form-group">
          <label for>学历</label>
          <input type="text" placeholder="education" v-model="user.education" />
        </div>
        <div class="form-group">
          <label for>毕业学校</label>
          <input type="text" placeholder="school" v-model="user.school" />
        </div>
        <div class="form-group">
          <label for>职业</label>
          <input type="text" placeholder="profession" v-model="user.profession" />
        </div>
        <div class="form-group">
          <label for>个人简介</label>
          <textarea name id cols="30" rows="10" v-model="user.profile" placeholder="profile"></textarea>
        </div>
        <button type="submit" class="addBtn">确认修改</button>
      </form>
    </div>
  </div>
</template>
<script>
import Alert from "./alert";
export default {
  name: "addUser",
  data() {
    return {
      user: {},
      id: this.$route.params.id,
      alert: ""
    };
  },
  components: {
    Alert
  },
  created() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      this.$axios.get("http://localhost:3000/users/" + this.id).then(res => {
        //   console.log(res.data);
        this.user = res.data;
      });
    },
    addUser(e) {
      if (!this.user.name || !this.user.email || !this.user.phone) {
        this.alert = "请填写相关信息";
      } else {
        // let newUserArr = {
        //   name: this.user.name,
        //   email: this.user.email,
        //   phone: this.user.phone,
        //   education: this.user.education,
        //   school: this.user.school,
        //   profession: this.user.profession,
        //   profile: this.user.profile
        // };
        this.$axios
          .put("http://localhost:3000/users/" + this.id, this.user)
          .then(res => {
            // console.log(res);
            // 跳转到主页面，展示信息
            this.$router.push({
              path: "/",
              query: { alert: "用户信息修改成功！" }
            }); // query后面的值表示随路由传递参数，通过$route.query获取
          });
        e.preventDefault();
      }
      e.preventDefault(); // 阻止默认事件
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.add-user {
  padding: 20px;
}
.page-title {
  border-bottom: 1px solid #efefef;
  padding-bottom: 15px;
}
.form-box {
  background-color: #ccc;
  padding: 20px;
  border-radius: 6px;
}
.form-box h5 {
  margin-bottom: 8px;
}
.form-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
}
.form-group label {
  width: 18%;
}
.form-group input,
.form-group textarea {
  width: 82%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #999;
  outline: none; /*去除选中状态边框*/
}
.addBtn {
  padding: 10px 20px;
  background-color: #17abe3;
  border: 0;
  cursor: pointer;
  color: #fff;
  border-radius: 6px;
  margin-top: 20px;
}
</style>