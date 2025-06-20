<script setup>
import { getProjects } from '@/api/getProjects'
import { ref, onMounted } from 'vue'
import PageLoader from '@/components/UI/PageLoader.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const projects = ref([])
const loader = ref(false)

const fetchProjects = async () => {
  loader.value = true
  try {
    projects.value = await getProjects()
  } catch (err) {
    isError.value = true
    console.error('Ошибка при загрузке блогов:', err)
  } finally {
    loader.value = false
  }
}

onMounted(fetchProjects)
</script>

<template>
  <PageLoader v-if="loader" />
  <section v-else class="mt-5 mb-20">
    <div v-if="projects.length" class="container">
      <h1 class="font-bold text-4xl text-center my-6">{{ $t('portfolio') }}</h1>
      <div class="flex flex-wrap justify-evenly items-center gap-5">
        <div
          v-for="project in projects"
          :key="project.id"
          class="p-3 bg-white text-black flex gap-2.5 rounded-lg md:flex-row flex-col"
        >
          <div class="md:w-80 w-full">
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full object-cover md:h-40 h-80 object-0"
            />
          </div>
          <div class="w-full">
            <h2 class="secont-font font-bold text-2xl">{{ project.title }}</h2>
            <p class="text-lg">
              <span v-if="locale === 'en'">
                {{ project.aboutEn }}
              </span>
              <span v-if="locale === 'ru'">
                {{ project.aboutRu }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-[100vh] h-full justify-start text-center" v-else>
      <p class="text-red m-auto mt-12">{{ $t('home.ups') }}</p>
      <div>
        <img src="/ups.gif" alt="cutty cat" class="mx-auto" />
      </div>
    </div>
  </section>
</template>
<style>
img {
  object-fit: cover;
  object-position: start;
}
</style>
