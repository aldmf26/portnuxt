<template>
  <!-- navbar -->
  <div class="container mx-auto p-2 flex items-center">
    <div class="">
      <NuxtLink to="/" class="text-primary text-xl font-bold">Logo</NuxtLink>
    </div>
    <div class="grow ml-5">


      <!-- navbar other -->

      <div class="relative text-left dropdown" v-for="(nav, index) in navbarKategori"
        :key="index">
        <span class="rounded-md shadow-sm">
          <button
            class="hover:underline inline-flex justify-center w-full py-2 text-sm font-medium leading-5 text-base-500 "
            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
            <NuxtLink :to="nav.toLowerCase()" :class="$route.name == nav.toLowerCase() ? 'btn-primary' : 'btn-ghost'" class="btn btn-xs md:btn-sm">{{ nav }}</NuxtLink>

          </button>
        </span>
      </div>
    </div>
    
    <div class="">
      <div class="relative inline-block text-left dropdown">
        <span class="rounded-md shadow-sm">
          <button @click="isDropdownOpen = !isDropdownOpen"
            class="inline-flex justify-center w-full px-4 py-2 btn btn-ghost text-sm font-medium leading-5 text-base-500 transition duration-150 ease-in-out btn-sm rounded-md "
            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
            <span>Themes</span>
            <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </span>
        <div v-show="isDropdownOpen" ref="dropdown"
          class="dropdown-menu  transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div
            class="absolute  right-0 w-32 mt-2 origin-top-right bg-base-200 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
            <div class="py-1">
              <div v-for="theme in themes" :key="theme">
                <a @click="changeTheme(theme)" tabindex="1"
                  class="text-base-500 cursor-pointer hover:bg-info flex justify-between w-full px-4 py-2 text-sm  text-left"
                  role="menuitem">
                  {{ theme }}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- section -->
  <div class="container py-10 mx-auto bg-base-200 ">
    <div class="hero-content md:px-4 lg:px-48 ">
      <div class="">
        <slot />

      </div>
    </div>
  </div>

  <footer class=" w-full footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p class="text-start">Copyright © 2024 - Muhammad Fahrizaldi </p>
    </aside>

  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router';
const $route = useRoute();
const tabActive = ref(
  "tab-active [--tab-bg:yellow] [--tab-border-color:orange]"
);
const isActive = (route) => {
  return $route.path === route;
};
const navbarKategori = ["Favorites", "Contact"];

const themes = ref([
  "light",
  "night",
  "garden",
  "coffe",
  "cyberpunk",
  "aqua",
  "luxury",
  "synthwave",
]);
const themeBelum = ref("light");

const changeTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

onMounted(() => {
  // Get tema dari local storage saat halaman dimuat ulang
  const storedTheme = localStorage.getItem("theme");
  themeBelum.value = storedTheme || "light";

  // Set tema saat halaman dimuat ulang
  changeTheme(themeBelum.value);

  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const isDropdownOpen = ref(false)
const isDropdownNavbarOpen = ref(Array(navbarKategori.length).fill(false));

const toggleDropdown = (index) => {
  isDropdownNavbarOpen.value.forEach((value, i) => {
    if (i !== index) {
      // Tutup dropdown yang tidak dipilih
      isDropdownNavbarOpen.value[i] = false;
    }
  });

  // Buka atau tutup dropdown yang dipilih
  isDropdownNavbarOpen.value[index] = !isDropdownNavbarOpen.value[index];
};
const handleClickOutside = (event) => {
  if (isDropdownOpen.value && !event.target.closest('.dropdown')) {
    isDropdownOpen.value = false;
  }
  isDropdownNavbarOpen.value.forEach((value, index) => {
    const isClickedInsideNavbar = event.target.closest(`.dropdown-${index}`);

    // Jika dropdown terbuka dan tidak diklik di dalam elemen dropdown-navbar, tutup dropdown
    if (value && !isClickedInsideNavbar) {
      isDropdownNavbarOpen.value[index] = false;
    }
  });

};


</script>

