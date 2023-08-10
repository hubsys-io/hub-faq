<template>
  <div class="p-8">
    <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
      <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
      <p class="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
      <div class="space-y-12 px-2 xl:px-16 mt-12">
        <div v-for="(faq, index) in paginatedFaqs" :key="index" class="mt-4 flex">
          <div>
            <div class="flex items-center h-16 border-l-4 border-japanese-laurel-800">
              <span class="text-4xl text-japanese-laurel-800 px-4">Q.</span>
            </div>
            <div class="flex items-center h-16 border-l-4 border-gray-400">
              <span class="text-4xl text-gray-400 px-4">A.</span>
            </div>
          </div>
          <div>
            <div class="flex items-center h-16">
              <span class="text-lg text-japanese-laurel-800 font-bold">{{ faq.question }}</span>
            </div>
            <div class="flex items-center py-2">
              <span class="text-gray-500">{{ faq.answer }}</span>
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

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Bombana é gay?",
          answer: "Sim!"
        },
        {
          question: "Bombana é gay?",
          answer: "Sim!"
        },
        {
          question: "Bombana é gay?",
          answer: "Sim!"
        },
        {
          question: "Bombana é gay?",
          answer: "Sim!"
        },
      ],
      itemsPerPage: 3,
      currentPage: 1
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.faqs.length / this.itemsPerPage);
    },
    paginatedFaqs() {
      const startIdx = (this.currentPage - 1) * this.itemsPerPage;
      const endIdx = startIdx + this.itemsPerPage;
      return this.faqs.slice(startIdx, endIdx);
    }
  },
}
</script>

