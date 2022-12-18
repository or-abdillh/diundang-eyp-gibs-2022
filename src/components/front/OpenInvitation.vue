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
const baseURL = import.meta.env.VITE_BASE_URL + '/visit/12'
const headers = {
    token: import.meta.env.VITE_API_TOKEN
}

const openInvitationHandler = async () => {
    isOpened.value = true
    try {
        await axios.post( baseURL, { headers } )
        emits('invitation:opened')
    } catch(err) { console.log(err) }
}

</script>