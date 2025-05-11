<script setup>
import { getProjects } from '@/api/getProjects'
import { ref, onMounted } from 'vue'
import PageLoader from '@/components/UI/PageLoader.vue'

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
  <section v-else class="my-8">
    <div v-if="projects.length" class="container">
      <h1 class="font-bold text-4xl text-center my-5">Protfolio - my projects</h1>
      <div class="flex flex-wrap justify-evenly items-center gap-5">
        <div
          v-for="project in projects"
          :key="project.id"
          class="p-2 bg-white text-black flex gap-2.5 rounded-lg"
        >
          <div class="w-80">
            <img :src="project.img" :alt="project.title" class="w-full object-cover h-40" />
          </div>
          <div class="w-full">
            <h2 class="secont-font font-bold">{{ project.title }}</h2>
            <p>{{ project.aboutEn }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-[100vh] h-full justify-start text-center" v-else>
      <p class="text-red m-auto mt-12">Упс... Обновите страницу</p>
      <div>
        <img src="/ups.gif" alt="cutty cat" class="mx-auto" />
      </div>
    </div>
  </section>
</template>
