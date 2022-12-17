<template>
    <section v-if="$route.query.vip === ''" class="p-5">
        <Card header-title="KONFIRMASI KEHADIRAN">
            <section>
                <p data-aos="zoom-in-up"  class="text-sm">Silahkan konfirmasi kehadiran dengan mengisi nama putra/i anda</p>
                <form @submit.prevent="formActionHandler" class="mt-4">
                    <!-- guest -->
                    <section data-aos="zoom-in-up"  class="mb-6">
                        <label for="guest" class="font-semibold">ORANG TUA / WALI DARI ANANDA:</label>
                        <input v-model="guest.writer" class="border-b border-gray-600 w-full focus:border focus:bg-tambourine mt-2 duration-300 outline-none rounded p-2" placeholder="Ketik disini" type="text" id="guest" required>
                    </section>
                    <!-- status -->
                    <section data-aos="zoom-in-up"  class="flex justify-center gap-4 font-semibold">
                        <button @click="setPresence(false)" class="btn w-full border bg-gray-100 border-tambourine">TIDAK BISA BERHADIR</button>
                        <button @click="setPresence(true)" class="btn w-full bg-tambourine">HADIR</button>
                    </section>
                </form>
            </section>
        </Card>
    </section>
</template>

<script setup>

import { reactive } from 'vue'
import axios from 'axios'
import Card from '@/components/base/Card.vue'

const guest = reactive(
    {
        writer: "hyuga",
        presence: false,
        content: "End Of Year Performance 2022 - Global Islamic Boarding School",
    }
)

const setPresence = bool => guest.presence = bool

// Credentials
const baseURL = import.meta.env.VITE_BASE_URL + 'message/12'
const headers = {
    token: import.meta.env.VITE_API_TOKEN
}

const formActionHandler = async () => {
    try {
        await fetch(baseURL, {
            method: 'POST',
            headers
        })
        alert('Terima kasih atas konfirmasi kehadiran anda')
    } catch(err) { console.log(err) }
}

</script>