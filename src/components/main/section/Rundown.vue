<template>
<section class="px-5 py-16 bg-gray-50 bg-four-point-stars">
        <Card class="bg-sapphire" header-title="RUNDOWN KEGIATAN">
            <section class="flex flex-wrap gap-4">
                <template v-for="(rundown, x) in rundowns" :key="x">
                    <div data-aos="zoom-in-up"  class="w-full p-3 hover:scale-95 duration-300 rounded-full flex items-center gap-3 bg-tambourine">
                        <span class="bg-gray-50 w-12 h-12 rounded-full grid place-items-center font-semibold text-xl border border-gray-300">{{ x + 1 }}</span>
                        <p class="text-xl text-left font-semibold text-sapphire">{{ rundown }}</p>
                    </div>
                </template>
            </section>
        </Card>
    </section>
</template>

<script setup>

import Card from '@/components/base/Card.vue'

const rundowns = [
    'Registrasi', 'Pembukaan', 'Pembacaan Doa', 'Tahfidz',
    'Sambutan', 'Performance', 'Penutupan', 'Pembagian Rapor'
]

</script>