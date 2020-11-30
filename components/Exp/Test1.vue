<template>
  <div class="test1" v-if="changeExpItem == 1">
    哈哈
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['changeExpItem'])
  },
}
</script>