<template>
  <!-- navbar -->
  <div class="container mx-auto p-2 flex justify-evenly items-center">
    <div class="">
      <NuxtLink to="/" class="text-primary text-xl font-bold">
        <img src="~/public/man.png" class="w-14" alt="">
      </NuxtLink>
    </div>
    <div class="hidden md:block">
      <div class="px-3 text-left dropdown" v-for="(nav, index) in navbarKategori" :key="index">
        <span class="rounded-md shadow-sm">
          <button class="inline-flex justify-center w-full py-2 text-sm font-medium leading-5 text-base-500 "
            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
            <NuxtLink :to="nav.toLowerCase()" :class="$route.name == nav.toLowerCase() ? 'btn-primary' : 'btn-ghost'"
              class="btn btn-xs md:btn-sm">{{ nav }}</NuxtLink>

          </button>
        </span>
      </div>
    </div>

    <div class="">
      <div class="relative inline-block text-left dropdown">
        <span class="rounded-md shadow-sm">
          <button @click="isDropdownOpen = !isDropdownOpen" class="inline-flex justify-center w-full btn btn-ghost btn-sm"
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
    <div class="md:hidden block">
      <div class="drawer drawer-end">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->

          <label for="my-drawer" class="btn btn-md btn-outline-primary drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 w-44 h-30 bg-base-200 text-base-content">
            <li v-for="nav in navbarKategori">
              <NuxtLink class="btn mb-4 btn-sm btn-outline-primary" :to="nav.toLowerCase()">{{ nav }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- section -->
  <div class="container mx-auto bg-base-200 ">
    <div class="hero-content md:px-4 lg:px-48 ">
      <div class="">
        <slot />

      </div>
    </div>
  </div>

  <div class="fixed bottom-4 right-4" id="scrollToTopBtn" @click="scrollToTop">
    <svg class="btn btn-info btn-sm" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="top-a"
          d="M2.29289322,0.292893219 C2.68341751,-0.0976310729 3.31658249,-0.0976310729 3.70710678,0.292893219 C4.09763107,0.683417511 4.09763107,1.31658249 3.70710678,1.70710678 L1.70710678,3.70710678 C1.31658249,4.09763107 0.683417511,4.09763107 0.292893219,3.70710678 C-0.0976310729,3.31658249 -0.0976310729,2.68341751 0.292893219,2.29289322 L2.29289322,0.292893219 Z" />
        <path id="top-c"
          d="M3.41421356,4 L13.0014708,4 C13.5529433,4 14,4.44771525 14,5 C14,5.55228475 13.5529433,6 13.0014708,6 L3.41421356,6 L5.70710678,8.29289322 C6.09763107,8.68341751 6.09763107,9.31658249 5.70710678,9.70710678 C5.31658249,10.0976311 4.68341751,10.0976311 4.29289322,9.70710678 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L3.41421356,4 Z" />
      </defs>
      <g fill="none" fill-rule="evenodd" transform="matrix(0 1 1 0 7 5)">
        <g transform="translate(3 1)">
          <mask id="top-b" fill="#ffffff">
            <use xlink:href="#top-a" />
          </mask>
          <use fill="#D8D8D8" fill-rule="nonzero" xlink:href="#top-a" />
          <g fill="#FFA0A0" mask="url(#top-b)">
            <rect width="24" height="24" transform="translate(-8 -8)" />
          </g>
        </g>
        <mask id="top-d" fill="#ffffff">
          <use xlink:href="#top-c" />
        </mask>
        <use fill="#000000" fill-rule="nonzero" xlink:href="#top-c" />
        <g fill="#7600FF" mask="url(#top-d)">
          <rect width="24" height="24" transform="translate(-5 -7)" />
        </g>
      </g>
    </svg>
  </div>
  <footer class=" w-full footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p class="text-start">Copyright © 2024 - Muhammad Fahrizaldi </p>
    </aside>

  </footer>
</template>

<script setup>
const navbarKategori = ["Glosarium", "Disukai", "Kontak"];
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

  window.addEventListener('scroll', handleScroll);

});
const handleScroll = () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = 'block'; // Munculkan tombol saat discroll
  } else {
    scrollToTopBtn.style.display = 'none'; // Sembunyikan tombol saat tidak discroll
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Animasi scroll
  });
};

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
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

<style scoped>
#scrollToTopBtn {
  display: none;
  /* Tombol akan disembunyikan awalnya */
  cursor: pointer;
}
</style>