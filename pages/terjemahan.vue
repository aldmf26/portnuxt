
<template>
<ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
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
const rc = useRuntimeConfig();
import { createClient } from '@supabase/supabase-js'
// const url = "https://fjqfzpdineegwzesighr.supabase.co"
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqcWZ6cGRpbmVlZ3d6ZXNpZ2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMjQwMTIsImV4cCI6MjAyMDgwMDAxMn0.JPafmNNwC_G1pG_AjUrNQ7MsPO4t4Xylw4WnYa1kmOY"
const url = rc.public.URL
const token = rc.public.TOKEN
const supabase = createClient(url, token)
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})

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
