<template>
    <section class="p-5">
        <Card header-title="RUNDOWN KEGIATAN">
            <section class="flex flex-wrap gap-4">
                <template v-for="(rundown, x) in rundowns" :key="x">
                    <div data-aos="zoom-in-up"  class="w-full p-3 hover:scale-95 duration-300 border border-gray-300 bg-four-point-stars rounded-full flex items-center gap-3 bg-tambourine">
                        <span class="bg-sky-500 w-12 h-12 rounded-full grid place-items-center text-gray-100 font-semibold text-xl">{{ x + 1 }}</span>
                        <p class="text-xl text-left font-semibold">{{ rundown }}</p>
                    </div>
                </template>
            </section>
        </Card>
    </section>
</template>

<script setup>

import Card from '@/components/base/Card.vue'

const rundowns = [
    'Registrasi', 'Pembukaan', 'Pembacaan Doa', 'Tahfidz Al Qur\'an',
    'Sambutan - sambutan', 'Persembahan Siswa', 'Penutupan', 'Pembagian Rapor'
]

</script>