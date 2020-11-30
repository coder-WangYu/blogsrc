<template>
  <div class="test3" v-if="changeExpItem == 3">
    嘻嘻
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