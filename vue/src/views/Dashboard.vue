<template>
  <Navbar />
  <FaqPage />

</template>

<script>
import Navbar from '../components/Navbar.vue'
import FaqPage from '../components/FaqPage.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    FaqPage
  },
}
</script>

<style scoped>
</style>
