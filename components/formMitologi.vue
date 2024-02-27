<template>
    <input v-model="searchTerm" type="text" placeholder="Pencarian..."
        class="input input-bordered input-primary w-full mt-5 mb-5" />
    <div class="text-center">
        <ul class="flex-col items-center">
            <li class="space-x-4">
                <button @click="selectedLetter = ''" class="underline">All</button>
                <button @click="selectedLetter = huruf" v-for="huruf in alphabet" :class="{
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
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-5 px-3">
                <div v-for="title in filteredTitles[letter]" :key="title">
                    <div>
                        <a @click="handleRedirect(title.toLowerCase().replace(/\s+/g, '-'))"
                            class="cursor-pointer hover:underline hover:text-info">{{ title }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const judul = ref([])
const dummyTitles = ref([]);
const groupedData = ref({})

const {API_LINK} = useRuntimeConfig().public

const link = API_LINK

onMounted(async () => {
    const response = await $fetch(link)
    dummyTitles.value = response.map(post => (post.judul));

    groupedData.value = dummyTitles.value.reduce((acc, title) => {
        const firstLetter = title[0].toUpperCase();
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push(title);
        return acc;
    }, {});

    for (const letter in groupedData.value) {
        if (Array.isArray(groupedData.value[letter])) {
            groupedData.value[letter].sort();
        }
    }

})
const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

const selectedLetter = ref('');
const searchTerm = ref('');


const filteredTitles = computed(() => {
    const filtered = {};
    for (const letter in groupedData.value) {
        filtered[letter] = groupedData.value[letter].filter(title =>
            title.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    }
    return filtered;
});


const router = useRouter()
const handleRedirect = (slug) => {
    router.push(`/blog/${slug}`)
}


</script>