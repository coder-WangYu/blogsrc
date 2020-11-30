<template>
  <div class="test2" v-if="changeExpItem == 2">
    呵呵
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