<template>
  <div id="expTall">
    <Header />
    <div class="wrapper" ref="wrap">
      <div class="left">
        <dl>
          <dt>日常篇</dt>
          <dd @click="changeContentItem">暂无1</dd>
          <dd @click="changeContentItem">暂无2</dd>
        </dl>
        <dl>
          <dt>心得篇</dt>
          <dd @click="changeContentItem">暂无3</dd>
          <dd @click="changeContentItem">暂无4</dd>
        </dl>
      </div>
      <div class="content">
        <div class="items">
          <test1 />
          <test2 />
          <test3 />
          <test4 />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Test1 from "../components/Exp/Test1";
import Test2 from "../components/Exp/Test2";
import Test3 from "../components/Exp/Test3";
import Test4 from "../components/Exp/Test4";

export default {
  components: {
    Header,
    Footer,
    Test1,
    Test2,
    Test3,
    Test4,
  },
  mounted() {
    // 初始化视口高度
    let height = this.getClientHeight();
    this.$refs.wrap.style.height = height + "px";
  },
  methods: {
    // 获取视口高度
    getClientHeight() {
      return document.documentElement.clientHeight;
    },
    // 切换展示的内容
    changeContentItem(e) {
      let content = e.target.innerHTML;
      if (content === "暂无1") {
        this.$store.commit("expItemChange", { status: 1 });
      } else if (content === "暂无2") {
        this.$store.commit("expItemChange", { status: 2 });
      } else if (content === "暂无3") {
        this.$store.commit("expItemChange", { status: 3 });
      } else if (content === "暂无4") {
        this.$store.commit("expItemChange", { status: 4 });
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss">
#expTall {
  width: 100%;
  .wrapper {
    width: 100%;
    height: 200px;
    .left {
      width: 20%;
      height: 100%;
      background: #146e14;
      color: #fff;
      font-size: 18px;
      dl {
        width: 80%;
        margin: 20px auto;
        dt {
          font-size: 20px;
          padding: 10px;
        }
        dd {
          width: 100%;
          text-align: center;
          margin: 10px 0;
          padding: 10px 0;
          cursor: pointer;
          border-radius: 4px;
        }
        dd:hover {
          background: #0b3d0b;
        }
      }
    }
    .content {
      display: inline-block;
      position: relative;
      width: 80%;
      height: 100%;
      .items {
        position: absolute;
        width: 96%;
        height: 94%;
        top: calc(50% - 47%);
        left: calc(50% - 48%);
      }
    }
  }
}
</style>