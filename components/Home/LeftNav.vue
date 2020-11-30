<template>
  <div class="left">
    <ul class="flex-column">
      <router-link @click.native="homeItemsChange" tag="li" to="/home/tuijian"><i class="iconfont icon-tuijian"></i>&nbsp;为你推荐</router-link>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/hot"><i class="iconfont icon-remen"></i>&nbsp;近期热门</router-link>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/newest"><i class="iconfont icon-zuixin"></i>&nbsp;最新内容</router-link>
      <h5>生活专栏</h5>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/worknote"><i class="iconfont icon-34"></i>&nbsp;工作笔记</router-link>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/lifenote"><i class="iconfont icon-biji"></i>&nbsp;日常随笔</router-link>
      <h5>技术频道</h5>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/myhtml"><i class="iconfont icon-html1"></i>&nbsp;HTML专区</router-link>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/mycss"><i class="iconfont icon-css"></i>&nbsp;CSS专区</router-link>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/myjs"><i class="iconfont icon-js"></i>&nbsp;关于JavaScript</router-link>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/myexpress"><i class="iconfont icon-zuzhikuangjia"></i>&nbsp;前端框架</router-link>
      <router-link @click.native="homeItemsChange" tag="li" to="/home/mytools"><i class="iconfont icon-gongju"></i>&nbsp;常用的工具</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    homeItemsChange (e) {
      console.log(e.target)
      let value = e.target.innerHTML.split("/")[1].split(" ")[1]
      this.$store.commit('homeItemChange', {status: value})
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  height: 540px;
  width: 160px;
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 30px;
      padding: 0 10px;
      box-sizing: border-box;
      // text-align: center;
      line-height: 30px;
      .iconfont {
        font-size: 22px;
      }
      .icon-tuijian {
        color: yellow;
      }
      .icon-remen {
        color: red;
      }
      .icon-zuixin {
        color: green;
      }
      .icon-34 {
        color: purple;
      }
      .icon-biji {
        color: blue;
      }
      .icon-html1 {
        color: orangered;
      }
      .icon-css {
        color: royalblue;
      }
      .icon-js {
        color: rgb(248, 205, 12);
      }
      .icon-zuzhikuangjia {
        color: green;
      }
      .icon-gongju {
        color: lightcoral;
      }
    }
    li:hover {
      background: #f4fffb;
      border-radius: 4px;
      color: #000;
      cursor: pointer;
      box-shadow: #009a61 1px 1px 5px;
    }
    h5 {
      position: relative;
      color: #000;
      font-weight: normal;
    }
    h5::after {
      content: "";
      position: absolute;
      border-bottom: 1px solid #999;
      width: 100px;
      left: 60px;
      top: 7px;
    }
  }
}
</style>