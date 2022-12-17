<template>
    <audio ref="audioEl" autoplay>
        <source src="https://drive.google.com/uc?id=1_co39PvvAifJLgsCETd0Rds8oFpoNBoK&export=download" type="audio/mp3">

    </audio>
    <button style="height: 40px; width: 40px" 
        class="bg-amber-500 bg-opacity-50 backdrop-blur-lg rounded-full fixed bottom-40 text-lg grid place-items-center right-3 text-gray-100 z-50 border border-gray-200" 
        @click="control">
        <i v-if="!isPlayed" class="rotate-180 fa-solid fa-volume-off"></i>
        <i v-else class="rotate-180 fa-solid fa-volume-high"></i>
    </button>
</template>

<script setup>

import { ref, computed, watch } from 'vue'

const props = defineProps({
    audioPlay: {
        type: Boolean,
        default: false
    }
})

const audioEl = ref(null)

const isAudioPlay = computed(() => props.audioPlay)
const isPlayed = ref(false)

const audioClick = () => isPlayed.value = !isPlayed.value
const audioAction = () => isPlayed.value ? audioEl.value.play() : audioEl.value.pause()

const control = () => {
    audioClick()
    audioAction()
}

watch(isAudioPlay, control)

</script>