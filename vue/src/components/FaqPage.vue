<template>
  <div class="px-8">
    <div class="px-4">

      <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
        <p class="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>

        <div v-if="loading" class="flex justify-center items-center mt-12">
          <div
            class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current text-japanese-laurel-800 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...
            </span>
          </div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">

          <div v-for="(faq, index) in paginatedFaqs" :key="index">
            <div class="flex space-x-8 mt-8">
              <div>
                <h4 class="text-xl font-bold text-gray-700">{{ faq.question }}</h4>
                <p class="text-gray-600 my-2">{{ faq.answer }}</p>
                <!-- <a href="#" class="text-japanese-laurel-800 hover:text-japanese-laurel-900 hover:underline capitalize" title="Read More">Read More</a> -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="flex justify-center mt-4 mb-4">
      <nav>
        <ul class="flex list-style-none">
          <li class="page-item">
            <a :class="['page-link', 'relative', 'block', 'py-1.5', 'px-3', 'rounded', 'border-0', 'bg-transparent', 'outline-none', 'transition-all', 'duration-300', 'text-gray-800', 'hover:text-white', 'hover:bg-japanese-laurel-800', 'focus:shadow-none', { 'pointer-events-none': currentPage === 1 }]"
              href="#" @click="currentPage = Math.max(currentPage - 1, 1)" :disabled="currentPage === 1">
              Previous
            </a>
          </li>
          <li v-for="page in totalPages" :key="page">

            <a :class="['page-link', 'relative', 'block', 'py-1.5', 'px-3', 'rounded', 'mx-1', 'border-0', 'outline-none', 'transition-all', 'duration-300', 'focus:shadow-none', { 'bg-japanese-laurel-800': page === currentPage, 'text-white': page === currentPage, 'hover:bg-japanese-laurel-800': page !== currentPage, 'hover:text-white': page !== currentPage }]"
              href="#" @click="currentPage = page">
              {{ page }}
            </a>

          </li>
          <li class="page-item">
            <a :class="['page-link', 'relative', 'block', 'py-1.5', 'px-3', 'rounded', 'border-0', 'bg-transparent', 'outline-none', 'transition-all', 'duration-300', 'text-gray-800', 'hover:text-white', 'hover:bg-japanese-laurel-800', 'focus:shadow-none', { 'pointer-events-none': currentPage === totalPages }]"
              href="#" @click="currentPage = Math.min(currentPage + 1, totalPages)"
              :disabled="currentPage === totalPages">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const faqData = computed(() => store.getters.faqData);
const faqLoading = computed(() => store.getters.faqLoading);
const loading = ref(true);

const itemsPerPage = 6;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(faqData.value.length / itemsPerPage));

const paginatedFaqs = computed(() => {
  const startIdx = (currentPage.value - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  return faqData.value.slice(startIdx, endIdx);
});

onMounted(async () => {
  await store.dispatch("fetchFaq");
  loading.value = false;
});
</script>
