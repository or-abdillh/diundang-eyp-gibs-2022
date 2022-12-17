<template>
    <button @click="openInvitationHandler" 
        class="btn bg-blue-500 text-gray-100 border border-gray-300 font-medium">
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

const openInvitationHandler = () => {
    isOpened.value = true
    setTimeout(() => {
        emits('invitation:opened')
    }, 500);
}

</script>