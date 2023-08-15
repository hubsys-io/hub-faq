<template>
  <Navbar />
  <FaqPage />

</template>

<script setup>
import store from "../store";
import { computed } from "vue";
import Navbar from "../components/Navbar.vue";
import FaqPage from "../components/FaqPage.vue";

const faqData = computed(() => store.getters.faqData);
const faqLoading = computed(() => store.getters.faqLoading);

store.dispatch("fetchFaq");
console.log(faqData);
</script>

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
