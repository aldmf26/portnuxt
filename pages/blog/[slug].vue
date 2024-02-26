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
    <NuxtLayout name="layout2">
        <div class="">
            <NuxtLink to="/" class="hover:underline">
                <Icon size="20" name="material-symbols:keyboard-double-arrow-left" /> Kembali
            </NuxtLink>
            <h1 class="float-start text-2xl md:text-5xl font-bold mt-10">{{ data.title ?? 'Tidak Ada Data' }}</h1>
            <p class="italic text-[9px] md:text-xs text-inherit">Publish: {{ formatDate(data.tgl) }}</p>

            <div>
                <figure class="block transition-all duration-300 cursor-pointer py-8">
                    <a href="#">
                        <img class="shadow-aldi transition-shadow rounded-lg w-96 h-80" :src="data.img"
                            alt="image description">
                    </a>

                </figure>

            </div>
            <div v-html="data.body" class="font-content content"></div>
            <div class="py-28 ">
                <h1 class="text-2xl md:text-3xl font-bold">Baca Selanjutnya</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                    <div v-for="d in 3" class="cursor-pointer">
                        <img class="mb-5 transition-shadow rounded-lg w-72 h-60" :src="data.img"
                            alt="image description">
                        <h1 class="text-xl md:text-lg font-bold">Azazil</h1>
                        <p>Azazil adalah nama asli iblis sebelum dilaknat dari surga.</p>
                        <NuxtLink class="underline text-info ">Baca</NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const slug = route.params.slug
const data = ref({})

const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options);
    const time = date.toLocaleTimeString('id-ID', { hour: 'numeric', minute: 'numeric' });
    return `${formattedDate} ${time}`;
}

onMounted(async () => {
    // Dummy data
    const dummyData = [
        {
            slug: 'atlantis',
            title: 'Atlantis',
            tgl: '2024-02-24 12:30:00',
            deskripsi: 'Deskripsi for Atlantis',
            img: 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/10/08/atlantisjpg-20221008101424.jpg',
            body: '<h1>Apa Atlantis ?</h1><p>Dalam bukunya "<b>Encyclopedia of Dubious Archaeology</b>" profesor arkeologi Ken Feder mencatat bahwa dalam cerita Plato, "Atlantis bukanlah tempat untuk dihormati atau ditiru sama sekali. Atlantis bukanlah masyarakat yang sempurna. Justru sebaliknya, Atlantis adalah perwujudan dari negara yang kaya secara materi, maju secara teknologi, dan kuat secara militer yang telah dirusak oleh kekayaan, kecanggihan, dan kekuatannya."</p>'
        },

        {
            slug: 'azazil',
            title: 'Azazil',
            tgl: '2024-02-23 12:30:00',
            deskripsi: 'Deskripsi for Azazil',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Azazel.jpg/300px-Azazel.jpg',
            body: "<h1 >Siapa Azazil ?</h1><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.</p>"


        },

        // Add more dummy data as needed
    ]

    // Find the data object with the matching slug
    data.value = dummyData.find(item => item.slug === slug)
    if (!data.value) {
        router.push('/')
    }
})

</script>
