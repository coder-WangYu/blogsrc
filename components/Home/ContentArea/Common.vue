<template>
  <div class="contentItems">
    <p>{{ changeHomeItem }}</p>
    <hr />
    <ContentList />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContentList from './ContentList'

export default {
  components: {
    ContentList,
  },
  computed: {
    ...mapState(['changeHomeItem'])
  },
}
</script>

<style lang="scss" scoped>
.contentItems {
  width: 100%;
  margin: 10px 0;
  p {
    position: relative;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>