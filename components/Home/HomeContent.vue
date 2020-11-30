<template>
  <div class="homeContent">
    <LeftNav />
    <ContentArea />
    <div class="right">3</div>
  </div>
</template>

<script>
import LeftNav from "./LeftNav";
import ContentArea from './ContentArea';

export default {
  components: {
    LeftNav,
    ContentArea,
  },
};
</script>

<style lang="scss" scoped>
.homeContent {
  font-size: 14px;
  color: #666;
  width: 90%;
  margin: 30px auto;
  display: flex;
  .right {
    width: 300px;
    background: yellow;
  }
}
</style>