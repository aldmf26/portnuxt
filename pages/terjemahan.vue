
<template>

    <div class="grid grid-cols-2 grid-rows-2 gap-4 p-16">
        <div class="">
            <v-autocomplete @update:modelValue="changeDariBahasa" label="Bahasa" v-model="dariBahasa" :items="terjemahans"></v-autocomplete>
            <textarea autofocus v-model="isi" class="resize-none mt-3 textarea textarea-primary textarea-lg h-full w-full "
                placeholder="Masukan teks..."></textarea>
        </div>
        <div class="">
            <v-autocomplete @update:modelValue="changeKeBahasa" label="Terjemahan" v-model="keBahasa" :items="terjemahans"></v-autocomplete>

            <textarea v-model="terjemahan" disabled class="resize-none mt-3 textarea textarea-primary textarea-lg h-full w-full "
                placeholder="Terjemahan"></textarea>
        </div>
    </div>
</template>
<script setup>
const dariBahasa = ref('indonesia')
const keBahasa = ref('')
const isi = ref('')
const terjemahan = ref('')

const terjemahans = [
    'indonesia', 'dayak', 'jawa'
];

const changeDariBahasa = (value) => {
  console.log('Dari Bahasa berubah:', value);
};

const changeKeBahasa = (value) => {
  console.log('Ke Bahasa berubah:', value);
};


</script>
