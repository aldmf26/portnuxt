<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 p-16">
        <div class="">
            <div role="tablist" class="tabs tabs-bordered tabs-sm mb-5">
                <a role="tab" class="tab">Tab 1</a>
                <a role="tab" class="tab tab-active">Tab 2</a>
                <a role="tab" class="tab">Tab 3</a>
            </div>
            <textarea class="resize-none textarea textarea-info textarea-lg h-full w-full " placeholder="Bio"></textarea>
        </div>
        <div class="">
            <textarea disabled class="resize-none textarea textarea-info textarea-lg h-full w-full "
                placeholder="Bio"></textarea>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
