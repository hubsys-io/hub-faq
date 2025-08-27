<template>
  <section class="flex flex-col min-h-screen bg-zinc-100 dark:bg-dark">
    <header
      class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 shadow-sm"
    >
      <h4 class="text-2xl font-bold text-gray-800 tracking-widest uppercase">FAQ</h4>
      <div class="flex-1 flex justify-center md:justify-end">
        <div class="relative w-full max-w-xs">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Pesquisar perguntas..."
            class="w-full p-2 pl-8 pr-8 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Pesquisar perguntas"
          />
          <svg class="absolute left-2 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"/>
          </svg>
          <button
            v-if="searchTerm"
            @click="searchTerm = ''"
            type="button"
            class="absolute right-2 top-2.5 h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer"
            aria-label="Limpar pesquisa"
          >
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <div class="flex-1 flex flex-col items-center px-4 py-8">
      <div class="w-full max-w-5xl">
        <div v-if="loading" class="flex justify-center items-center mt-12">
          <div
            class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current text-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...
            </span>
          </div>
        </div>

        <div v-else>
          <div v-if="filteredFaqs.length === 0" class="text-center text-gray-400 py-16 text-lg">
            Nenhuma pergunta encontrada.
          </div>
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
            <div
              v-for="(faq, index) in paginatedFaqs"
              :key="index"
              class="bg-white rounded-xl border border-gray-200 shadow-md p-0 flex flex-col transition hover:scale-[1.02] hover:shadow-lg"
            >
              <button
                @click="toggleOpen(index)"
                class="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                :aria-expanded="isOpen(index)"
                :aria-controls="'faq-answer-' + index"
              >
                <h4 class="text-lg font-semibold text-gray-700 mb-0">{{ faq.question }}</h4>
                <svg
                  :class="['transition-transform duration-200 ml-2', isOpen(index) ? 'rotate-180' : 'rotate-0']"
                  width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div
                v-if="isOpen(index)"
                :id="'faq-answer-' + index"
                class="px-6 pb-4 text-gray-600 text-sm"
              >
                {{ faq.answer }}
              </div>
              <div
                v-else
                class="px-6 pb-4 text-gray-600 text-sm"
              >
                <span>
                  {{ getPreview(faq.answer) }}
                  <template v-if="faq.answer.length > previewLength">
                    ... <button class="text-primary underline text-xs ml-1" @click="toggleOpen(index)">mais</button>
                  </template>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="totalPages > 1" class="flex justify-center mt-2 mb-6">
      <nav>
        <ul class="flex list-style-none gap-1">
          <li>
            <button
              class="px-3 py-1 rounded-full border text-sm font-medium transition border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              @click="currentPage = Math.max(currentPage - 1, 1)"
              :disabled="currentPage === 1"
              aria-label="Anterior"
            >
              Anterior
            </button>
          </li>
          <li v-for="page in totalPages" :key="page">
            <button
              class="px-3 py-1 rounded-full text-sm font-medium transition border focus:outline-none focus:ring-2"
              :class="page === currentPage
                ? 'bg-primary text-white border-primary shadow'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'"
              @click="currentPage = page"
              :aria-pressed="page === currentPage"
            >
              {{ page }}
            </button>
          </li>
          <li>
            <button
              class="px-3 py-1 rounded-full border text-sm font-medium transition border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              @click="currentPage = Math.min(currentPage + 1, totalPages)"
              :disabled="currentPage === totalPages"
              aria-label="Próxima"
            >
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const faqData = computed(() => store.getters.faqData);
const loading = ref(true);

const itemsPerPage = 8;
const currentPage = ref(1);
const searchTerm = ref('');

const openIndexes = ref(new Set());
const previewLength = 120;

function toggleOpen(idx) {
  if (openIndexes.value.has(idx)) {
    openIndexes.value.delete(idx);
  } else {
    openIndexes.value.add(idx);
  }
  openIndexes.value = new Set(openIndexes.value);
}
function isOpen(idx) {
  return openIndexes.value.has(idx);
}
function getPreview(text) {
  if (!text) return '';
  return text.length > previewLength ? text.slice(0, previewLength) : text;
}

const filteredFaqs = computed(() => {
  if (!searchTerm.value) return faqData.value;
  const term = searchTerm.value.toLowerCase();
  return faqData.value.filter(
    faq =>
      faq.question.toLowerCase().includes(term) ||
      faq.answer.toLowerCase().includes(term)
  );
});

const totalPages = computed(() => Math.ceil(filteredFaqs.value.length / itemsPerPage));

const paginatedFaqs = computed(() => {
  const startIdx = (currentPage.value - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  return filteredFaqs.value.slice(startIdx, endIdx);
});

onMounted(async () => {
  await store.dispatch("fetchFaq");
  loading.value = false;
});
</script>

<style scoped>
</style>
