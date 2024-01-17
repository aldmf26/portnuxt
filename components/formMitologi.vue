<template>
    <input v-model="searchTerm" type="text" placeholder="Pencarian..."
        class="input input-bordered input-primary w-full mt-5 mb-5" />
    <div class="text-center">
        <ul class="flex-col items-center">
            <li class="space-x-4">
                <button @click.prevent="selectedLetter = ''" class="underline">All</button>
                <button @click.prevent="selectedLetter = huruf" v-for="huruf in alphabet" :class="{
                    'hover:underline hover:text-info': groupedData[huruf],
                    'text-disabled': !groupedData[huruf],
                    'p-1 rounded-xl  shadow-custom': selectedLetter === huruf,
                }">{{ huruf }}</button>
            </li>
        </ul>
    </div>
    <div class="" v-for="letter in alphabet" :key="letter">
        <div
            v-if="groupedData[letter] && groupedData[letter].length > 0 && filteredTitles[letter].length > 0 && (selectedLetter === letter || selectedLetter === '')">
            <h5 class="text-3xl bg-base-300 py-2 px-2 mt-5">{{ letter }}</h5>
            <div class="grid grid-cols-3 gap-4 py-5 px-3">
                <div v-for="title in filteredTitles[letter]" :key="title">
                    <div>
                        <a href="" class="hover:underline hover:text-info">{{ title }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
const dummyTitles = [
    'Arius',
    'Atlantis',
    'Hera',
    'Azazil',
    'Alexander Agung',
    'Achilles',
    'Ares',
    'Lucifer',
    'Namrud',
    'Nebukadnezar',
    'Lemuria',
    'Sundaland',
    'Zeus',
    'Poseidon',
    'Hades',
    'Persephone'
];
const selectedLetter = ref('');
const searchTerm = ref('');
// Buat objek untuk mengelompokkan judul berdasarkan huruf awal
const groupedData = dummyTitles.reduce((acc, title) => {
    const firstLetter = title[0].toUpperCase();
    acc[firstLetter] = acc[firstLetter] || [];
    acc[firstLetter].push(title);
    return acc;
}, {});

// Urutkan setiap grup berdasarkan judulnya
for (const letter in groupedData) {
    groupedData[letter].sort();
}

const filteredTitles = computed(() => {
    const filtered = {};
    for (const letter in groupedData) {
        filtered[letter] = groupedData[letter].filter(title =>
            title.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    }
    return filtered;
});


</script>