<template>
  <div class="contentList">
    <div @click="linkTo" v-for="item in dataList" :key="item.index" class="items flex-row">
      <div class="left flex-column">
        <div class="text">
          <p>{{ item.title }}</p>
          <div>{{ item.content }}</div>
        </div>
        <div class="infos"><i class="iconfont icon-dianzan1"></i></div>
      </div>
      <img :src="item.src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          index: 1,
          title: "第一篇文章该项目前端部分使用json-server模拟数据，需要使用终端启动mock该项目前端部分使用json-server模拟数据，需要使用终端启动mock",
          content: "内容该项目前端部分使用json-server模拟数据，需要使用终端启动mock该项目前端部分使用json-server模拟数据，需要使用终端启动mock该项目前端部分使用json-server模拟数据，需要使用终端启动mock该项目前端部分使用json-server模拟数据，需要使用终端启动mock",
          src: require("@/assets/img/2.png"),
          likeNum: 3,
          issueTime: '日期 + 时间'
        },
      ],
    };
  },
  methods: {
    linkTo (e) {
      console.log(e.target)
    }
  }
};
</script>

<style lang="scss" scoped>
.contentList {
  width: 100%;
  margin: 20px 0;
  .items {
    width: 100%;
    height: 100px;
    cursor: pointer;
    transition: all 1s ease-in-out;
    .left {
      flex: 1;
      height: 100%;
      .text,
      .infos {
        width: 500px;
      }
      .text {
        height: 100%;
        p {
          font-size: 18px;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        div {
          font-size: 14px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          // 多行文本打点
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.6;
          // white-space: nowrap;
        }
      }
      .infos {
        font-size: 13px;
        color: #666;
      }
    }
    img {
      width: 100px;
      height: 80px;
      border-radius: 4px;
    }
  }
  .items:hover {
    box-sizing: border-box;
    transform: scale(1.03, 1.03);
  }
}
</style>