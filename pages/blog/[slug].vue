<style>
.shadow-aldisad {
    box-shadow: 0px 7px 10px oklch(var(--p));
    /* Ganti nilai warna sesuai keinginan Anda */
}

.content h1 {
    @apply text-3xl text-error mb-3 font-mono;
}

.content b {
    @apply font-semibold;
}
</style>

<template>
    <div v-if="data.judul">
        <div class="flex justify-between items-center">
            <div>
                <span @click="goBack" class="hover:underline cursor-pointer">
                    <Icon size="20" name="material-symbols:keyboard-double-arrow-left" /> Kembali
                </span>
            </div>
            <NuxtLink to="/" class="btn btn-ghost">
                X
            </NuxtLink>
        </div>

        <h1 class="float-start text-2xl md:text-5xl font-bold mt-10">{{ data.judul.toUpperCase()}}</h1>
        <p class="italic text-[9px] md:text-xs text-inherit">Publish: {{ formatDate(data.tgl_publish) }}</p>

        <div>
            <figure class="block transition-all duration-300 cursor-pointer py-8">
                <a href="#">
                    <img class="shadow-aldi transition-shadow rounded-lg w-96 h-80" :src="data.img_heading"
                        alt="image description">
                </a>

            </figure>

        </div>


        <div v-html="data.content" class="font-content content"></div>


        <div class="mt-5">
            <h1 class="text-2xl md:text-3xl font-bold">Baca Selanjutnya</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                <NuxtLink :to="artikel.judul" v-for="artikel in artikelLainnya" class="cursor-pointer">
                    <img class="mb-5 transition-shadow rounded-lg w-72 h-60" :src="artikel.img_heading"
                        alt="image description">
                    <h1 class="text-xl md:text-lg font-bold">{{ artikel.judul }}</h1>
                    <span class="underline text-info ">Baca Selanjutnya...</span>
                </NuxtLink>
            </div>
        </div>

    </div>
    <div v-else>
        <div role="status" class="float-center items-center">
            <svg aria-hidden="true"
                class="w-1/6 h-1/6 text-center float-center justify-center items-center text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script setup>


const route = useRoute()
const router = useRouter()
const slug = route.params.slug
const data = ref({})
const artikelLainnya = ref({})

const api_link = "https://sarang.ptagafood.com/api/blog"

const link = `${api_link}/${slug}`
const linkLainnya = `${api_link}/lainnya/${slug}`

useHead({
  title: `${slug.toUpperCase()} - Aldi Teori`
})

const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options);
    const time = date.toLocaleTimeString('id-ID', { hour: 'numeric', minute: 'numeric' });
    return `${formattedDate} ${time}`;
}


onMounted(async () => {
    // Dummy data

    const response = await $fetch(link)

    data.value = response
    if (!data.value) {
        router.push('/')
    }

    const responselainnya = await $fetch(linkLainnya)
    artikelLainnya.value = responselainnya

})

const goBack = () => {
    const router = useRouter();
    router.back(); // Menggunakan router.back() untuk kembali ke halaman sebelumnya
};

</script>
