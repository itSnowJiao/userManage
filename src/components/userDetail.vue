<template>
  <div class="user-detail">
    <router-link to="/" class="back">返回</router-link>
    <h3>{{user.name}}</h3>
    <div class="detail-box">
      <p>
        电话：
        <span>{{user.phone}}</span>
      </p>
      <p>
        邮箱：
        <span>{{user.email}}</span>
      </p>
      <p>
        学历：
        <span>{{user.education}}</span>
      </p>
      <p>
        毕业学校：
        <span>{{user.school}}</span>
      </p>
      <p>
        职业：
        <span>{{user.profession}}</span>
      </p>
      <p>
        简介：
        <span>{{user.profile}}</span>
      </p>
      <div class="btn">
        <button @click="deleteUser(user.id)" class="delete">删除</button>
        <router-link :to="'/edit/' + user.id">编辑</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "userDetail",
  data() {
    return {
      user: {},
      id: this.$route.params.id
    };
  },
  created() {
    this.getUsersData(this.$route.params.id);
  },
  methods: {
    getUsersData(id) {
      this.$axios.get("http://localhost:3000/users/" + id).then(res => {
        // console.log(res.data);
        this.user = res.data;
      });
    },
    deleteUser(id) {
      this.$axios.delete("http://localhost:3000/users/" + id).then(res => {
        this.$router.push({
          path: "/",
          query: { alert: "用户信息删除成功" }
        }); // query后面的值表示随路由传递参数，通过$route.query获取
      });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.user-detail {
  padding: 20px;
}
.detail-box {
  background-color: #ccc;
  padding: 20px;
  margin-top: 20px;
  border-radius: 6px;
}
.detail-box p {
  margin: 10px 0;
  color: #888;
}
.detail-box span {
  margin: 10px 0;
  color: #444;
}
.detail-box .btn button,
.detail-box .btn a {
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
.detail-box .btn .delete {
  background-color: red;
}
.detail-box .btn a {
  background-color: #17abe3;
  text-decoration: none;
}
.user-detail .back {
  background-color: #17abe3;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
  display: inline-block;
}
</style>