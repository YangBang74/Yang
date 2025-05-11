<script setup></script>

<template>
  <section class="py-10">
    <div class="container">
      <h1 class="text-center color-brand-2 md:text-7xl text-5xl secont-font">
        {{ $t('home.hero-title') }}
      </h1>
      <div class="flex justify-center">
        <div
          class="flex gap-x-6 gap-y-8 justify-center items-center py-12 lg:flex-nowrap ld:flex-nowrap flex-wrap"
        >
          <div
            class="shadow-[ -4px_-4px_2px_0_#12f7d6 ] min-w-[300px] border-2 border-white rounded-[20%_0_20%_0] h-[475px] p-[24px]"
          >
            <div class="bio__items flex flex-col content-between">
              <div class="bio__profile flex flex-col items-center text-center gap-2">
                <div class="bio__profile-image rounded-full">
                  <img
                    src="/Profile photo.png"
                    alt="Profile photo"
                    class="rounded-full h-26 w-26"
                  />
                </div>
                <div class="bio__profile-name">
                  <p class="text-3xl text-medium ibm">{{ $t('home.bio-name') }}</p>
                  <p class="text-[14x]">{{ $t('home.bio-prof') }}</p>
                </div>
              </div>
              <div class="bio__info flex flex-col gap-3 py-4 text-[14px] pl-2">
                <div class="flex gap-2 items-center">
                  <svg
                    class="color-brand"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583361 3.48988C0.583267 3.49564 0.583257 3.50139 0.583333 3.50715V10.5C0.583333 11.4638 1.3695 12.25 2.33333 12.25H11.6667C12.6305 12.25 13.4167 11.4638 13.4167 10.5V3.50721C13.4167 3.50141 13.4167 3.4956 13.4166 3.4898C13.4111 2.53063 12.6271 1.75 11.6667 1.75H2.33333C1.37287 1.75 0.588839 2.53067 0.583361 3.48988ZM1.81217 3.2398C1.90864 3.04904 2.10702 2.91667 2.33333 2.91667H11.6667C11.893 2.91667 12.0914 3.04904 12.1878 3.2398L7 6.87128L1.81217 3.2398ZM12.25 4.62038V10.5C12.25 10.8195 11.9862 11.0833 11.6667 11.0833H2.33333C2.01383 11.0833 1.75 10.8195 1.75 10.5V4.62038L6.66548 8.06122C6.86633 8.20182 7.13367 8.20182 7.33452 8.06122L12.25 4.62038Z"
                      fill="currentColor"
                    />
                  </svg>
                  <a href="mailto:yangproger@gmail.com">yangproger@gmail.com</a>
                </div>
                <div class="flex gap-2 items-center">
                  <svg
                    class="color-brand"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99999 3.5C4.71133 3.5 3.66666 4.54467 3.66666 5.83333C3.66666 7.122 4.71133 8.16667 5.99999 8.16667C7.28865 8.16667 8.33332 7.122 8.33332 5.83333C8.33332 4.54467 7.28865 3.5 5.99999 3.5ZM4.83332 5.83333C4.83332 5.189 5.35566 4.66667 5.99999 4.66667C6.64432 4.66667 7.16666 5.189 7.16666 5.83333C7.16666 6.47767 6.64432 7 5.99999 7C5.35566 7 4.83332 6.47767 4.83332 5.83333Z"
                      fill="#12F7D6"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.6761 13.9018C5.67627 13.9019 5.67641 13.902 5.99999 13.4167L5.6761 13.9018C5.87204 14.0324 6.12762 14.0327 6.32356 13.902L5.99999 13.4167C6.32356 13.902 6.3234 13.9021 6.32356 13.902L6.32555 13.9007L6.32944 13.8981L6.3428 13.8891C6.35416 13.8813 6.37036 13.8703 6.39108 13.8559C6.43251 13.8272 6.49205 13.7854 6.56711 13.7312C6.71717 13.6228 6.92961 13.4646 7.18368 13.2623C7.69088 12.8584 8.36868 12.275 9.04846 11.5574C10.3842 10.1475 11.8333 8.10947 11.8333 5.83333C11.8333 4.28624 11.2187 2.80251 10.1248 1.70854C9.03082 0.614581 7.54709 0 5.99999 0C4.45289 0 2.96916 0.614581 1.8752 1.70854C0.781238 2.80251 0.166656 4.28624 0.166656 5.83333C0.166656 8.10947 1.61581 10.1475 2.95152 11.5574C3.6313 12.275 4.3091 12.8584 4.8163 13.2623C5.07037 13.4646 5.28281 13.6228 5.43287 13.7312C5.50793 13.7854 5.56747 13.8272 5.6089 13.8559C5.62962 13.8703 5.64582 13.8813 5.65718 13.8891L5.67054 13.8981L5.67443 13.9007L5.6761 13.9018ZM2.70016 2.5335C3.57533 1.65833 4.76231 1.16667 5.99999 1.16667C7.23767 1.16667 8.42465 1.65833 9.29982 2.5335C10.175 3.40867 10.6667 4.59566 10.6667 5.83333C10.6667 7.64053 9.49081 9.39415 8.20152 10.7551C7.5688 11.4229 6.9341 11.9697 6.45693 12.3497C6.27934 12.4911 6.12423 12.6089 5.99999 12.7007C5.87575 12.6089 5.72064 12.4911 5.54305 12.3497C5.06588 11.9697 4.43118 11.4229 3.79846 10.7551C2.50917 9.39415 1.33332 7.64053 1.33332 5.83333C1.33332 4.59566 1.82499 3.40867 2.70016 2.5335Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>{{ $t('home.bio-con') }}</span>
                </div>
                <div class="flex gap-2 items-center">
                  <svg
                    class="color-brand"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.83334 1.16669C5.36921 1.16669 4.9241 1.35106 4.59591 1.67925C4.26772 2.00744 4.08334 2.45256 4.08334 2.91669V3.50002H2.33334C1.36685 3.50002 0.583344 4.28352 0.583344 5.25002V11.0834C0.583344 12.0499 1.36685 12.8334 2.33334 12.8334H11.6667C12.6332 12.8334 13.4167 12.0499 13.4167 11.0834V5.25002C13.4167 4.28352 12.6332 3.50002 11.6667 3.50002H9.91668V2.91669C9.91668 2.45256 9.7323 2.00744 9.40411 1.67925C9.07593 1.35106 8.63081 1.16669 8.16668 1.16669H5.83334ZM8.75001 3.50002V2.91669C8.75001 2.76198 8.68855 2.6136 8.57916 2.50421C8.46976 2.39481 8.32139 2.33335 8.16668 2.33335H5.83334C5.67863 2.33335 5.53026 2.39481 5.42086 2.50421C5.31147 2.6136 5.25001 2.76198 5.25001 2.91669V3.50002H8.75001ZM5.25001 4.66669H8.75001V11.6667H5.25001V4.66669ZM4.08334 4.66669H2.33334C2.01118 4.66669 1.75001 4.92785 1.75001 5.25002V11.0834C1.75001 11.4055 2.01118 11.6667 2.33334 11.6667H4.08334V4.66669ZM9.91668 11.6667V4.66669H11.6667C11.9888 4.66669 12.25 4.92785 12.25 5.25002V11.0834C12.25 11.4055 11.9888 11.6667 11.6667 11.6667H9.91668Z"
                      fill="#12F7D6"
                    />
                  </svg>
                  <span>{{ $t('home.bio-job') }}</span>
                </div>
                <div class="flex gap-2 items-center">
                  <svg
                    class="color-brand"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.91417 0.622203C8.99648 0.614228 8.11237 0.967009 7.45226 1.60456L7.44624 1.61047L6.4429 2.60797C6.21443 2.83511 6.21336 3.20445 6.4405 3.43292C6.66764 3.66139 7.03698 3.66247 7.26545 3.43533L8.26563 2.44096C8.7054 2.01767 9.29357 1.78352 9.90403 1.78883C10.5158 1.79414 11.1011 2.03954 11.5337 2.47215C11.9663 2.90477 12.2117 3.49 12.217 4.1018C12.2223 4.71199 11.9884 5.29992 11.5654 5.73962L9.8192 7.48583C9.58265 7.72247 9.29791 7.90553 8.98442 8.02247C8.67093 8.13941 8.33596 8.18757 8.00223 8.16367C7.66849 8.13976 7.3438 8.04437 7.05018 7.88395C6.75656 7.72353 6.50087 7.50184 6.30046 7.23391C6.10749 6.97593 5.74192 6.92323 5.48394 7.1162C5.22596 7.30917 5.17326 7.67474 5.36623 7.93272C5.66685 8.33461 6.05038 8.66715 6.49082 8.90778C6.93125 9.14841 7.41829 9.2915 7.91889 9.32735C8.41949 9.3632 8.92194 9.29097 9.39217 9.11556C9.8624 8.94016 10.2894 8.66567 10.6442 8.31072L12.3942 6.56079L12.4013 6.55356C13.0388 5.89345 13.3916 5.00935 13.3836 4.09166C13.3756 3.17397 13.0076 2.29613 12.3586 1.6472C11.7097 0.998268 10.8319 0.630177 9.91417 0.622203Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.08111 4.6726C5.58051 4.63675 5.07805 4.70898 4.60782 4.88439C4.13762 5.05979 3.71064 5.33425 3.35584 5.68916L1.60584 7.43916L1.59873 7.44639C0.96118 8.1065 0.608399 8.99061 0.616374 9.9083C0.624348 10.826 0.99244 11.7038 1.64137 12.3528C2.2903 13.0017 3.16814 13.3698 4.08583 13.3778C5.00352 13.3857 5.88763 13.0329 6.54773 12.3954L6.55496 12.3883L7.55246 11.3908C7.78027 11.163 7.78027 10.7936 7.55246 10.5658C7.32466 10.338 6.95531 10.338 6.72751 10.5658L5.73378 11.5596C5.29408 11.9825 4.70616 12.2164 4.09597 12.2111C3.48417 12.2058 2.89894 11.9604 2.46633 11.5278C2.03371 11.0952 1.78831 10.51 1.783 9.89816C1.77769 9.28796 2.01164 8.70004 2.43458 8.26034L4.1808 6.51412C4.41734 6.27749 4.70209 6.09442 5.01558 5.97748C5.32906 5.86054 5.66403 5.81239 5.99777 5.83629C6.3315 5.86019 6.65619 5.95559 6.94981 6.11601C7.24344 6.27643 7.49913 6.49812 7.69954 6.76605C7.89251 7.02403 8.25808 7.07673 8.51606 6.88376C8.77403 6.69078 8.82673 6.32522 8.63376 6.06724C8.33315 5.66535 7.94961 5.33281 7.50918 5.09218C7.06874 4.85155 6.58171 4.70846 6.08111 4.6726Z"
                      fill="currentColor"
                    />
                  </svg>
                  <a href="https://t.me/itisyang">{{ $t('home.bio-write') }}</a>
                </div>
                <div class="flex gap-2">
                  <span class="py-[1px] px-2 bg-[#12F7D6] text-[#292F36] text-[14px] rounded-lg"
                    >HTML</span
                  >
                  <span class="py-[1px] px-2 bg-[#12F7D6] text-[#292F36] text-[14px] rounded-lg"
                    >CSS</span
                  >
                  <span class="py-[1px] px-2 bg-[#12F7D6] text-[#292F36] text-[14px] rounded-lg"
                    >JS</span
                  >
                  <span class="py-[1px] px-2 bg-[#12F7D6] text-[#292F36] text-[14px] rounded-lg"
                    >VUE</span
                  >
                </div>
              </div>
              <button
                class="bio__button bg-white text-black rounded-3xl py-4 px-8 mt-auto hover:bg-black hover:text-white transition"
              >
                <a href="/Yan.pdf" download class="text-xl secont-font flex gap-3 justify-center"
                  >{{ $t('home.bio-cv') }}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289C17.3166 8.90237 16.6834 8.90237 16.2929 9.29289L13 12.5858V3Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V15C2 14.4477 2.44772 14 3 14Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
          <div
            class="flex justify-center md:justify-between md:flex-nowrap flex-wrap gap-x-6 gap-y-8"
          >
            <div class="hero__title md:w-[80%] w-full">
              <p class="color-brand-2">&lth1&gt;</p>
              <h1
                class="px-8 lg:text-4xl text-3xl secont-font text-medium"
                v-html="$t('home.hero-hey')"
              ></h1>
              <p class="color-brand-2">&ltp&gt;</p>
              <p class="pl-8 text-base">
                {{ $t('home.hero-text') }}
              </p>
              <p class="color-brand-2">&lt/p&gt;</p>
              <a
                href="https://t.me/itisyang"
                target="_blank"
                class="color-brand pl-8 text-[32px] text-medium flex gap-3 items-center"
                >{{ $t('home.hero-talk') }}
                <svg
                  class="color-brand p-2 bg-[#43454D] rounded-full"
                  width="40"
                  height="40"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.583361 3.48988C0.583267 3.49564 0.583257 3.50139 0.583333 3.50715V10.5C0.583333 11.4638 1.3695 12.25 2.33333 12.25H11.6667C12.6305 12.25 13.4167 11.4638 13.4167 10.5V3.50721C13.4167 3.50141 13.4167 3.4956 13.4166 3.4898C13.4111 2.53063 12.6271 1.75 11.6667 1.75H2.33333C1.37287 1.75 0.588839 2.53067 0.583361 3.48988ZM1.81217 3.2398C1.90864 3.04904 2.10702 2.91667 2.33333 2.91667H11.6667C11.893 2.91667 12.0914 3.04904 12.1878 3.2398L7 6.87128L1.81217 3.2398ZM12.25 4.62038V10.5C12.25 10.8195 11.9862 11.0833 11.6667 11.0833H2.33333C2.01383 11.0833 1.75 10.8195 1.75 10.5V4.62038L6.66548 8.06122C6.86633 8.20182 7.13367 8.20182 7.33452 8.06122L12.25 4.62038Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div
              class="hero__static px-10 py-12 bg-[#1A1E23] rounded-[80px] self-center h-[400px] w-[290px] flex flex-col justify-between"
            >
              <div class="col flex justify-start gap-4 items-center">
                <span class="color-brand text-[48px] text-medium">2</span>
                <span class="text-base">{{ $t('home.hero-lang') }}</span>
              </div>
              <div class="col flex justify-start gap-4 items-center">
                <span class="color-brand text-[48px] text-medium">6</span>
                <span class="text-base">{{ $t('home.hero-tools') }}</span>
              </div>
              <div class="col flex justify-start gap-4 items-center">
                <span class="color-brand text-[48px] text-medium">2</span>
                <span class="text-base">{{ $t('home.hero-year') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="about">
    <div class="container">
      <div
        class="about__body py-16 lg:py-44 md:py-24 flex justify-between gap-10 items-center md:flex-nowrap flex-wrap"
      >
        <div class="lg:w-[60%] z-10 w-full">
          <h1
            class="secont-font lg:text-6xl md:text-5xl text-4xl bg-[#292F36] border-4 border-[#12F7D6] py-4 px-10 inline leading-base z-10 text-nowrap"
            style="border-radius: 50px 0 50px 0"
          >
            {{ $t('home.about-title') }}
          </h1>
          <div class="bg-[#292F36] py-6 md:px-12 px-6 rounded-2xl mt-16">
            <p class="color-brand-2">&ltp&gt;</p>
            <h2 class="color-brand text-4xl">{{ $t('home.about-hi') }}</h2>
            <p v-html="$t('home.about-text')"></p>
            <p class="color-brand-2">&lt/p&gt;</p>
          </div>
        </div>
        <div class="about-img w-30% z-50 hidden md:block">
          <img src="/Image.png" alt="Developer" class="w-full" loading="lazzy" />
        </div>
      </div>
    </div>
  </section>
  <section class="skills">
    <div class="container">
      <div class="py-10 lg:py-44 md:py-24 mx-auto">
        <div class="flex flex-col items-center gap-3 z-10 w-full">
          <h1 class="color-brand text-[64px] secont-font">{{ $t('home.skills') }}</h1>
          <span class="skills-title bg-[#12F7D6] w-40 block"></span>
          <p class="text-base mt-3 text-center">
            {{ $t('home.skills-sub') }}
          </p>
        </div>
        <div
          class="py-6 px-14 bg-[#98FAEC] flex flex-col items-center w-[300px] mx-auto whitespace-nowrap rounded-2xl mt-12 skills__block-web"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.3333 24.0001H26.6666C28.8758 24.0001 30.6666 22.2092 30.6666 20.0001V6.66675C30.6666 4.45761 28.8758 2.66675 26.6666 2.66675H5.33331C3.12417 2.66675 1.33331 4.45761 1.33331 6.66675V20.0001C1.33331 22.2092 3.12417 24.0001 5.33331 24.0001H14.6666V26.6667H10.6666C9.93027 26.6667 9.33331 27.2637 9.33331 28.0001C9.33331 28.7365 9.93027 29.3334 10.6666 29.3334H21.3333C22.0697 29.3334 22.6666 28.7365 22.6666 28.0001C22.6666 27.2637 22.0697 26.6667 21.3333 26.6667H17.3333V24.0001ZM5.33331 5.33341C4.59693 5.33341 3.99998 5.93037 3.99998 6.66675V20.0001C3.99998 20.7365 4.59693 21.3334 5.33331 21.3334H26.6666C27.403 21.3334 28 20.7365 28 20.0001V6.66675C28 5.93037 27.403 5.33341 26.6666 5.33341H5.33331Z"
              fill="#292F36"
            />
          </svg>
          <h2 class="text-[#292F36] text-[24px]">{{ $t('home.skills-job') }}</h2>
          <div class="skills-web text-[#43454D] flex gap-1 items-center">
            HTML
            <span class="w-1 h-1 bg-current block rounded-3xl"></span> CSS
            <span class="w-1 h-1 bg-current block rounded-3xl"></span> JS
            <span class="w-1 h-1 bg-current block rounded-3xl"></span> VUE
          </div>
        </div>
        <div class="flex justify-center items-center gap-20 mt-16 flex-wrap">
          <div class="flex flex-col items-center gap-2">
            <div
              class="w-[100px] h-[100px] flex justify-center pt-1.5 items-center rounded-full bg-[#E54F26]"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4375 8L10.625 10.1875L14.125 49.75L14.25 51.125L15.5625 51.5L31.4375 55.9375L31.9375 56.0625L32.5 55.9375L48.375 51.5625L49.6875 51.1875L49.8125 49.8125L53.375 10.1875L53.5625 8.0625H51.375L12.625 8H10.4375ZM14.8125 12L49.1875 12.0625L45.9375 48.0625L32 51.9375L18 48.0625L14.8125 12ZM19.625 18L20.9375 32.9375H38.0625L37.5 39.375L32 40.875H31.9375L26.4375 39.375L26.125 35.25H21.125L21.8125 43.1875L31.9375 46H32L42.125 43.1875L43.5 28H25.4375L25 22.9375H43.9375L44.375 18H19.625Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-2xl text-medium text-[#E54F26]">HTML</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div
              class="w-[100px] h-[100px] flex justify-center pt-1.5 items-center rounded-full bg-[#0C73B8]"
            >
              <svg
                width="40"
                height="48"
                viewBox="0 0 40 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L4 42L20 48L36 42L40 0H0ZM6.66406 6H33.3047L32.7812 12L21.3906 18H26.2422H32H32.2461L31.2227 30.0156L31.2617 30L30.7109 36L20 40L9.26953 36L8.60938 28H14.6523L14.9648 32.0664L20 33.8086L25.043 32.1016L25.7344 24H8.26172L7.74609 18L19.5664 12H7.21875L6.66406 6Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-2xl text-medium text-[#0C73B8]">CSS</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div
              class="w-[100px] h-[100px] flex justify-center pt-1 items-center rounded-full bg-[#E7A020]"
            >
              <svg
                width="48"
                height="52"
                viewBox="0 0 48 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9883 0C23.2583 0 22.5284 0.179063 21.8984 0.539062L2.07812 11.9805C0.798125 12.7205 0 14.1216 0 15.6016V36.3594C0 37.8594 0.798125 39.2405 2.07812 39.9805L7.28125 42.9805C9.80125 44.2205 10.6998 44.2188 11.8398 44.2188C15.5798 44.2188 17.7188 41.9591 17.7188 38.0391V16.6211C17.7188 16.3011 17.4606 16.0391 17.1406 16.0391H14.6406C14.3006 16.0391 14.0586 16.3011 14.0586 16.6211V38.0195C14.0586 39.7795 12.2408 41.4991 9.30078 40.0391L3.85938 36.8984C3.65937 36.7984 3.53906 36.5794 3.53906 36.3594V15.6211C3.53906 15.3811 3.65937 15.1786 3.85938 15.0586L23.6797 3.62109C23.8597 3.50109 24.1008 3.50109 24.3008 3.62109L44.1211 15.0586C44.3211 15.1786 44.4414 15.3816 44.4414 15.6016V36.3594C44.4414 36.5794 44.3206 36.7984 44.1406 36.8984L24.3008 48.3594C24.1208 48.4594 23.8597 48.4594 23.6797 48.3594L18.5781 45.3398C18.4381 45.2398 18.2416 45.2208 18.1016 45.3008C16.6816 46.1008 16.4216 46.2002 15.1016 46.6602C14.7816 46.7602 14.2812 46.9595 15.2812 47.5195L21.8984 51.4414C22.5384 51.8014 23.2605 52 23.9805 52C24.7205 52 25.4381 51.8014 26.0781 51.4414L45.9219 39.9805C47.2019 39.2405 48 37.8594 48 36.3594V15.6211C48 14.1211 47.2019 12.74 45.9219 12L26.0781 0.539062C25.4481 0.179063 24.7183 0 23.9883 0ZM29.3203 16.0117C23.6603 16.0117 20.2812 18.4102 20.2812 22.4102C20.2812 26.7502 23.6381 27.9483 29.0781 28.4883C35.5781 29.1283 36.0781 30.0911 36.0781 31.3711C36.0781 33.5711 34.3011 34.5117 30.1211 34.5117C24.8611 34.5117 23.7003 33.1898 23.3203 30.5898C23.2803 30.3098 23.0417 30.1094 22.7617 30.1094H20.1797C19.8597 30.1094 19.6211 30.3719 19.6211 30.6719C19.6211 34.0119 21.4411 37.9883 30.1211 37.9883C36.4011 37.9883 40 35.5114 40 31.1914C40 26.9114 37.0995 25.7692 31.0195 24.9492C24.8395 24.1492 24.2188 23.7291 24.2188 22.2891C24.2188 21.0891 24.7603 19.5117 29.3203 19.5117C33.3803 19.5117 34.8995 20.3889 35.5195 23.1289C35.5795 23.3889 35.7981 23.5898 36.0781 23.5898H38.6602C38.8202 23.5898 38.9581 23.5106 39.0781 23.3906C39.1781 23.2906 39.2387 23.1292 39.2188 22.9492C38.8187 18.2292 35.6803 16.0117 29.3203 16.0117Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-2xl text-medium text-[#E7A020]">JS</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div
              class="w-[100px] h-[100px] flex justify-center pt-1.5 items-center rounded-full bg-[#42b883]"
            >
              <svg
                viewBox="0 -17.5 256 256"
                version="1.1"
                width="50"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#FFFFFF"
                  stroke-width="17.096"
                >
                  <g>
                    <path
                      d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
                      fill="#41B88300"
                    ></path>
                    <path
                      d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
                      fill="#41B88300"
                    ></path>
                    <path
                      d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
                      fill="#35495E00"
                    ></path>
                  </g>
                </g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
                      fill="#41B88300"
                    ></path>
                    <path
                      d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
                      fill="#41B88300"
                    ></path>
                    <path
                      d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
                      fill="#35495E00"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <span class="text-2xl text-medium text-[#42b883]">VUE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about {
  position: relative;
  background-color: #1a1e23;
}

.about:before {
  content: '';
  background: url('/about-bg.jpg') no-repeat center/cover;
  opacity: 0.2;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.skills {
  position: relative;
}

.skills:before {
  content: '';
  background: url('/skills-bg.jpg') no-repeat center/cover;
  opacity: 0.2;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.skills-title {
  position: relative;
  height: 3px;
}

.skills-title:before {
  content: '';
  display: block;
  position: absolute;
  top: -4px;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: #12f7d6;
  border-radius: 50%;
}

.skills-title:after {
  content: '';
  display: block;
  position: absolute;
  top: -4px;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: #12f7d6;
  border-radius: 50%;
}

.skills__block-web {
  box-shadow: -10px 0 2px 0 #0c73b8;
}
</style>
