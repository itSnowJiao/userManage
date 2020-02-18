<template>
  <div class="alert" v-if="hidden">
    <p>{{alert}}</p>
    <span @click="closeAlert">&times;</span>
  </div>
</template>
<script>
export default {
  name: "alert",
  data() {
      return {
          hidden: true
      }
  },
  props: {
      alert: ""
  },
  methods: {
      closeAlert() {
          this.hidden = !this.hidden;
      }
  }
};
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.alert {
  background-color: aquamarine;
  padding: 10px 0 10px 6px;
  color: #999;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  border-radius: 6px;
}
.alert p{
  width: 95%;
}
.alert span {
    width: 5%;
    cursor: pointer;
}
</style>