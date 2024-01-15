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
                    <input type="text" placeholder="Pencarian..."
                        class="input input-bordered input-primary w-full mt-5 mb-5" />
                    <div class="text-center">
                        <ul class="flex-col items-center">
                            <li class="space-x-4">
                                <a href="" class="underline">All</a>
                                <a href="" v-for="huruf in alpabet" class="hover:underline hover:text-info">{{ huruf }}</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="overflow-x-auto mt-5">
                        <table class="table">
                            <!-- head -->
                            <thead class="bg-base-300">
                                <tr>
                                    <th width="5" class="text-2xl">A</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>
                                        <a href="" class="hover:underline hover:text-info">Cy Ganderton</a>
                                    </td>
                                    <td>
                                        <a href="" class="hover:underline hover:text-info">Cy Ganderton</a>

                                    </td>
                                    <td>
                                        <a href="" class="hover:underline hover:text-info">Cy Ganderton</a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
const alpabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
</script>