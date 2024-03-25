<template>
    <h1 class="text-center text-2xl md:text-3xl font-bold ">Artikel</h1>

    <input type="text" placeholder="Pencarian..." class="input input-bordered input-primary w-full mt-5 mb-5" />
    <div v-for="(article, index) in 5"
        class="container cursor-pointer hover:bg-base-300 grid grid-cols-12 mx-auto bg-base-100 mb-3">
        <div class="bg-no-repeat m-3 bg-cover col-span-full lg:col-span-4"
            style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;">
        </div>
        <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">

            <h1 class="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit
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
            <!-- <div class="flex items-center justify-between pt-2">
                    <div class="flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 "
                            data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="self-center text-sm">by Leroy Jenkins</span>
                    </div>
                    <span class="text-xs">3 min read</span>
                </div> -->
        </div>
    </div>
    <!-- <div v-if="isLoading" class="text-center my-4">Loading...</div> -->
</template>

