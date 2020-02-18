<template>
  <div class="users">
    <alert v-if="alert" :alert="alert"></alert>
    <h3 class="page-title">用户管理系统</h3>
    <input type="text" placeholder="输入搜索内容" v-model="search" />
    <div class="users-table">
      <table>
        <thead>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="user in filterUser" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.email}}</td>
            <td>
              <router-link :to="'/user/' + user.id">详情</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Alert from "./alert";
export default {
  name: "users",
  data() {
    return {
      users: [],
      alert: "",
      search: ""
    };
  },
  components: {
    Alert
  },
  created() {
    // 获取添加用户页面传递过来的参数
    if (this.$route.query.alert) {
      // console.log(this.$route.query.alert)
      this.alert = this.$route.query.alert;
    }
    this.getUsersData();
  },
  updated() {
    this.getUsersData();
  },
  methods: {
    getUsersData() {
      this.$axios.get("http://localhost:3000/users").then(res => {
        // console.log(res.data);
        this.users = res.data;
      });
    }
  },
  computed: {
    filterUser() {
      return this.users.filter(user => {
        return user.name.match(this.search);
      })
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.users {
  padding: 20px;
}
.users input {
  width: 70%;
  padding: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
  color: #666;
}
.users-table table {
  width: 100%;
  border: 1px solid #ccc;
}
.users-table table thead {
  background-color: #ccc;
  line-height: 30px;
}
.users-table table th {
  width: 25%;
  text-align: center;
  color: #666;
  font-size: 14px;
}
.users-table table tbody tr {
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  color: #666;
}
.users-table table tbody tr:nth-child(2n) {
  background-color: antiquewhite;
}
.page-title {
  border-bottom: 1px solid #efefef;
  padding-bottom: 15px;
}
.users-table a {
  padding: 5px 8px;
  background-color: #ccc;
  border-radius: 4px;
  font-size: 10px;
  color: #fff;
  text-decoration: none;
}
.users-table a:hover {
  background-color: #17abe3;
}
</style>