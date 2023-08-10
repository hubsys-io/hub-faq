<template>
  <div class="px-8">
  <div class="px-4">
    <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
        <p class="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
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

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Lorem ipsum dolor sit amet?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!!"
        },
        {
          question: "Consectetur adipisicing elit?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        },
        {
          question: "Neque eos, dignissimos provident reiciendis debitis?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        },
        {
          question: "Repudiandae commodi perferendis et itaque?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        },
        {
          question: "Similique fugiat cumque?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        },
        {
          question: "Impedit iusto vitae dolorum, nostrum fugit?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        },
        {
          question: "Bombana é gay?",
          answer: "Sim!"
        },
      ],
      itemsPerPage: 6,
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

