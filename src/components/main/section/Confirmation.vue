<template>
    <section class="px-5 py-16">
        <Card class="bg-white" header-title="KONFIRMASI KEHADIRAN">
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
                        <button @click="setPresence(false)" class="btn w-full border bg-gray-100 border-tambourine disabled:opacity-25" :disabled="isProcess">TIDAK BISA BERHADIR</button>
                        <button @click="setPresence(true)" class="btn w-full bg-tambourine disabled:opacity-25" :disabled="isProcess">HADIR</button>
                    </section>
                </form>
            </section>
        </Card>
    </section>
</template>

<script setup>

import { reactive, ref } from 'vue'
import axios from 'axios'
import Card from '@/components/base/Card.vue'

const isProcess = ref(false)

const guest = reactive(
    {
        writer: "",
        presence: false,
        content: "Absensi - End Of Year Performance 2022 - Global Islamic Boarding School",
    }
)

const setPresence = bool => guest.presence = bool

// Credentials
const headers = {
    token: import.meta.env.VITE_TOKEN
}

const formActionHandler = async () => {
    isProcess.value = true;
    try {
        await axios.post(import.meta.env.VITE_MESSAGE_API, guest, { headers });
        // success
        alert("Terima kasih atas konfirmasi anda, pesan telah berhasil dikirimkan");
        isProcess.value = false
    } catch (err) { console.log(err) }
}

</script>