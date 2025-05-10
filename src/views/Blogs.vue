<script setup>
import PageLoader from '@/components/UI/PageLoader.vue'
import { ref, onMounted } from 'vue'
import { getBlogs } from '@/getBlogs'

const blogs = ref([])
const isError = ref(false)
const loader = ref(false)
const activeBlogIds = ref([])

const fetchBlogs = async () => {
  loader.value = true
  try {
    blogs.value = await getBlogs()
    blogs.value.reverse()
  } catch (err) {
    isError.value = true
    console.error('Ошибка при загрузке блогов:', err)
  } finally {
    loader.value = false
  }
}

onMounted(fetchBlogs)

const toggleBlog = (key) => {
  if (activeBlogIds.value.includes(key)) {
    activeBlogIds.value = activeBlogIds.value.filter((id) => id !== key)
  } else {
    activeBlogIds.value.push(key)
  }
}

const isActive = (key) => activeBlogIds.value.includes(key)
</script>

<template>
  <section>
    <div class="container">
      <PageLoader v-if="loader" />
      <div v-else>
        <div v-if="blogs.length" class="flex flex-col">
          <h1 class="font-bold text-5xl text-center my-6">Blogs</h1>
          <div
            v-for="blog in blogs"
            :key="blog.key"
            class="blog my-5 p-6 bg-white text-black rounded-3xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
            @click="toggleBlog(blog.key)"
            :class="{
              'max-h-[2000px]': isActive(blog.key),
              'md:max-h-[500px] max-h-[490px]': !isActive(blog.key),
            }"
          >
            <img
              :src="blog.img"
              alt="Blog image"
              class="w-full h-100 object-cover rounded-2xl shadow-2xl"
            />
            <h2
              class="font-bold md:text-2xl text-lg my-5 md:whitespace-normal overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {{ blog.titleEn }}
            </h2>
            <p>{{ blog.textEn }}</p>
          </div>
        </div>
        <div class="min-h-[100vh] h-full justify-start text-center" v-else>
          <p class="text-red m-auto mt-12">Упс... Обновите страницу</p>
          <div>
            <img src="/ups.gif" alt="cutty cat" class="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
