
<template>

    <div class="grid grid-cols-2 grid-rows-2 gap-4 p-16">
        <div class="">
            <!-- <div role="tablist" class="tabs tabs-bordered tabs-sm mb-5">
                <a role="tab" class="tab">Tab 1</a>
                <a role="tab" class="tab tab-active">Tab 2</a>
                <a role="tab" class="tab">Tab 3</a>
            </div> -->
            <Inputsearch/>

            <textarea class="resize-none mt-3 textarea textarea-primary textarea-lg h-full w-full "
                placeholder="Bio"></textarea>
        </div>
        <div class="">
            <select class="select select-primary w-full max-w-xs">
                <option disabled selected>What is the best TV show?</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>

            <textarea disabled class="resize-none mt-3 textarea textarea-primary textarea-lg h-full w-full "
                placeholder="Bio"></textarea>
        </div>
    </div>
</template>

