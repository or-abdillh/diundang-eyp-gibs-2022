<template>
    <section class="px-5 py-16">
        <Card class="bg-white" header-title="CATATAN">
            <section>
                <template v-for="(note, x) in notes" :key="x">
                    <div data-aos="zoom-in-up" class="flex items-start gap-5 mb-4 border-b border-gray-200 pb-3">
                        <span class="text-xl font-medium leading-7">{{ x + 1 }}.</span>
                        <p class="text-left">{{ note }}</p>
                    </div>
                </template>
            </section>
        </Card>
    </section>
</template>

<script setup>

import Card from '@/components/base/Card.vue'

const notes = [
    "Undangan hanya berlaku untuk orang tua/wali siswa SMP SMA GIBS maksimum 2 orang",
    "Orang tua/wali dimohon hadir tepat waktu",
    "Registrasi dibuka pukul 07:30 WITA dan acara di mulai pukul 08:30 WITA",
    "Orang tua/wali berpakaian rapi dan bebas pantas",
    "Selama kegiatan berlangsung tidak diperkenankan keluar/masuk ruangan (demi kekhidmatan acara)",
    "Menghimbau pada orang tua/wali membawa totebag/kantong untuk menyimpan alas kaki"
]

</script>