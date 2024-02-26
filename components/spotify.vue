<template>
    <div>
        <h1>Playlist Tracks</h1>
        <div class="overflow-x-auto h-56">
            <table class="table table-xs table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Date added</th>
                        <th>Minute</th>
                        <th>Play</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover cursor-pointer" v-for="(track, i) in sortedTracks " :key="track.track.id">
                        <td>
                            {{ i + 1 }}
                        </td>
                        <td>
                            <div class="flex items-center justify-start">

                                <div class="avatar">
                                    <div class="w-16 rounded-lg">
                                        <img :src="track.track.album.images[0].url" :alt="track.track.name" />
                                    </div>
                                </div>

                                <p class="ml-3">{{ track.track.name }} - {{ track.track.artists[0].name }}</p>
                            </div>
                        </td>
                        <td>{{ track.track.album.name }}</td>
                        <td>{{ formatDate(track.added_at) }}</td>
                        <td>{{ formatDuration(track.track.duration_ms) }} </td>
                        <td><img class="iconPlay" width="20" height="20" src="https://img.icons8.com/glyph-neue/20/play.png" alt="play"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const tracks = ref(null);
const images = ref('')
const hoveredTracks = ref([]);

const setHovered = (index, isHovered) => {
  hoveredTracks.value[index] = isHovered;
};

const isHovered = (index) => {
  return hoveredTracks.value[index];
};
onMounted(async () => {
    try {
        // Menggunakan token akses yang diberikan dari parameter query
        const accessToken = "BQA1s_T2fAnnxbTporGFtw23_mliA1YcZAZ_-6uyVZRjXyhSHKb8yJClkBgMXOG00k4Ntd4NFRCtmCxw1gKSEI69ugA6ccYMZb4o-mEUy4zGsA_XkR8";

        // Lakukan permintaan ke Spotify API menggunakan fetch dan token yang diberikan
        const response = await fetch('https://api.spotify.com/v1/playlists/1APCHOeBXC5lvuEEaBsWUt/tracks?offset=380&limit=20', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            // Tampilkan pesan kesalahan jika respons tidak berhasil
            const errorData = await response.json();
            console.error('Error fetching artist info:', errorData);
            return;
        }
        const data = await response.json();
        console.log(data)
        tracks.value = data.items;
        // artist.value = await response.json();
        // images.value = artist.value.images[0].url
        // console.log('Currently playing:', data);
    } catch (error) {
        console.error('Error fetching currently playing:', error);
    }
});

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};

const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = ((durationMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const sortedTracks = computed(() => {
    if (!tracks.value) return [];

    return tracks.value
        .slice()
        .sort((a, b) => new Date(b.added_at) - new Date(a.added_at));
});
</script>

<style scoped>
tr:hover .iconPlay {
  display: inline;
}
.iconPlay {
  display: none;
}
.nomor {
    display: none;
}
</style>