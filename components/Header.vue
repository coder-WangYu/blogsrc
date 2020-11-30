<template>
  <div class="header">
    <ul class="nav flex-row">
      <a href="/">WangYu · Blogs | 王宇 · 个人博客</a>
      <router-link tag="li" to="/">网站首页</router-link>
      <router-link tag="li" to="/tec">技术文章</router-link>
      <router-link tag="li" to="/pro">成果展示</router-link>
      <router-link tag="li" to="/exp">经验之谈</router-link>
      <router-link tag="li" to="/log">登录 / 注册</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: rgb(248, 248, 248);
  border-top: 5px solid #009A61;
  box-shadow: #999 1px 1px 5px;
  .nav {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    a {
      font-size: 22px;
      color:  #009A61;
      line-height: 60px;
    }
    li {
      width: 90px;
      height: 40px;
      cursor: pointer;
      line-height: 40px;
      color: #333;
      font-size: 15px;
      text-align: center;
    }
    li:hover {
      border: 1px solid rgb(248, 248, 248);
      background: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      box-shadow: #333 1px 1px 5px;
    }
    li:last-child {
      background-color: #009A61;
      border: none;
      border-radius: 4px;
      color: #fff;
    }
  }
}
</style>