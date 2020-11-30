<template>
  <div id="proList">
    <div id="pro" class="clearfix">
      <ul>
        <li v-for="item in proArr" :key="item.key">
          <div class="wrapper">
            <p>{{ item.name }}</p>
            <div class="desc">
              {{ item.desc }}
            </div>
            <div class="msg">
              <span>浏览量：({{ item.watch }})</span>
              <span>评论量：({{ item.comment }})</span>
              <span>收藏量：({{ item.collect }})</span>
            </div>
          </div>
          <span
            >源码地址：<a :href="item.address" target="_blank">{{
              item.address
            }}</a></span
          >
          <div class="btns">
            <el-button @click="addComment" type="primary">添加评论</el-button>
            <el-button @click="alterCollect" type="warning">收藏作品</el-button>
            <a :href="item.proAdr" target="_blank"
              ><el-button @click="alterWatch(item.proAdr, item.watch)" type="danger">查看作品</el-button></a
            >
          </div>
        </li>
      </ul>
      <div class="hotProject">
        <dl>
          <dt>热门项目排行</dt>
          <dd class="clearfix" v-for="item in mostWatch" :key="item.key">
            <a :href="item.proAdr" target="_blank">
              <span class="left">{{ item.name }}</span>
              <span class="right">{{ item.watch }}</span>
            </a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";

export default {
  data() {
    return {
      flag: false,
      proAdr: "",
      proArr: [],
      mostWatch: [],
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    // 获取作品列表，并生成作品排行榜
    getProject() {
      api.getProject().then((res) => {
        res.data.data.forEach((element) => {
          let proObj = JSON.parse(element);
          let watchObj = {
            key: proObj._id,
            name: proObj.name,
            watch: proObj.watch,
            proAdr: proObj.proAdr,
          };
          this.mostWatch.push(watchObj);
          this.proArr.push(proObj);
        });
      });
    },
    // 添加评论内容并修改评论量
    addComment() {},
    // 收藏作品并修改收藏量
    alterCollect() {},
    // 修改作品浏览量
    alterWatch(proAdr, watch) {
      api.alterWatch({
        params: {
          proAdr: proAdr,
          watch: watch,
        }
      }).then(() => {
        // 更新作品排行榜
        this.getProject()
        location.reload()
      })
    },
  },
};
</script>

<style lang="scss" scoped>
#proList {
  width: 100%;
  #pro {
    width: 80%;
    margin: 0 auto;
    ul {
      width: 60%;
      float: left;
      margin: 30px 10px;
      li {
        span {
          a:hover {
            color: rgb(20, 110, 20);
          }
        }
        float: left;
        width: 100%;
        color: #666;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 5px 0;
        padding: 20px;
        div.wrapper {
          width: 100%;
          p {
            color: rgb(20, 110, 20);
            margin-bottom: 10px;
            font-size: 18px;
          }
          div.desc {
            width: 100%;
            margin-bottom: 20px;
            line-height: 20px;
          }
          div.msg {
            font-size: 14px;
            margin-bottom: 20px;
            span {
              display: inline-block;
              margin-right: 10px;
            }
          }
        }
        div.btns {
          width: 100%;
          margin-top: 10px;
          a {
            color: #fff;
            margin-left: 10px;
          }
        }
      }
    }
    .hotProject {
      padding: 20px;
      color: #fff;
      position: fixed;
      right: 10%;
      width: 24%;
      height: 380px;
      background-color: rgb(44, 41, 41);
      border-radius: 4px;
      margin: 35px 0;
      margin-bottom: 0px;
      dt {
        font-size: 18px;
        font-weight: bold;
      }
      dd {
        width: 80%;
        margin: 20px auto;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        a {
          color: rgb(230, 230, 230);
        }
      }
      dd:hover {
        transform: scale(1.2);
        a {
          color: rgb(20, 110, 20);
        }
      }
    }
  }
}
</style>