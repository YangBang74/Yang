<script setup>
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'
import LangChange from './UI/LangChange.vue'

const menuIsActive = ref(false)

watch(menuIsActive, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : 'auto'
})

const closeMenu = () => {
  menuIsActive.value = false
}
</script>

<template>
  <header class="left-0 w-full mx-auto z-100 fixed background-base border-b header-b-color">
    <div class="container mx-auto">
      <div class="flex justify-between items-center base-font py-2.5 hover-link">
        <div class="text-2xl font-medium">
          <router-link to="/"><span class="color-brand">&lt/&gt;</span>Yan</router-link>
        </div>
        <nav class="menu flex md:relative md:gap-10" :class="{ active: menuIsActive }">
          <router-link to="/" @click="closeMenu()">Home</router-link>
          <router-link to="/blogs" @click="closeMenu()">Blogs</router-link>
          <router-link to="/portfolio" @click="closeMenu()">Portfolio</router-link>
        </nav>
        <div class="flex items-center gap-4">
          <nav class="flex items-center gap-4">
            <a
              href="https://t.me/itisyang"
              target="_blank"
              class="lg:flex hidden items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="20"
                height="20"
                class="color-brand"
              >
                <path
                  d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
                  fill="currentColor"
                />
              </svg>
              Telegram
            </a>
            <a
              href="https://github.com/yangbang74"
              target="_blank"
              class="lg:flex hidden items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="color-brand"
              >
                <path
                  d="M8.99998 0.872253C7.02121 0.872335 5.10703 1.57651 3.59995 2.85879C2.09287 4.14107 1.09123 5.91777 0.77426 7.87099C0.457287 9.82421 0.845664 11.8265 1.8699 13.5195C2.89413 15.2126 4.48739 16.486 6.36458 17.1118C6.78125 17.1848 6.9375 16.9348 6.9375 16.716C6.9375 16.5181 6.92707 15.8618 6.92707 15.1639C4.83332 15.5493 4.29165 14.6535 4.12498 14.1848C3.94005 13.7289 3.64688 13.3249 3.27082 13.0077C2.97915 12.8514 2.56248 12.466 3.26039 12.4556C3.52688 12.4845 3.78247 12.5773 4.00551 12.7259C4.22854 12.8746 4.41245 13.0749 4.54165 13.3097C4.65562 13.5145 4.80888 13.6947 4.99264 13.8402C5.1764 13.9856 5.38704 14.0933 5.61251 14.1572C5.83797 14.221 6.07382 14.2398 6.30655 14.2123C6.53927 14.1849 6.76429 14.1118 6.96872 13.9972C7.00479 13.5736 7.1936 13.1775 7.49998 12.8827C5.64582 12.6744 3.70832 11.9556 3.70832 8.76811C3.6966 7.9399 4.00222 7.13859 4.56248 6.52853C4.30772 5.80871 4.33753 5.01877 4.64582 4.3202C4.64582 4.3202 5.34371 4.10144 6.93748 5.17436C8.30105 4.79934 9.74057 4.79934 11.1041 5.17436C12.6979 4.09103 13.3958 4.3202 13.3958 4.3202C13.7041 5.01876 13.734 5.80872 13.4791 6.52853C14.0411 7.13755 14.347 7.93956 14.3333 8.76811C14.3333 11.966 12.3854 12.6744 10.5312 12.8827C10.7301 13.0843 10.8833 13.3263 10.9803 13.5923C11.0774 13.8583 11.1161 14.1421 11.0937 14.4244C11.0937 15.539 11.0833 16.4348 11.0833 16.716C11.0833 16.9348 11.2396 17.1952 11.6562 17.1119C13.5301 16.4809 15.1188 15.2046 16.1387 13.5106C17.1585 11.8167 17.5432 9.81544 17.224 7.86412C16.9049 5.91279 15.9026 4.1384 14.3962 2.85768C12.8898 1.57696 10.9772 0.873283 8.99998 0.872253Z"
                  fill="currentColor"
                />
              </svg>
              GitHub
            </a>
          </nav>
          <LangChange class="relative" />
          <button
            class="burger md:hidden hamburger--emphatic"
            @click="menuIsActive = !menuIsActive"
            :class="{ active: menuIsActive }"
          >
            <div class="burger-box">
              <div class="burger-inner"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.burger {
  padding: 0.3125rem 0;
  display: none;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  background-color: transparent;
  overflow: visible;
  z-index: 100;
}
.burger:hover {
  opacity: 0.7;
}
.burger.active:hover {
  opacity: 0.7;
}
.burger.active .burger-inner,
.burger.active .burger-inner::before,
.burger.active .burger-inner::after {
  background-color: #000000;
}

.burger-box {
  width: 2.5rem;
  height: 1.5rem;
  position: relative;
}

.burger-inner {
  display: block;
  top: 50%;
  margin-top: -0.125rem;
}
.burger-inner,
.burger-inner::before,
.burger-inner::after {
  width: 1.875rem;
  height: 0.25rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.burger-inner::before,
.burger-inner::after {
  content: '';
  display: block;
}
.burger-inner::before {
  top: -0.625rem;
}
.burger-inner::after {
  bottom: -0.625rem;
}

.hamburger--emphatic {
  overflow: hidden;
}
.hamburger--emphatic .burger-inner {
  transition: background-color 0.125s 0.175s ease-in;
}
.hamburger--emphatic .burger-inner::before {
  left: 0;
  transition:
    transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s 0.125s linear,
    left 0.125s 0.175s ease-in;
}
.hamburger--emphatic .burger-inner::after {
  top: 0.625rem;
  right: 0;
  transition:
    transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s 0.125s linear,
    right 0.125s 0.175s ease-in;
}
.hamburger--emphatic.active .burger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}
.hamburger--emphatic.active .burger-inner::before {
  left: -5rem;
  top: -5rem;
  transform: translate3d(5rem, 5rem, 0) rotate(45deg);
  transition:
    left 0.125s ease-out,
    top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hamburger--emphatic.active .burger-inner::after {
  right: -5rem;
  top: -5rem;
  transform: translate3d(-5rem, 5rem, 0) rotate(-45deg);
  transition:
    right 0.125s ease-out,
    top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@media (max-width: 48rem) {
  .burger {
    display: block;
  }
  .menu {
    position: absolute;
    padding: 32px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: rgba(255, 255, 255, 0.95);
    width: 80%;
    right: -1000%;
    height: 1000vh;
    font-weight: 500;
    top: 0;
    color: black;
    transition: 0.4s;
    z-index: 50;
  }
  .menu.active {
    right: 0;
  }
}
</style>
