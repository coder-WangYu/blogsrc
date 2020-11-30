<template>
  <div id="logSign" ref="logSign">
    <Log />
    <Sign />
  </div>
</template>

<script>
import Log from "../components/LogSign/Log";
import Sign from "../components/LogSign/Sign";

export default {
  components: {
    Log,
    Sign,
  },
  data() {
    return {
      fullHeight: "",
    };
  },
  // 将页面高度设置为初始视口高度
  mounted() {
    this.fullHeight = this.getClientHeight();
    this.setClientHeight();
    // 获取视口尺寸变化后的视口高度
    window.onresize = () => {
      this.fullHeight = document.documentElement.clientHeight;
    };
  },
  watch: {
    // 动态修改页面高度
    fullHeight: function () {
      this.setClientHeight();
    },
  },
  methods: {
    // 获取视口高度
    getClientHeight() {
      return document.documentElement.clientHeight;
    },
    // 设置页面高度
    setClientHeight() {
      this.$refs.logSign.style.height = this.fullHeight + "px";
    },
  },
};
</script>