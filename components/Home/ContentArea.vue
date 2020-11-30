<template>
  <div class="content">
    <LoopImgs />
    
      <router-view></router-view>
  
  </div>
</template>

<script>
import LoopImgs from "./ContentArea/LoopImgs";

export default {
  components: {
    LoopImgs,
  },
};
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  height: 600px;
  margin: 0 20px;
  font-size: 14px;
  color: #000;
}
</style>