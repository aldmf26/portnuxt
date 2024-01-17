<template>
  <!-- navbar -->

  <div class="container mx-auto p-2 flex">
    <div class="">
      <div class="text-primary text-xl font-bold">Logo</div>
    </div>
    <div class="grow ml-16">
      <!--
      <div class="dropdown dropdown-hover mx-3" v-for="nav in navbarKategori" :key="nav">
        <div tabindex="0" role="button" class="m-1 font-bold">
          <NuxtLink to="/terjemahan" class="mr-2">{{ nav }}</NuxtLink>
          <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-70 inline-block"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NuxtLink to="/dynamic">Tuhan</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/index">Konsep</NuxtLink>
          </li>
        </ul>
      </div>
      -->
    </div>
    <div class="">

      <div class=" relative inline-block text-left dropdown">
        <span class="rounded-md shadow-sm"><button
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
            <span>Options</span>
            <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button></span>
        <div
          class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div
            class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
            <div class="px-4 py-3">
              <p class="text-sm leading-5">Signed in as</p>
              <p class="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
            </div>
            <div class="py-1">
              <a href="javascript:void(0)" tabindex="0"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem">Account settings</a>
              <a href="javascript:void(0)" tabindex="1"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem">Support</a>
              <span role="menuitem" tabindex="-1"
                class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                aria-disabled="true">New feature (soon)</span>
              <a href="javascript:void(0)" tabindex="2"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem">License</a>
            </div>
            <div class="py-1">
              <a href="javascript:void(0)" tabindex="3"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-sm m-1">
          Theme
          <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <li v-for="theme in themes" :key="theme">
            <a @click="changeTheme(theme)">{{ theme }}</a>
          </li>
        </ul>
      </div> -->
    </div>
  </div>

  <!-- section -->
  <slot />

  <footer class="fixed bottom-0 left-0 w-full footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p>Copyright © 2024 - Muhammad Fahrizaldi</p>
    </aside>
  </footer>
</template>
<script setup>
const navbarKategori = ["Indonesia", "Mesir", "Yunani", "Sumeria"];
const $route = useRoute();
const tabActive = ref(
  "tab-active [--tab-bg:yellow] [--tab-border-color:orange]"
);
const isActive = (route) => {
  return $route.path === route;
};

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
});
</script>
<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
