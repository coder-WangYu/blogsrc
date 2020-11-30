<template>
  <div v-if="changeLogSign == false" id="sign">
    <el-button @click="logSignChange" type="info"
      >账 号 登 录</el-button
    >
    <div class="form">
      <div class="signForm">
        <el-input
          v-model="username"
          placeholder="请输入用户名："
        ></el-input>
        <el-input
          type="password"
          v-model="password"
          placeholder="请输入密码："
        ></el-input>
        <el-input
          type="text"
          v-model="phonenum"
          placeholder="请输入手机号码："
        ></el-input>
        <el-button @click="userSign(username, password, phonenum)">注 册</el-button>
      </div>
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
      phonenum: "",
    };
  },
  // 获取用于切换登录注册页面的标记
  computed: {
    ...mapState(["changeLogSign"]),
  },
  methods: {
    // 切换到登录页面
    logSignChange () {
      this.$store.commit('logSignChange')
    },
    // 检测用户信息并注册
    userSign(name, pwd, phonenum) {
      if(name.length < 6 || name.length > 16) {
        return this.$message.error({
          message: "用户名长度需要大于6小于16位！"
        })
      } 
      if (pwd.length < 8 || pwd.length > 16) {
        return this.$message.error({
          message: "密码长度需要大于8小于16位！"
        })
      } 
      if (/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(phonenum) == false) {
        return this.$message.error({
          message: "请输入正确的手机号码！"
        })
      }
      // 接口：用户注册
      api.userSign({
        params: {
          username: name,
          password: pwd,
          phone: phonenum,
        }
      }).then(res => {
        if(res.data == "fail") {
          return this.$message.error({
            message: "该用户名已被注册！"
          })
        } else {
          return this.$message({
            message: "注册成功！",
            type: "success"
          })
        }
      }).then(() => {
        // 回到登录页面
        this.$store.state.changeLogSign = true
      })
    },
  },
};
</script>

<style lang="scss" scoped>
#sign {
  width: 100%;
  height: 100%;
  background-color: rgb(235, 228, 143);
  .el-button {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 50px;
    font-size: 20px;
  }
  .signForm {
    width: 80%;
    height: 80%;
    position: absolute;
    top: calc(50% - 40%);
    right: calc(50% - 40%);
    .el-input {
      margin: 8px 0;
    }
    .el-button {
      width: 100%;
      right: 0px;
      top: 180px;
    }
  }
}
</style>