<template>
  <div v-if="changeLogSign == true" id="log">
    <el-button @click="logSignChange" type="info"
      >账 号 注 册</el-button
    >
    <div class="form">
      <div class="logForm">
        <el-input v-model="username" placeholder="请输入用户名："></el-input>
        <el-input
          v-model="password"
          placeholder="请输入密码："
          show-password
        ></el-input>
        <el-button @click="checkUser(username, password)">登 录</el-button>
        <span><a target="_blank" href="/alter">忘 记 密 码 ?</a></span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from '@/api/index';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    // 获取用于切换登录注册页面的标记
    ...mapState(['changeLogSign']),
  },
  methods: {
    // 检测用户信息并登陆
    checkUser(username, password) {
      if (username == "" || password == "") {
        return this.$message.error({ message: "用户名或密码不能为空！" });
      }
      // 接口：登录
      api.userLog({
        params: {
          u_name: username,
          u_pwd: password
        }
      }).then(res => {
        if (res.status == 200) {
          // 页面跳转
          this.$rooter.push({path: '/'})
          return this.$message({
            message: "登录成功！",
            type: "success",
          })
        } else if (res.data == "密码输入错误！") {
          return this.$message.error({
            message: "密码输入错误，请检查并重新输入！"
          })
        } else if (res.data == "用户名不存在！") {
          return this.$message.error({
            message: "用户名不存在，请检查并重新输入！"
          })
        } else {
          return 
        }
      })
    },
    // 切换到注册页面
    logSignChange () {
      this.$store.commit('logSignChange')
    }
  },
};
</script>

<style lang="scss">
.el-input__inner {
  background-color: #000;
  border: 2px solid #fff;
}
.el-input__inner:focus {
  border-color: rgb(216, 76, 76);
}
.el-button:focus,
.el-button:hover {
  color: #000;
  border-color: none;
}
</style>

<style lang="scss" scoped>
#log {
  width: 100%;
  height: 100%;
  background-color: rgb(90, 221, 188);
  .el-button {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 50px;
    font-size: 20px;
  }
  .logForm {
    width: 80%;
    height: 80%;
    position: absolute;
    top: calc(50% - 40%);
    right: calc(50% - 40%);
    .el-input {
      margin: 15px 0;
    }
    .el-button {
      width: 100%;
      top: 155px;
      right: 0px;
    }
    span {
      cursor: pointer;
      font-size: 14px;
      // font-weight: bold;
      display: block;
      position: absolute;
      right: 0px;
      bottom: 10px;
      a {
        color: #fff;
      }
    }
  }
}
</style>