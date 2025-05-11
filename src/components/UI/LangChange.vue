<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const subMenu = ref(false)
function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <div class="relative max-w-20 cursor-pointer" @click="subMenu = !subMenu">
    <div class="flex items-center">
      <p v-if="locale === 'en'">
        {{ $t('header.english') }}
      </p>
      <p v-if="locale === 'ru'">{{ $t('header.russian') }}</p>
      <svg
        fill="currentColor"
        height="15px"
        width="15px"
        viewBox="0 0 330 330"
        class="ml-1 mt-0.5 w-full"
        :style="{ transform: subMenu ? 'rotate(180deg)' : 'rotate(0deg)' }"
      >
        <path
          id="XMLID_225_"
          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
        />
      </svg>
    </div>
    <div
      class="lang__sub absolute top-6 bg-black/60 flex flex-col justify-start rounded-md w-20 opacity-0 transition delay-75"
      :class="{ active: subMenu }"
      :style="{ opacity: subMenu ? '1' : '0' }"
    >
      <button @click="changeLanguage('en')" class="text-white p-1 hover">
        {{ $t('header.english') }}
      </button>
      <button @click="changeLanguage('ru')" class="text-white p-1 hover">
        {{ $t('header.russian') }}
      </button>
    </div>
  </div>
</template>
