<script setup>
import PageLoader from '@/components/UI/PageLoader.vue'
import { ref, onMounted } from 'vue'
import { getBlogs } from '@/api/getBlogs'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const blogs = ref([])
const loader = ref(false)
const activeBlogIds = ref([])

const fetchBlogs = async () => {
  loader.value = true
  try {
    blogs.value = await getBlogs()
    blogs.value.reverse()
  } catch (err) {
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
  <section class="mt-5 mb-20">
    <div class="container">
      <PageLoader v-if="loader" />
      <div v-else>
        <div v-if="blogs.length" class="flex flex-col">
          <h1 class="font-bold text-5xl text-center my-6">{{ $t('blogs') }}</h1>
          <div
            v-for="blog in blogs"
            :key="blog.key"
            class="blog my-5 md:p-6 p-4 bg-white text-black rounded-3xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
            @click="toggleBlog(blog.key)"
            :class="{
              'max-h-[10000px]': isActive(blog.key),
              'md:max-h-[500px] max-h-[480px]': !isActive(blog.key),
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
              <span v-if="locale === 'en'">
                {{ blog.titleEn }}
              </span>
              <span v-if="locale === 'ru'">
                {{ blog.titleRu }}
              </span>
            </h2>
            <p class="text-lg pb-1">
              <span v-if="locale === 'en'">
                {{ blog.textEn }}
              </span>
              <span v-if="locale === 'ru'">
                {{ blog.textRu }}
              </span>
            </p>
          </div>
        </div>
        <div class="min-h-[100vh] h-full justify-start text-center" v-else>
          <p class="text-red m-auto mt-12">{{ $t('ups') }}</p>
          <div>
            <img src="/ups.gif" alt="cutty cat" class="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
