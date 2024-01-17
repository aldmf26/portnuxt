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
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-sm m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            class="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path
              d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
            ></path>
          </svg>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
        >
          <li v-for="theme in themes" :key="theme">
            <a @click="changeTheme(theme)">{{ theme }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- section -->
  <slot />

  <footer
    class="fixed bottom-0 left-0 w-full footer footer-center p-4 bg-base-300 text-base-content"
  >
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
