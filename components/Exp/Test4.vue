<template>
  <div class="test4" v-if="changeExpItem == 4">
    嘿嘿
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