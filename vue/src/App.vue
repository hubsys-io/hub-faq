<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<style scoped>

</style>
