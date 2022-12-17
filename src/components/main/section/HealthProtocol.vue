<template>
    <section class="p-5">
        <Card header-title="PROTOKOL KESEHATAN">
            <p data-aos="zoom-in-up" class="text-sm">
                Guna mencegah penyebaran COVID-19 diharapkan bagi tamu undangan untuk memenuhi Protokol Kesehatan di bawah ini:
            </p>
            <section class="flex flex-wrap gap-3 justify-evenly mt-5">
                <template v-for="(protocol, x) in healthProtocols" :key="x">
                    <div data-aos="zoom-in-up" class="w-4/12 flex flex-col gap-3">
                        <img class="rounded-full" :src="protocol.poster" :alt="protocol.name">
                        <p class="leading-5">{{ protocol.name }}</p>
                    </div>
                </template>
            </section>
        </Card>
    </section>
</template>

<script setup>

import Card from '@/components/base/Card.vue'

const healthProtocols = [
    {
        name: 'Mencuci tangan',
        poster: '/img/wash-hands.jpg'
    },
    {
        name: 'Gunakan masker',
        poster: '/img/wear-mask.jpg'
    },
    {
        name: 'Menjaga jarak',
        poster: '/img/keep-distance.jpg'
    },
    {
        name: 'Menggunakan Handsanitizer',
        poster: '/img/use-handsanitizer.jpg'
    }
]

</script>