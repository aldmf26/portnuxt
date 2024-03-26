<template>
    <h1 class="text-center text-2xl md:text-3xl font-bold ">Artikel</h1>

    <input type="text" placeholder="Pencarian..." class="input input-bordered input-primary w-full mt-5 mb-5" />
    <div v-for="(article, index) in 5"
        class="container cursor-pointer hover:bg-base-300 grid grid-cols-12 mx-auto bg-base-100 mb-3">
        <div class="bg-no-repeat m-3 bg-cover col-span-full lg:col-span-4"
            style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;">
        </div>
        <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">

            <h1 class="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                reprehenderit
                adipisci tempore voluptas laborum quod.</h1>

            <a rel="noopener noreferrer" href="#" class="inline-flex items-center pt-2 pb-6 space-x-2 text-sm ">
                <span>Baca </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"
                    data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;">
                    <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
            <div class="flex items-center justify-between pt-2">
                <div class="flex space-x-2">
                    <svg class="h-5- w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                        <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                        <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                    </svg>
                    <span class="self-center text-sm">{{ formatDate("2024-01-01") }}</span>
                </div>
                <BtnSuka />
            </div>
        </div>
    </div>
    <div class="text-center mt-5">
        <button class="btn btn-sm btn-outline btn-info">Tampilkan lebih banyak</button>
    </div>
    <!-- <div v-if="isLoading" class="text-center my-4">Loading...</div> -->
</template>

