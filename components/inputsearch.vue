<template>
    <select class="select select-bordered w-full max-w-xs">
        <option class="text-lg pt-5" v-for="terjemahan in filteredTerjemahans" :key="terjemahan.id">
            {{ terjemahan.bahasa.toUpperCase() }}
        </option>
    </select>
    <!-- <div class="flex flex-col items-start">
        <div class="w-full md:w-1/2 flex flex-col items-start">
            <div class="w-full">
                <div class="flex flex-col items-center relative">
                    <div class="w-full">
                        <div class="my-2 p-1 flex border border-gray-200 rounded">
                            <div class="flex flex-auto flex-wrap"></div>
                            <input @click="toggleDropdown" v-model="selectedBahasa" placeholder="Bahasa"
                                class="p-1 px-2 appearance-none outline-none w-full text-primary">
                            <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                                <button @click="toggleDropdown"
                                    class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                                {{ selectedBahasa }}
                            </div>
                        </div>
                    </div>

                    <div v-show="isDropdownOpen"
                        class="absolute shadow top-100 z-40 w-full bg-base-100 lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj"
                        @mousedown="closeDropdown">
                        <div class="flex flex-col w-full">
                            <div v-for="terjemahan in filteredTerjemahans" :key="terjemahan.id"
                                class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-gray-500"
                                @click="selectTerjemahan(terjemahan)">
                                <div
                                    class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-100">
                                    <div class="w-full items-center flex">
                                        <div class="mx-2 -mt-1 ">{{ terjemahan.bahasa.toUpperCase() }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div> -->
</template>
  
<script setup>
import { ref, watch, onMounted } from 'vue';

const selectedBahasa = ref('');
const isDropdownOpen = ref(false);
const terjemahans = [
    {
        id: 1,
        bahasa: 'indonesia'
    },
    {
        id: 2,
        bahasa: 'dayak'
    },
];
const filteredTerjemahans = ref([]);

const search = () => {
    filteredTerjemahans.value = terjemahans.filter(terjemahan => {
        const fullName = `${terjemahan.bahasa}`.toLowerCase();
        return fullName.includes(selectedBahasa.value.toLowerCase());
    });
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const selectTerjemahan = (terjemahan) => {
    alert(terjemahan.bahasa);
    selectedBahasa.value = terjemahan.bahasa;
    isDropdownOpen.value = false;
};
watch(selectedBahasa, search);

onMounted(() => {
    // Tambahkan event listener ke elemen body
    document.body.addEventListener('mousedown', closeDropdown);
});

onUnmounted(() => {
    // Hapus event listener saat komponen dimusnahkan
    document.body.removeEventListener('mousedown', closeDropdown);
});

search();
</script>
  
<style>
.top-100 {
    top: 100%
}

.bottom-100 {
    bottom: 100%
}

.max-h-select {
    max-height: 300px;
}
</style>
  