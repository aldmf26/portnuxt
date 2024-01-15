<template>
    <NuxtLayout name="layout2">
        <div class="container py-10 mx-auto  bg-base-200 ">
            <div class="hero-content md:px-4 lg:px-48">
                <div class="">
                    <h1 class=" text-2xl md:text-3xl font-bold">Mitologi.net</h1>
                    <p class="py-6 text-sm md:text-md" style="letter-spacing: 1px;">Pencarian umum di antara semua budaya
                        untuk
                        mendapatkan penjelasan atas pertanyaan paling mendasar dan paling menantang mengenai kehidupan dan
                        kondisi manusia selalu ada. Kata Mitologi sendiri berasal dari bahasa Yunani yaitu “mythos” yang
                        berarti kisah manusia dan “logos” yang berarti ucapan.

                    </p>
                    <h1 class=" text-1xl md:text-2xl font-bold">Semua Pengetahuan Ada disini</h1>
                    <input v-model="searchTerm" type="text" placeholder="Pencarian..."
                        class="input input-bordered input-primary w-full mt-5 mb-5" />
                    <div class="text-center">
                        <ul class="flex-col items-center">
                            <li class="space-x-4">
                                <button @click.prevent="selectedLetter = ''" class="underline">All</button>
                                <button @click.prevent="selectedLetter = huruf" v-for="huruf in alphabet"
                                    class="hover:underline hover:text-info">{{ huruf }}</button>
                            </li>
                        </ul>
                    </div>
                    <div v-for="letter in alphabet" :key="letter">
                        <div
                            v-if="groupedData[letter] && groupedData[letter].length > 0 && selectedLetter === letter || selectedLetter === ''">
                            <h5 class="text-3xl bg-base-300 py-2 px-2 mt-5">{{ letter }}</h5>
                            <div class="grid grid-cols-3 gap-4 py-5 px-3">
                                <div v-for="title in groupedData[letter]" :key="title">
                                    <a href="" class="hover:underline hover:text-info">{{ title }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>


const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
const dummyTitles = ['Arius', 'Baphomet', 'Namrud', 'Apollo', 'Artemis', 'Zeus', 'Hera', 'Hades', 'Persephone'];
const selectedLetter = ref('');
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

</script>
