<script setup>
import autoAnimate from "@formkit/auto-animate"
const dropdown = ref()
onMounted(() => {
    autoAnimate(dropdown.value)
})
const form = reactive([
    { name: '', price: 0 }
]);
const plusRow = () => {
    form.push({ name: '', price: 0 });
}
const hapusRow = (index) => {
    form.splice(index, 1);
}

</script>

<template>
    <div class="container mx-auto px-5" ref="dropdown">
        <h1>{{ form.length }}</h1>

        <div v-for="(item, index) in form" :key="index">
            <h6>{{ item.name }} </h6>
            <input type="text" v-model="item.name" placeholder="Type here"
                class="input input-bordered w-full mt-4 max-w-xs" />
            <button v-if="index === 0" @click="plusRow" class="btn btn-neutral ms-4">Tambah</button>
            <button v-if="index > 0" @click="hapusRow(index)" class="btn btn-danger ms-4">hapus</button>
        </div>
    </div>
</template>