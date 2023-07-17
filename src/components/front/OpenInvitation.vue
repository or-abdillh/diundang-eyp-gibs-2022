<template>
    <button @click="openInvitationHandler" 
        class="btn bg-yellow-600 text-gray-100 border border-gray-300 font-medium">
        <i v-if="isOpened" class="fa-solid fa-envelope-open mr-1"></i>
        <i v-else class="fa-solid fa-envelope mr-1"></i>
        Buka Undangan
    </button>
</template>

<script setup>

import { ref } from 'vue'
import axios from 'axios'

const emits = defineEmits(['invitation:opened'])
const isOpened = ref(false)

// Credentials
const headers = {
    token: import.meta.env.VITE_TOKEN
}

// Record Traffic
const openInvitationHandler = async () => {
    isOpened.value = true
    try {
        await axios.post( import.meta.env.VITE_TRAFFIC_API, { headers } )
        emits('invitation:opened')
    } catch(err) { console.log(err) }
}

</script>